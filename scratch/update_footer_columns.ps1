$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Define the pattern to find the entire links column container
# Use a regex that matches from Services to Company columns
$pattern = '(?s)<!-- Links columns -->.*?Services</h4>.*?<button onclick="nav\(\''vet\''\)".*?</div>\s*</div>'

$replacement = @"
        <!-- Links columns -->
        <div>
          <h4
            style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 18px;">
            Services</h4>
          <button onclick="nav('vet')" class="footer-link">Veterinary</button>
          <button onclick="nav('svc-grooming')" class="footer-link">Grooming</button>
          <button onclick="nav('svc-training')" class="footer-link">Training</button>
          <button onclick="nav('svc-boarding')" class="footer-link">Boarding</button>
        </div>
        <div>
          <h4
            style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 18px;">
            Explore</h4>
          <button onclick="nav('adopt')" class="footer-link">Adopt a Pet</button>
          <button onclick="nav('dog-breeds')" class="footer-link">Dog Breeds</button>
          <button onclick="nav('shop')" class="footer-link">Pet Shop</button>
          <button onclick="nav('lost')" class="footer-link">Lost & Found</button>
        </div>
        <div>
          <h4
            style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 18px;">
            Company</h4>
          <button onclick="nav('about')" class="footer-link">About Us</button>
          <button onclick="nav('contact')" class="footer-link">Contact Us</button>
          <button onclick="nav('careers')" class="footer-link">Volunteer</button>
          <button onclick="nav('dashboard')" class="footer-link">Dashboard</button>
        </div>
      </div>
"@

Get-ChildItem -Path $dir -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $replacement
        Set-Content $_.FullName $content -NoNewline
        Write-Output "Updated footer in: $($_.Name)"
    } else {
        Write-Output "Pattern not matched in: $($_.Name)"
    }
}
Write-Output "Footer columns update completed."
