# UTF-8 safe and robust script to apply all changes
$workspacePath = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Footer replacement
$footerOldText = "© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India"
$footerNewText = "© 2026 Pawprint · Made With ❤️ In Tamil Nadu, India"

# 1. Process all HTML files for footer replacement
$htmlFiles = Get-ChildItem -Path $workspacePath -Filter "*.html" -Recurse
foreach ($file in $htmlFiles) {
    $filepath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    if ($content.Contains($footerOldText)) {
        $content = $content.Replace($footerOldText, $footerNewText)
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
        Write-Host "Updated footer in: $($file.Name)"
    }
}

# Helper to apply clean string-based replacement on a single file
function Update-File-Explicit {
    param(
        [string]$filename,
        [string]$target,
        [string]$replacement
    )
    $filepath = Join-Path $workspacePath $filename
    if (-not (Test-Path $filepath)) { return }
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    if ($content.Contains($target)) {
        $content = $content.Replace($target, $replacement)
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
        Write-Host "  Applied text replace in $filename"
    } else {
        # Normalize and try
        $targetLF = $target.Replace("`r`n", "`n")
        $contentLF = $content.Replace("`r`n", "`n")
        if ($contentLF.Contains($targetLF)) {
            $content = $contentLF.Replace($targetLF, $replacement.Replace("`r`n", "`n"))
            $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
            [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
            Write-Host "  Applied normalized text replace in $filename"
        } else {
            Write-Warning "  Target not found in $filename"
        }
    }
}

# Helper to apply regex-based replacement on a single file
function Remove-File-Regex {
    param(
        [string]$filename,
        [string]$regexPattern
    )
    $filepath = Join-Path $workspacePath $filename
    if (-not (Test-Path $filepath)) { return }
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    
    # Run case-insensitive single-line regex replacement
    if ([regex]::IsMatch($content, $regexPattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)) {
        $content = [regex]::Replace($content, $regexPattern, "", [System.Text.RegularExpressions.RegexOptions]::Singleline)
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
        Write-Host "  Removed block via Regex in $filename"
    } else {
        Write-Warning "  Regex target not matched in $filename"
    }
}

# 2. Hero heights and widths for explore pages
Write-Host "Updating explore pages hero section layout..."

# adopt.html (min-height: 480px -> height: 540px)
Update-File-Explicit "adopt.html" 'style="position: relative; min-height: 480px; overflow: hidden; display: flex; align-items: center; padding: 100px 0 80px;"' 'style="position: relative; height: 540px; overflow: hidden; display: flex; align-items: center; padding: 0;"'

# about.html (min-height: 620px -> height: 540px)
Update-File-Explicit "about.html" 'style="position: relative; min-height: 620px; overflow: hidden; display: flex; align-items: center; padding: 80px 0 100px;"' 'style="position: relative; height: 540px; overflow: hidden; display: flex; align-items: center; padding: 0;"'
Update-File-Explicit "about.html" 'Our Story · Our Team · Our Mission' 'Our Story'

# Common hero section heights for shop.html, lost.html, dog-breeds.html, pet-videos.html
$heroStyleOld = 'style="padding: 120px 0 80px; position: relative; overflow: hidden;"'
$heroStyleNew = 'style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;"'

Update-File-Explicit "shop.html" $heroStyleOld $heroStyleNew
Update-File-Explicit "lost.html" $heroStyleOld $heroStyleNew
Update-File-Explicit "dog-breeds.html" $heroStyleOld $heroStyleNew
Update-File-Explicit "pet-videos.html" $heroStyleOld $heroStyleNew

# Container width left alignment
Update-File-Explicit "shop.html" 'style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;"' 'style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;"'
Update-File-Explicit "lost.html" 'style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"' 'style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"'
Update-File-Explicit "dog-breeds.html" 'style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"' 'style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"'


# 3. Remove stats blocks from about.html
Write-Host "Removing stats from about page..."
# Match about page stats container via regex
$aboutStatsRegex = '(?s)<div\s+style="display:\s*flex;\s*gap:\s*0;\s*background:\s*rgba\(255,255,255,\.08\);.*?Cities.*?</div>\s*</div>'
Remove-File-Regex "about.html" $aboutStatsRegex

# Match JSX stats container
$jsxAboutStatsRegex = '(?s)\{\/\*\s*Inline stats\s*\*\/\}\s*<div\s+style=\{\{\s*display:\s*"flex",\s*gap:\s*0,.*?Cities.*?\}\}\s*>\s*\{\[.*?\].map\(.*?\}\)\}\s*</div>'
Remove-File-Regex "pawprint-website.jsx" $jsxAboutStatsRegex


# 4. Remove services page stats block from all pages
Write-Host "Removing services stats..."
$servicesStatsRegex = '(?s)<div\s+style="display:\s*flex;\s*gap:\s*40px;\s*flex-wrap:\s*wrap;">.*?Platform Rating.*?</div>\s*</div>'

$filesWithStats = @(
    "index.html",
    "services.html",
    "svc-grooming.html",
    "svc-training.html",
    "svc-boarding.html",
    "svc-activity.html",
    "svc-retail.html",
    "svc-specialty.html",
    "svc-health.html"
)

foreach ($f in $filesWithStats) {
    Remove-File-Regex $f $servicesStatsRegex
}

# JSX services stats block regex
$jsxServicesStatsRegex = '(?s)\{\/\*\s*Quick stats\s*\*\/\}\s*<div\s+style=\{\{\s*display:\s*"flex",\s*gap:\s*40,\s*flexWrap:\s*"wrap"\s*\}\}>.*?Platform Rating.*?</div>\s*</div>'
Remove-File-Regex "pawprint-website.jsx" $jsxServicesStatsRegex

Write-Host "All updates finished!"
