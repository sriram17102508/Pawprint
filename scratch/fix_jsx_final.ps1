$path = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint\pawprint-website.jsx"
$content = Get-Content -Raw -Path $path -Encoding UTF8

$o = [char]123
$c = [char]125

# Setup pattern
$pattern = '(?s)<div style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(4,1fr\)",\s*gap:\s*20\s*\}\}>\s*\{adoptPets\.map\(\(p,\s*i\)\s*=>\s*\(\s*<div\s*style=\{\{\s*color:\s*"rgba\(255,255,255,\.75\)",\s*fontSize:\s*11,\s*marginTop:\s*2\s*\}\}>\{p\.breed\}\s*·\s*\{p\.age\}\s*·\s*\{p\.loc\}</div>\s*</div>\s*</div>\s*<div style=\{\{\s*padding:\s*"12px\s*14px",\s*display:\s*"flex",\s*justifyContent:\s*"space-between",\s*alignItems:\s*"center"\s*\}\}>\s*<span style=\{\{\s*fontSize:\s*12,\s*color:\s*C\.inkSft\s*\}\}>\{p\.gender\s*===\s*"M"\s*\?\s*"Male"\s*:\s*"Female"\}</span>\s*<button className="btn btn-sm btn-primary" onClick=\{e => \{ e\.stopPropagation\(\);\s*nav\("adopt"\);\s*\}\}>Adopt</button>\s*</div>\s*</div>\s*\}\)\}\s*</div>'

# Construct replacement string
$replacement = "          <div style=$o$o display: `"grid`", gridTemplateColumns: `"repeat(4,1fr)`", gap: 20 $c$c>
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
                    Adopt →
                  </button>
                </div>
              </div>
            ))`$c
          </div>"

if ($content -match $pattern) {
    $content = [regex]::Replace($content, $pattern, $replacement)
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Successfully repaired React showcase cards"
} else {
    Write-Host "Pattern not matched in pawprint-website.jsx"
}
