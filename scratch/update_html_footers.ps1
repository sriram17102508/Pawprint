$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"
Get-ChildItem -Path $dir -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Remove Privacy Policy
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''(?:home|privacy|terms)\''\)" class="footer-link">Privacy Policy</button>.*\r?\n', ''
    
    # Remove Terms of Use (case-insensitive)
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''(?:home|privacy|terms)\''\)" class="footer-link">Terms [oO]f [uU]se</button>.*\r?\n', ''
    
    # Replace Careers with Volunteer
    $content = $content -replace 'Careers', 'Volunteer'
    
    Set-Content $_.FullName $content -NoNewline
}
Write-Output "PowerShell update completed."
