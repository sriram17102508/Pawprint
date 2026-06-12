$path = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint\pawprint-website.jsx"
$lines = Get-Content -Path $path
# Lines 1090 to 1101 are indexes 1089 to 1100.
# We want to replace these indexes with the Bento card layout.
$new_block = @(
'          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>',
'            {adoptPets.map((p, i) => (',
'              <div key={i} className="bento-pet-card" onClick={() => nav("adopt")}>',
'                <div className="photo-box" style={{ height: 180 }}>',
'                  <Img src={p.img} />',
'                  {p.vacc && <div className="badge-box">Vaccinated</div>}',
'                </div>',
'                <div className="info-grid">',
'                  <div className="info-main" style={{ padding: "10px 14px" }}>',
'                    <div className="pet-name" style={{ fontSize: 20 }}>{p.name}</div>',
'                    <div className="pet-meta" style={{ fontSize: 11, marginTop: 2 }}>{p.breed} · {p.loc}</div>',
'                  </div>',
'                  <div className="info-chip" style={{ fontSize: 11, padding: 6 }}>{p.age}</div>',
'                  <div className="info-chip" style={{ fontSize: 11, padding: 6 }}>{p.gender === "M" ? "Male" : "Female"}</div>',
'                  <button className="info-action" onClick={e => { e.stopPropagation(); nav("adopt"); }} style={{ padding: 8 }}>',
'                    Adopt →',
'                  </button>',
'                </div>',
'              </div>',
'            ))}',
'          </div>'
)

# Insert the replacement block
$result = $lines[0..1088] + $new_block + $lines[1101..($lines.Length-1)]
[System.IO.File]::WriteAllLines($path, $result, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Replaced home adopt cards using index-based layout"
