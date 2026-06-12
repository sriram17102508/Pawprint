$path = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint\pawprint-website.jsx"
$content = Get-Content -Raw -Path $path -Encoding UTF8

$o = [char]123
$c = [char]125
$arrow = [char]8594

# 1. Update GlobalStyles
$css_pattern = '(?s)(::-webkit-scrollbar-thumb\{background:\$\{C\.sand\};border-radius:4px;\})'
$css_replacement = "`$1`r`n`r`n/* ---------- Bento Pet Card Design ---------- */`r`n.bento-pet-card {`r`n  background: `$o`C.white`$c;`r`n  border-radius: 24px;`r`n  border: 1px solid `$o`C.border`$c;`r`n  padding: 16px;`r`n  display: grid;`r`n  grid-template-rows: 240px auto;`r`n  gap: 12px;`r`n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);`r`n  position: relative;`r`n  overflow: hidden;`r`n  cursor: pointer;`r`n}`r`n`r`n.bento-pet-card:hover {`r`n  transform: translateY(-6px);`r`n  box-shadow: 0 20px 40px rgba(17, 17, 17, 0.08);`r`n  border-color: rgba(229, 93, 26, 0.3);`r`n}`r`n`r`n.bento-pet-card .photo-box {`r`n  grid-row: 1;`r`n  position: relative;`r`n  border-radius: 18px;`r`n  overflow: hidden;`r`n  height: 240px;`r`n}`r`n`r`n.bento-pet-card .photo-box img {`r`n  width: 100%;`r`n  height: 100%;`r`n  object-fit: cover;`r`n  transition: transform 0.5s ease;`r`n}`r`n`r`n.bento-pet-card:hover .photo-box img {`r`n  transform: scale(1.04);`r`n}`r`n`r`n.bento-pet-card .fav-btn {`r`n  position: absolute;`r`n  top: 12px;`r`n  right: 12px;`r`n  width: 38px;`r`n  height: 38px;`r`n  border-radius: 50%;`r`n  background: rgba(255, 255, 255, 0.85);`r`n  backdrop-filter: blur(8px);`r`n  border: 1px solid rgba(0, 0, 0, 0.05);`r`n  font-size: 16px;`r`n  cursor: pointer;`r`n  display: flex;`r`n  align-items: center;`r`n  justify-content: center;`r`n  transition: all 0.2s ease;`r`n  z-index: 2;`r`n}`r`n`r`n.bento-pet-card .fav-btn:hover {`r`n  transform: scale(1.1);`r`n  background: #fff;`r`n}`r`n`r`n.bento-pet-card .badge-box {`r`n  position: absolute;`r`n  top: 12px;`r`n  left: 12px;`r`n  background: `$o`C.green`$c;`r`n  color: #fff;`r`n  font-size: 10px;`r`n  font-weight: 700;`r`n  padding: 5px 12px;`r`n  border-radius: 100px;`r`n  text-transform: uppercase;`r`n  letter-spacing: 0.05em;`r`n  box-shadow: 0 4px 12px rgba(30, 107, 69, 0.25);`r`n  z-index: 2;`r`n}`r`n`r`n.bento-pet-card .info-grid {`r`n  display: grid;`r`n  grid-template-columns: 1fr 1fr;`r`n  gap: 8px;`r`n}`r`n`r`n.bento-pet-card .info-main {`r`n  grid-column: span 2;`r`n  background: `$o`C.cream`$c;`r`n  border-radius: 16px;`r`n  padding: 16px 20px;`r`n  display: flex;`r`n  flex-direction: column;`r`n  justify-content: center;`r`n  transition: background 0.2s ease;`r`n}`r`n`r`n.bento-pet-card:hover .info-main {`r`n  background: `$o`C.creamDk`$c;`r`n}`r`n`r`n.bento-pet-card .info-main .pet-name {`r`n  font-family: 'Bebas Neue', Impact, sans-serif;`r`n  color: `$o`C.ink`$c;`r`n  font-size: 26px;`r`n  font-weight: 400;`r`n  letter-spacing: 0.02em;`r`n  line-height: 1;`r`n}`r`n`r`n.bento-pet-card .info-main .pet-meta {`r`n  color: `$o`C.inkSft`$c;`r`n  font-size: 13px;`r`n  margin-top: 4px;`r`n  font-weight: 500;`r`n}`r`n`r`n.bento-pet-card .info-chip {`r`n  background: #fff;`r`n  border: 1px solid `$o`C.border`$c;`r`n  border-radius: 14px;`r`n  padding: 10px;`r`n  text-align: center;`r`n  font-size: 12px;`r`n  font-weight: 700;`r`n  color: `$o`C.inkMd`$c;`r`n  display: flex;`r`n  align-items: center;`r`n  justify-content: center;`r`n}`r`n`r`n.bento-pet-card .info-action {`r`n  grid-column: span 2;`r`n  background: `$o`C.orange`$c;`r`n  color: #fff;`r`n  border-radius: 16px;`r`n  padding: 12px;`r`n  display: flex;`r`n  align-items: center;`r`n  justify-content: center;`r`n  gap: 8px;`r`n  font-weight: 700;`r`n  font-size: 14px;`r`n  border: none;`r`n  cursor: pointer;`r`n  transition: all 0.2s ease;`r`n}`r`n`r`n.bento-pet-card .info-action:hover {`r`n  background: #C94E12;`r`n  box-shadow: 0 4px 12px rgba(229, 93, 26, 0.25);`r`n}"

$content = [regex]::Replace($content, $css_pattern, $css_replacement)

# 2. Update Homepage showcase grid
$home_pattern = '(?s)<div style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(4,1fr\)",\s*gap:\s*20\s*\}\}>\s*\{adoptPets\.map\(\(p,\s*i\)\s*=>\s*\(\s*<div\s*key=\{i\}\s*className="card-lift".*?Adopt</button>\s*</div>\s*</div>\s*\}\)\}\s*</div>'
$home_replacement = "          <div style=$o$o display: `"grid`", gridTemplateColumns: `"repeat(4,1fr)`", gap: 20 $c$c>
            $o`adoptPets.map((p, i) => (
              <div key=$o`i`$c className=`"bento-pet-card`" onClick={() => nav(`"adopt`")}>
                <div className=`"photo-box`" style=$o$o height: 180 $c$c>
                  <Img src=$o`p.img`$c />
                  $o`p.vacc && <div className=`"badge-box`">Vaccinated</div>`$c
                </div>
                <div className=`"info-grid`">
                  <div className=`"info-main`" style=$o$o padding: `"10px 14px`" $c$c>
                    <div className=`"pet-name`" style=$o$o fontSize: 20 $c$c>$o`p.name`$c</div>
                    <div className=`"pet-meta`" style=$o$o fontSize: 11, marginTop: 2 $c$c>$o`p.breed`$c · $o`p.loc`$c</div>
                  </div>
                  <div className=`"info-chip`" style=$o$o fontSize: 11, padding: 6 $c$c>$o`p.age`$c</div>
                  <div className=`"info-chip`" style=$o$o fontSize: 11, padding: 6 $c$c>$o`p.gender === `"M`" ? `"Male`" : `"Female`"`$c</div>
                  <button className=`"info-action`" onClick=$o`e => $o` e.stopPropagation(); nav(`"adopt`"); `$c`$c style=$o$o padding: 8 $c$c>
                    Adopt $arrow
                  </button>
                </div>
              </div>
            ))`$c
          </div>"

if ($content -match $home_pattern) {
    $content = [regex]::Replace($content, $home_pattern, $home_replacement)
    Write-Host "Matched and updated homepage showcase grid"
} else {
    Write-Host "Homepage showcase grid pattern NOT matched!"
}

# 3. Update Adopt page padding
$pad_pattern = '(<section style=\{\{\s*padding:\s*"0 0 100px",\s*background:\s*C\.cream\s*\}\}>)'
$pad_replacement = '      <section style={{ padding: "40px 0 100px", background: C.cream }}>'
$content = [regex]::Replace($content, $pad_pattern, $pad_replacement)

# 4. Update AdoptPage grid layout
# Note the literal arrow is replaced with .*? in grid_pattern regex below to prevent encoding parser error.
$grid_pattern = '(?s)<div style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(3,1fr\)",\s*gap:\s*24\s*\}\}>\s*\{filtered\.map\(p\s*=>\s*\(\s*<div\s*key=\{p\.id\}\s*className="card card-lift".*?Adopt.*?</button>\s*</div>\s*</div>\s*\}\)\}\s*</div>'
$grid_replacement = "          <div style=$o$o display: `"grid`", gridTemplateColumns: `"repeat(3,1fr)`", gap: 28 $c$c>
            $o`filtered.map(p => (
              <div key=$o`p.id`$c className=`"bento-pet-card`" onClick={() => $o` setDetail(p.id); setStep(`"detail`"); `$c}>
                <div className=`"photo-box`">
                  <Img src=$o`p.img`$c />
                  <button onClick=$o`e => $o` e.stopPropagation(); setFavs(f => f.includes(p.id) ? f.filter(x => x !== p.id) : [...f, p.id]); `$c`$c className=`"fav-btn`">
                    $o`favs.includes(p.id) ? `"❤️`" : `"🤍`"`$c
                  </button>
                  $o`p.vacc && <div className=`"badge-box`">Vaccinated</div>`$c
                </div>
                <div className=`"info-grid`">
                  <div className=`"info-main`">
                    <div className=`"pet-name`">$o`p.name`$c</div>
                    <div className=`"pet-meta`">$o`p.breed`$c · $o`p.loc`$c</div>
                  </div>
                  <div className=`"info-chip`">$o`p.age`$c</div>
                  <div className=`"info-chip`">$o`p.gender`$c</div>
                  <button className=`"info-action`" onClick=$o`e => $o` e.stopPropagation(); setDetail(p.id); setStep(`"detail`"); `$c`$c>
                    Adopt $arrow
                  </button>
                </div>
              </div>
            ))`$c
          </div>"

if ($content -match $grid_pattern) {
    $content = [regex]::Replace($content, $grid_pattern, $grid_replacement)
    Write-Host "Matched and updated AdoptPage grid layout"
} else {
    Write-Host "AdoptPage grid layout pattern NOT matched!"
}

# Save final content
[System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Finished running JSX regex update script."
