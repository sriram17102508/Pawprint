$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Ultra-flexible regex pattern matching the credits bar and paragraph regardless of encoding, symbols, or linebreaks
$pattern = '(?s)<!-- Bottom credits bar -->\s*<div.*?>\s*<p.*?>\s*[c©&;a-zA-Z0-9\s]*2026 Pawprint Technologies Pvt. Ltd..*?Coimbatore, India.*?</p>\s*</div>'

$replacement = @'
      <!-- Bottom credits bar -->
      <div style="display: flex; justify-content: center; align-items: center; text-align: center; flex-wrap: wrap; gap: 10px;">
        <p style="color: rgba(255,255,255,0.22); font-size: 12px; width: 100%;">© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India</p>
      </div>
'@

Get-ChildItem -Path $dir -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $replacement
        Set-Content $_.FullName $content -NoNewline
        Write-Output "Centered footer credits in: $($_.Name)"
    } else {
        Write-Output "Pattern not matched in: $($_.Name)"
    }
}
Write-Output "Center alignment update completed."
