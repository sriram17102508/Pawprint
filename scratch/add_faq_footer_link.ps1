$directory = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"
$files = Get-ChildItem -Path $directory -Filter *.html

$target1 = '<button onclick="nav(''volunteer'')" class="footer-link">Volunteer</button>'
$target2 = '<button onclick="nav(''Volunteer'')" class="footer-link">Volunteer</button>'

$replacement = '<button onclick="nav(''volunteer'')" class="footer-link">Volunteer</button>' + "`r`n" + '          <button onclick="nav(''faq-reviews'')" class="footer-link">FAQs & Reviews</button>'

foreach ($file in $files) {
    $filePath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    # If the file already has faq-reviews button, skip adding it
    if ($content.Contains("nav('faq-reviews')") -or $content.Contains("nav(""faq-reviews"")")) {
        Write-Host "Skipping $($file.Name) - already has FAQs & Reviews link"
        
        # Make sure that Volunteer link is lowercase just in case
        if ($content.Contains($target2)) {
            $content = $content.Replace($target2, '<button onclick="nav(''volunteer'')" class="footer-link">Volunteer</button>')
            [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
            Write-Host "Normalized Volunteer link in $($file.Name)"
        }
        continue
    }
    
    $modified = $false
    if ($content.Contains($target1)) {
        $content = $content.Replace($target1, $replacement)
        $modified = $true
    }
    elseif ($content.Contains($target2)) {
        $content = $content.Replace($target2, $replacement)
        $modified = $true
    }
    
    if ($modified) {
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name) with FAQs & Reviews footer link"
    } else {
        Write-Host "Could not find Volunteer button in $($file.Name) to append FAQs link"
    }
}
