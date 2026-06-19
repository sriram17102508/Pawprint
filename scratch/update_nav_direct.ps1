$workspacePath = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)

# 1. Process all HTML files
$htmlFiles = Get-ChildItem -Path $workspacePath -Filter "*.html"
foreach ($file in $htmlFiles) {
    $filepath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    
    $pattern = '(?s)<div class="nav-dropdown" style="position: relative;">\s*<button id="nav-btn-company" class="(?<class>[^"]+)" onclick="toggleDropdown\(''dropdown-company''\)">.*?</div>\s*</div>'
    
    if ($content -match $pattern) {
        $isSeqActive = $Matches['class'] -match "active"
        
        $replacement = ""
        if ($isSeqActive) {
            $replacement = '        <div style="position: relative;">
          <button id="nav-btn-about" class="nav-link active" onclick="nav(''about'')">About Us</button>
        </div>'
        } else {
            $replacement = '        <div style="position: relative;">
          <button id="nav-btn-about" class="nav-link" onclick="nav(''about'')">About Us</button>
        </div>'
        }
        
        $content = [regex]::Replace($content, $pattern, $replacement)
        [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
        Write-Host "Updated navigation in HTML: $($file.Name)"
    }
}

# 2. Process pawprint-website.jsx
$jsxPath = Join-Path $workspacePath "pawprint-website.jsx"
if (Test-Path $jsxPath) {
    $content = [System.IO.File]::ReadAllText($jsxPath, [System.Text.Encoding]::UTF8)
    
    $contentLF = $content.Replace("`r`n", "`n")
    
    $targetLF = '    {
      label: "About Us",
      children: [
        { label: "📖 Our Story", page: "about" },
      ],
    },'
    
    $replacementLF = '    { label: "About Us", page: "about" },'
    
    $targetLF = $targetLF.Replace("`r`n", "`n")
    $replacementLF = $replacementLF.Replace("`r`n", "`n")
    
    if ($contentLF.Contains($targetLF)) {
        $contentNew = $contentLF.Replace($targetLF, $replacementLF)
        [System.IO.File]::WriteAllText($jsxPath, $contentNew, $utf8NoBOM)
        Write-Host "Updated pawprint-website.jsx"
    } else {
        Write-Warning "Could not find About Us NAV pattern in pawprint-website.jsx"
    }
}
Write-Host "Direct links update finished!"
