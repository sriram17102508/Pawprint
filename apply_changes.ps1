$dir = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# 1. Update HTML files
$html_files = Get-ChildItem -Path $dir -Filter "*.html"
foreach ($file in $html_files) {
    $content = Get-Content -Raw -Path $file.FullName -Encoding UTF8
    $original = $content
    
    # Remove "Our Team" dropdown menu item using ASCII/regex match with non-greedy match for emoji
    $target_team = '(?s)\s*<button onclick="nav\(''about''\)" class="dropdown-item">.*?Our Team</button>'
    $content = $content -replace $target_team, ""
    
    # Correct â†‘ symbol to &uarr; in gotop-btn
    $content = $content.Replace("â†‘", "&uarr;")
    
    # Write back if changed
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
        Write-Host "Updated HTML basics in: $($file.Name)"
    }
}

# 2. Specific update for index.html (adding gotop-btn if missing, and updating CTA collage)
$index_path = Join-Path $dir "index.html"
if (Test-Path $index_path) {
    $content = Get-Content -Raw -Path $index_path -Encoding UTF8
    
    # Check gotop-btn presence
    if (-not $content.Contains("gotop-btn")) {
        $target_chatbot = '<!-- ==========================================\s*CHATBOT OVERLAY \(WIDGET\)\s*========================================== -->'
        $replacement_chatbot = "<!-- ==========================================`r`n       CHATBOT OVERLAY (WIDGET)`r`n       ========================================== -->`r`n  <!-- Go to Top Button -->`r`n  <button id=`"gotop-btn`" class=`"gotop-btn`" onclick=`"window.scrollTo({top: 0, behavior: 'smooth' })`" title=`"Go to Top`">&uarr;</button>"
        $content = [regex]::Replace($content, $target_chatbot, $replacement_chatbot)
        Write-Host "Added gotop-btn to index.html"
    }
    
    # Update CTA collage to use cta-img-card classes instead of static styled divs
    $old_cta_collage = '(?s)<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">\s*<div style="border-radius: 18px; overflow: hidden; height: 150px;"><img\s*src="https://images.unsplash.com/photo-1561037404-61cd46aa615b\?w=600&q=80&fit=crop"\s*style="width: 100%; height: 100%; object-fit: cover;" alt="Dog"></div>\s*<div style="border-radius: 18px; overflow: hidden; height: 150px; transform: translateY\(18px\);"><img\s*src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba\?w=600&q=80&fit=crop"\s*style="width: 100%; height: 100%; object-fit: cover;" alt="Cat"></div>\s*<div style="border-radius: 18px; overflow: hidden; height: 150px;"><img\s*src="https://images.unsplash.com/photo-1587300003388-59208cc962cb\?w=600&q=80&fit=crop"\s*style="width: 100%; height: 100%; object-fit: cover;" alt="Dog"></div>\s*<div style="border-radius: 18px; overflow: hidden; height: 150px; transform: translateY\(18px\);"><img\s*src="https://images.unsplash.com/photo-1573865526739-10659fec78a5\?w=600&q=80&fit=crop"\s*style="width: 100%; height: 100%; object-fit: cover;" alt="Cat"></div>\s*</div>'
    
    $new_cta_collage = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="cta-img-card">
              <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&fit=crop" alt="Dog">
            </div>
            <div class="cta-img-card offset">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80&fit=crop" alt="Cat">
            </div>
            <div class="cta-img-card">
              <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop" alt="Dog">
            </div>
            <div class="cta-img-card offset">
              <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80&fit=crop" alt="Cat">
            </div>
          </div>'
          
    if ([regex]::IsMatch($content, $old_cta_collage)) {
        $content = [regex]::Replace($content, $old_cta_collage, $new_cta_collage)
        Write-Host "Updated CTA collage images in index.html to use cta-img-card classes"
    } else {
        Write-Host "Could not find standard CTA collage images in index.html"
    }
    
    [System.IO.File]::WriteAllText($index_path, $content, (New-Object System.Text.UTF8Encoding $false))
}

# 3. Specific update for about.html (Mission & Vision cards styled classes)
$about_path = Join-Path $dir "about.html"
if (Test-Path $about_path) {
    $content = Get-Content -Raw -Path $about_path -Encoding UTF8
    
    # Replace Mission card opening div + background circle
    $old_mission_start = '(?s)<div\s*style="padding: 40px 44px; border-radius: 24px; background: var\(--color-cream\); border: 1px solid var\(--color-border\); position: relative; overflow: hidden;">\s*<div\s*style="position: absolute; top: -50px; right: -50px; width: 180px; height: 180px; border-radius: 50%; background: rgba\(229, 93, 26, 0.06\);">\s*</div>'
    $new_mission_start = '<div class="mission-card"><div class="glow-bg"></div>'
    
    # Replace Vision card opening div + background circle
    $old_vision_start = '(?s)<div\s*style="padding: 40px 44px; border-radius: 24px; background: var\(--color-ink\); position: relative; overflow: hidden;">\s*<div\s*style="position: absolute; top: -50px; right: -50px; width: 180px; height: 180px; border-radius: 50%; background: rgba\(29, 95, 196, 0.15\);">\s*</div>'
    $new_vision_start = '<div class="vision-card"><div class="glow-bg"></div>'
              
    if ([regex]::IsMatch($content, $old_mission_start)) {
        $content = [regex]::Replace($content, $old_mission_start, $new_mission_start)
        Write-Host "Updated Mission card styling in about.html"
    } else {
        Write-Host "Could not find standard Mission card start in about.html"
    }
    
    if ([regex]::IsMatch($content, $old_vision_start)) {
        $content = [regex]::Replace($content, $old_vision_start, $new_vision_start)
        Write-Host "Updated Vision card styling in about.html"
    } else {
        Write-Host "Could not find standard Vision card start in about.html"
    }
    
    [System.IO.File]::WriteAllText($about_path, $content, (New-Object System.Text.UTF8Encoding $false))
}

# 4. Update app.js
$app_js_path = Join-Path $dir "app.js"
if (Test-Path $app_js_path) {
    $content = Get-Content -Raw -Path $app_js_path -Encoding UTF8
    
    # Remove quote overlay (founder-overlay) from founder cards render
    $old_founder_overlay = '(?s)<!-- Quote overlay on hover -->\s*<div class="founder-overlay".*?</div>\s*</div>'
    $new_founder_overlay = '</div>'
    $content = [regex]::Replace($content, $old_founder_overlay, $new_founder_overlay)
    
    # Remove bio line from founder cards render
    $old_bio_line = '(?s)<p style="font-size: 13.5px; color: var\(--color-ink-sft\); line-height: 1.7; margin-bottom: 0;">\$\{l\.bio\.split\("\. "\)\.slice\(0, 2\)\.join\("\. "\)\}\.</p>'
    $content = [regex]::Replace($content, $old_bio_line, '')
    
    [System.IO.File]::WriteAllText($app_js_path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Updated app.js (removed founder overlay & bio)"
}

# 5. Update pawprint-website.jsx
$jsx_path = Join-Path $dir "pawprint-website.jsx"
if (Test-Path $jsx_path) {
    $content = Get-Content -Raw -Path $jsx_path -Encoding UTF8
    
    # Remove "Our Team" child from NAV Company
    $target_team_jsx = '(?s)\s*\{\s*label:\s*"Our Team",\s*page:\s*"about",\s*icon:\s*"."\s*\},'
    $content = $content -replace $target_team_jsx, ""
    
    # Remove quote overlay from founder card in JSX
    $target_overlay_jsx = '(?s)\{\/\* Quote overlay on hover \*\/\}\s*<div className="founder-overlay".*?<\/div>'
    $content = [regex]::Replace($content, $target_overlay_jsx, "")
    
    # Remove bio from founder card in JSX
    $target_bio_jsx = '(?s)<p style=\{\{\s*fontSize:\s*13\.5,\s*color:\s*C\.inkSft,\s*lineHeight:\s*1\.7,\s*marginBottom:\s*0\s*\}\}>\{l\.bio\.split\("\. "\)\.slice\(0, 2\)\.join\("\. "\)\}\.<\/p>'
    $content = [regex]::Replace($content, $target_bio_jsx, "")
    
    # Update Mission & Vision cards in JSX
    $old_mission_jsx = '(?s)<div style=\{\{\s*padding:\s*"40px 44px",\s*borderRadius:\s*24,\s*background:\s*C\.cream,\s*border:\s*`1px solid \$\{C\.border\}`,\s*position:\s*"relative",\s*overflow:\s*"hidden"\s*\}\}>\s*<div style=\{\{\s*position:\s*"absolute",\s*top:\s*-50,\s*right:\s*-50,\s*width:\s*180,\s*height:\s*180,\s*borderRadius:\s*"50%",\s*background:\s*`\$\{C\.orange\}12`\s*\}\}\s*\/>'
    $new_mission_jsx = '<div className="mission-card"><div className="glow-bg"></div>'
              
    $old_vision_jsx = '(?s)<div style=\{\{\s*padding:\s*"40px 44px",\s*borderRadius:\s*24,\s*background:\s*C\.ink,\s*position:\s*"relative",\s*overflow:\s*"hidden"\s*\}\}>\s*<div style=\{\{\s*position:\s*"absolute",\s*top:\s*-50,\s*right:\s*-50,\s*width:\s*180,\s*height:\s*180,\s*borderRadius:\s*"50%",\s*background:\s*`\$\{C\.blue\}20`\s*\}\}\s*\/>'
    $new_vision_jsx = '<div className="vision-card"><div className="glow-bg"></div>'
              
    if ([regex]::IsMatch($content, $old_mission_jsx)) {
        $content = [regex]::Replace($content, $old_mission_jsx, $new_mission_jsx)
        Write-Host "Updated Mission card styling in pawprint-website.jsx"
    } else {
        Write-Host "Could not find standard Mission card in pawprint-website.jsx"
    }
    
    if ([regex]::IsMatch($content, $old_vision_jsx)) {
        $content = [regex]::Replace($content, $old_vision_jsx, $new_vision_jsx)
        Write-Host "Updated Vision card styling in pawprint-website.jsx"
    } else {
        Write-Host "Could not find standard Vision card in pawprint-website.jsx"
    }
    
    [System.IO.File]::WriteAllText($jsx_path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Updated pawprint-website.jsx"
}

# 6. Update style.css (add mission/vision premium styles and remove founder hover scaling)
$css_path = Join-Path $dir "style.css"
if (Test-Path $css_path) {
    $content = Get-Content -Raw -Path $css_path -Encoding UTF8
    
    # Remove founder hover zoom scaling
    $old_founder_hover = '(?s)\.founder-card:hover img \{\s*transform: scale\(1\.06\);\s*\}\s*\.founder-card:hover \.founder-overlay \{\s*opacity: 1 !important;\s*\}'
    $content = [regex]::Replace($content, $old_founder_hover, '')
    
    # Append the premium mission/vision styles at the end
    $premium_styles = '
/* ==========================================
   Premium Mission & Vision Card Design
   ========================================== */
.mission-card, .vision-card {
  padding: 40px 44px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
  border: 1.5px solid transparent !important;
}

.mission-card {
  background: linear-gradient(135deg, #ffffff, #fffdfa);
  border-color: rgba(229, 93, 26, 0.08) !important;
  box-shadow: 0 10px 30px rgba(229, 93, 26, 0.03) !important;
}

.mission-card:hover {
  transform: translateY(-6px) scale(1.008);
  border-color: rgba(229, 93, 26, 0.25) !important;
  box-shadow: 0 20px 45px rgba(229, 93, 26, 0.12) !important;
}

.vision-card {
  background: linear-gradient(135deg, #181820, #0c0c10);
  border-color: rgba(41, 121, 255, 0.08) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
}

.vision-card:hover {
  transform: translateY(-6px) scale(1.008);
  border-color: rgba(41, 121, 255, 0.25) !important;
  box-shadow: 0 20px 45px rgba(41, 121, 255, 0.18) !important;
}

/* Glowing backdrops inside cards */
.mission-card .glow-bg {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(229, 93, 26, 0.15) 0%, rgba(229, 93, 26, 0) 70%);
  pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.mission-card:hover .glow-bg {
  transform: scale(1.2) translate(-10px, 10px);
}

.vision-card .glow-bg {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(41, 121, 255, 0.25) 0%, rgba(41, 121, 255, 0) 70%);
  pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.vision-card:hover .glow-bg {
  transform: scale(1.2) translate(-10px, 10px);
}
'
    $content = $content + $premium_styles
    [System.IO.File]::WriteAllText($css_path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Updated style.css"
}
