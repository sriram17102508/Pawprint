$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# 1. Update Footer Links & Clean Privacy Policy/Terms Of Use in all files
$footerPattern = '(?s)<!-- Links columns -->.*?Services</h4>.*?<button onclick="nav\(\''vet\''\)".*?</div>\s*</div>'
$footerReplacement = @'
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
'@

# 2. Update bottom credits bar alignment and text
$creditsPattern = '(?s)<!-- Bottom credits bar -->\s*<div.*?>\s*<p.*?>\s*[c©&;a-zA-Z0-9\s]*2026 Pawprint Technologies Pvt. Ltd..*?Coimbatore, India.*?</p>\s*</div>'
$creditsReplacement = @'
      <!-- Bottom credits bar -->
      <div style="display: flex; justify-content: center; align-items: center; text-align: center; flex-wrap: wrap; gap: 10px;">
        <p style="color: rgba(255,255,255,0.22); font-size: 12px; width: 100%;">© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India</p>
      </div>
'@

# 3. Search and Filters + AI Banner block replacement for vet.html and index.html
$vetSectionPattern = '(?s)<div\s*style="position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 40px;">\s*<div style="flex: 1; min-width: 320px;">.*?Not Sure If Your Pet Needs A Vet\?.*?Try AI →</button>\s*</div>\s*</div>\s*</div>\s*</section>\s*<section style="padding: 20px 0 100px; background: var\(--color-cream\);">\s*<div id="vets-list".*?</div>\s*</section>'

$vetSectionReplacement = @'
          <div
            style="position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 0 32px; width: 100%;">
            <div style="max-width: 600px;">
              <div class="pill pill-blue" style="margin-bottom: 24px;">Veterinary</div>
              <h1 class="melody-italic"
                style="font-size: clamp(52px,7vw,94px); font-weight: 700; line-height: .92; color: #fff; margin-bottom: 24px;">
                World-Class<br>Vet Care.</h1>
              <p
                style="font-size: 18px; color: rgba(255, 255, 255, 0.75); line-height: 1.7; max-width: 480px;">
                Book Certified Veterinarians For Home Visits, Clinic Appointments, Or Live Video Consultations — 24/7.</p>
            </div>
          </div>
        </section>
        
        <!-- AI Symptom Checker Banner Section -->
        <section style="padding: 40px 0 0; background: var(--color-cream);">
          <div style="max-width: 1280px; margin: 0 auto; padding: 0 32px;">
            <div style="background: linear-gradient(135deg, #1D5FC4 0%, #0F3B8C 100%); border-radius: 24px; padding: 32px 40px; color: #fff; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; box-shadow: 0 16px 40px rgba(29, 95, 196, 0.15); border: 1px solid rgba(255,255,255,0.1);">
              <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
                <div style="font-size: 38px; background: rgba(255,255,255,0.12); width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px);">🤖</div>
                <div>
                  <h3 class="melody" style="font-size: 22px; font-weight: 700; margin-bottom: 6px; color: #fff;">Not Sure If Your Pet Needs A Vet?</h3>
                  <p style="font-size: 14px; color: rgba(255, 255, 255, 0.85); max-width: 600px; line-height: 1.5;">Use our smart AI Symptom Checker for instant, evidence-based triage guidance and care recommendations 24/7.</p>
                </div>
              </div>
              <button class="btn btn-md btn-white" style="background: #fff; color: #1D5FC4; font-weight: 700; border-radius: 100px; padding: 12px 28px; border: none; cursor: pointer; transition: all 0.2s;"
                onclick="openChatWithQuery('Tell me about AI health assistant')">Try AI Symptom Checker →</button>
            </div>
          </div>
        </section>

        <section style="padding: 40px 0 100px; background: var(--color-cream);">
          <!-- Search & Filter Controls -->
          <div style="max-width: 1280px; margin: 0 auto 32px; padding: 0 32px;">
            <div style="display: flex; gap: 16px; flex-wrap: wrap; background: var(--color-white); padding: 18px 24px; border-radius: 18px; border: 1px solid var(--color-border); box-shadow: 0 12px 32px rgba(0,0,0,0.03); align-items: center;">
              <!-- Search Bar -->
              <div style="flex: 1; min-width: 280px; position: relative;">
                <span style="position: absolute; left: 18px; top: 50%; transform: translateY(-50%); font-size: 16px; color: var(--color-ink-sft);">🔍</span>
                <input type="text" id="vet-search-input" oninput="filterVets()" placeholder="Search vets by name, specialty, language, or location..."
                  style="width: 100%; padding: 12px 16px 12px 48px; border-radius: 12px; border: 1.5px solid var(--color-border); background: var(--color-cream-lt); font-size: 14px; outline: none; transition: border .2s; font-family: inherit;">
              </div>
              
              <!-- Location Filter -->
              <div style="min-width: 180px;">
                <select id="vet-filter-location" onchange="filterVets()"
                  style="width: 100%; padding: 12px 16px; border-radius: 12px; border: 1.5px solid var(--color-border); background: var(--color-white); font-size: 14px; color: var(--color-ink-sft); outline: none; cursor: pointer; font-family: inherit;">
                  <option value="">All Locations</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </div>

              <!-- Availability Filter -->
              <div style="min-width: 180px;">
                <select id="vet-filter-availability" onchange="filterVets()"
                  style="width: 100%; padding: 12px 16px; border-radius: 12px; border: 1.5px solid var(--color-border); background: var(--color-white); font-size: 14px; color: var(--color-ink-sft); outline: none; cursor: pointer; font-family: inherit;">
                  <option value="">All Timings</option>
                  <option value="morning">Morning (Before 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (After 4 PM)</option>
                </select>
              </div>
            </div>
          </div>

          <div id="vets-list"
            style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; flex-direction: column; gap: 24px;">
            <!-- Loaded dynamically in app.js -->
          </div>
        </section>
'@

Get-ChildItem -Path $dir -Filter *.html | ForEach-Object {
    $file = $_.FullName
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    
    # Apply footer reorganization
    if ($content -match $footerPattern) {
        $content = $content -replace $footerPattern, $footerReplacement
    }
    
    # Apply credits centering
    if ($content -match $creditsPattern) {
        $content = $content -replace $creditsPattern, $creditsReplacement
    }

    # Replace "Careers" with "Volunteer" (case sensitive)
    $content = $content -replace 'Careers', 'Volunteer'
    
    # Apply vet.html and index.html search UI & AI banner
    if ($_.Name -eq "vet.html" -or $_.Name -eq "index.html") {
        if ($content -match $vetSectionPattern) {
            $content = $content -replace $vetSectionPattern, $vetSectionReplacement
        }
    }

    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    Write-Output "Applied clean updates to: $($_.Name)"
}
