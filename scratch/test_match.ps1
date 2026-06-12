$path = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint\pawprint-website.jsx"
$content_auto = Get-Content -Raw -Path $path
$content_utf8 = Get-Content -Raw -Path $path -Encoding UTF8
$content_uni = Get-Content -Raw -Path $path -Encoding Unicode

$home_pattern = '(?s)<div style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(4,1fr\)",\s*gap:\s*20\s*\}\}>\s*\{adoptPets\.map'

Write-Host "Auto Match: $($content_auto -match $home_pattern)"
Write-Host "UTF8 Match: $($content_utf8 -match $home_pattern)"
Write-Host "Unicode Match: $($content_uni -match $home_pattern)"
