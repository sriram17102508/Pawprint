# UTF-8 clean file updates
$workspacePath = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Explicit helper function for patching files
function Update-File-Content {
    param(
        [string]$filename,
        [string]$target,
        [string]$replacement
    )
    $filepath = Join-Path $workspacePath $filename
    if (-not (Test-Path $filepath)) {
        Write-Host "File not found: $filename"
        return
    }
    
    # Read using UTF-8
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    
    # Try normal replacement
    if ($content.Contains($target)) {
        $content = $content.Replace($target, $replacement)
        Write-Host "  Successfully replaced target in $filename"
    } else {
        # Try normalizations for line endings
        $targetLF = $target.Replace("`r`n", "`n")
        $contentLF = $content.Replace("`r`n", "`n")
        if ($contentLF.Contains($targetLF)) {
            $content = $contentLF.Replace($targetLF, $replacement.Replace("`r`n", "`n"))
            Write-Host "  Successfully replaced normalized target in $filename"
        } else {
            Write-Warning "  Target not found in $filename"
        }
    }
    
    # Save back using UTF-8 (without BOM)
    $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
}

# 1. Alignments (add width: 100% to the hero text wrapper)
$styleCollapsingNormal = 'style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;"'
$styleFullWidthNormal   = 'style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;"'

$styleCollapsingFlex = 'style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"'
$styleFullWidthFlex   = 'style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;"'

Write-Host "Applying alignment fixes..."
Update-File-Content "adopt.html" $styleCollapsingNormal $styleFullWidthNormal
Update-File-Content "dog-breeds.html" $styleCollapsingNormal $styleFullWidthNormal
Update-File-Content "lost.html" $styleCollapsingFlex $styleFullWidthFlex
Update-File-Content "pet-videos.html" $styleCollapsingNormal $styleFullWidthNormal
Update-File-Content "shop.html" $styleCollapsingNormal $styleFullWidthNormal

# 2. Stats blocks to remove from HTML files
$statsGroomingOld = '          <div style="display: flex; gap: 40px; flex-wrap: wrap;">
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">70+</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Services</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">1,200+</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Professionals</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">85+</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Cities</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">4.9★</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Platform Rating</div>
            </div>
          </div>'

$statsServicesOld = '          <div style="display: flex; gap: 40px; flex-wrap: wrap;">
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">7</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Services</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">700+</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Professionals</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">100+</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Cities</div>
            </div>
            <div>
              <div class="melody" style="font-size: 32px; color: var(--color-orange); line-height: 1;">4.9★</div>
              <div style="font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px;">Platform Rating</div>
            </div>
          </div>'

$filesWithStats = @(
    "index.html",
    "services.html",
    "svc-grooming.html",
    "svc-training.html",
    "svc-boarding.html",
    "svc-activity.html",
    "svc-retail.html",
    "svc-specialty.html",
    "svc-health.html"
)

Write-Host "Removing services stats..."
foreach ($f in $filesWithStats) {
    Update-File-Content $f $statsGroomingOld ""
    Update-File-Content $f $statsServicesOld ""
}

# 3. JSX stats block to remove
$jsxStatsOld = '          {/* Quick stats */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[["70+", "Services"], ["1,200+", "Professionals"], ["85+", "Cities"], ["4.9★", "Platform Rating"]].map(([v, l]) => (
              <div key={l}>
                <div className="melody" style={{ fontSize: 32, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>'

Write-Host "Patching JSX file..."
Update-File-Content "pawprint-website.jsx" $jsxStatsOld ""

Write-Host "Done!"
