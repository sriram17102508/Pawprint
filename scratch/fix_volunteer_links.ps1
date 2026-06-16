$directory = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"
$files = Get-ChildItem -Path $directory -Filter *.html

$target1 = '<button onclick="nav(''home'')" class="footer-link">Volunteer</button>'
$target2 = '<button onclick="nav(''careers'')" class="footer-link">Volunteer</button>'
$replacement = '<button onclick="nav(''volunteer'')" class="footer-link">Volunteer</button>'

foreach ($file in $files) {
    $filePath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    $modified = $false
    if ($content.Contains($target1)) {
        $content = $content.Replace($target1, $replacement)
        $modified = $true
    }
    if ($content.Contains($target2)) {
        $content = $content.Replace($target2, $replacement)
        $modified = $true
    }
    
    if ($modified) {
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name)"
    }
}
