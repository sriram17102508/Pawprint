$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

Get-ChildItem -Path $dir -Filter *.html | ForEach-Object {
    $file = $_.FullName
    # Read the file as a single UTF-8 string using .NET to avoid encoding issues
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

    # 1. Clean Privacy Policy and Terms of Use (case-insensitive, handles nav('home') or nav('privacy')/nav('terms'))
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''(?:home|privacy|terms)\''\)" class="footer-link">Privacy Policy</button>.*\r?\n', ''
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''(?:home|privacy|terms)\''\)" class="footer-link">Terms [oO]f [uU]se</button>.*\r?\n', ''

    # 2. Reorganize links:
    # Remove Pet Walking & Specialty from Services column
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''svc-activity\''\)" class="footer-link">Pet Walking</button>.*\r?\n', ''
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''svc-specialty\''\)" class="footer-link">Specialty</button>.*\r?\n', ''

    # Remove Pet Videos & Dashboard from Explore column
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''pet-videos\''\)" class="footer-link">Pet Videos</button>.*\r?\n', ''
    $content = $content -replace '(?m)^[ \t]*<button onclick="nav\(\''dashboard\''\)" class="footer-link">Dashboard</button>.*\r?\n', ''

    # Replace Careers with Volunteer and add Dashboard below it in Company column
    $volunteerAndDashboard = "<button onclick=`"nav('careers')`" class=`"footer-link`">Volunteer</button>`r`n          <button onclick=`"nav('dashboard')`" class=`"footer-link`">Dashboard</button>"
    $content = $content -replace '<button onclick="nav\(\''careers\''\)" class="footer-link">Careers</button>', $volunteerAndDashboard
    
    # Also replace other instances of the word Careers in menus or text with Volunteer
    $content = $content -replace 'Careers', 'Volunteer'

    # 3. Center align bottom credits bar
    $content = $content -replace 'style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;"', 'style="display: flex; justify-content: center; align-items: center; text-align: center; flex-wrap: wrap; gap: 10px;"'
    $content = $content -replace 'font-size: 12px;">', 'font-size: 12px; width: 100%;">'

    # Write the updated content back in UTF-8
    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    Write-Output "Successfully updated footer in: $($_.Name)"
}
