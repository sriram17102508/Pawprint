$workspacePath = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)

# 1. Process HTML files
$htmlFiles = Get-ChildItem -Path $workspacePath -Filter "*.html"
foreach ($file in $htmlFiles) {
    $filepath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    $original = $content

    # Replace the dropdown trigger label "Company" with "About Us"
    $patternBtn = "Company(\s*<svg width=`"10`" height=`"6`")"
    if ([regex]::IsMatch($content, $patternBtn)) {
        $content = [regex]::Replace($content, $patternBtn, "About Us`$1")
    }

    # Remove the Contact Us button cleanly from the dropdown
    $patternContact = "[ \t]*<button onclick=`"nav\('contact'\)`" class=`"dropdown-item`">✉️ Contact Us</button>\r?\n?"
    if ([regex]::IsMatch($content, $patternContact)) {
        $content = [regex]::Replace($content, $patternContact, "")
    }

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
        Write-Host "Updated HTML: $($file.Name)"
    }
}

# 2. Process pawprint-website.jsx
$jsxPath = Join-Path $workspacePath "pawprint-website.jsx"
if (Test-Path $jsxPath) {
    $content = [System.IO.File]::ReadAllText($jsxPath, [System.Text.Encoding]::UTF8)
    
    # Normalize newlines to LF for reliable match
    $contentLF = $content.Replace("`r`n", "`n")
    $targetLF = "    {`n      label: `"Company`",`n      children: [`n        { label: `"📖 Our Story`", page: `"about`" },`n        { label: `"✉️ Contact Us`", page: `"contact`" },`n      ],`n    },"
    $replacementLF = "    {`n      label: `"About Us`",`n      children: [`n        { label: `"📖 Our Story`", page: `"about`" },`n      ],`n    },"
    
    if ($contentLF.Contains($targetLF)) {
        $contentNew = $contentLF.Replace($targetLF, $replacementLF)
        [System.IO.File]::WriteAllText($jsxPath, $contentNew, $utf8NoBOM)
        Write-Host "Updated pawprint-website.jsx"
    } else {
        Write-Warning "Could not find NAV pattern in pawprint-website.jsx"
    }
}
Write-Host "Header update finished!"
