# UTF-8 clean file updates
$workspacePath = "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

function Patch-File {
    param(
        [string]$filename,
        [array]$replacements
    )
    $filepath = Join-Path $workspacePath $filename
    Write-Host "Processing: $filename"

    # Read using UTF-8
    $content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
    $originalLength = $content.Length

    foreach ($r in $replacements) {
        $target = $r[0]
        $replacement = $r[1]
        if ($content.Contains($target)) {
            $content = $content.Replace($target, $replacement)
        } else {
            Write-Warning "Target not found in $filename!"
        }
    }

    # Write using UTF-8 (without BOM is standard, but .NET UTF8 encoding is clean)
    $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($filepath, $content, $utf8NoBOM)
    Write-Host "Successfully patched $filename"
}

$footerOld = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India</p>'
$footerNew = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint · Made With ❤️ In Tamil Nadu, India</p>'

# 1. Update adopt.html
$adoptReplacements = @(
    @('<section style="position: relative; height: 600px; overflow: hidden; display: flex; align-items: center; padding: 0;">', '<section style="position: relative; height: 540px; overflow: hidden; display: flex; align-items: center; padding: 0;">'),
    @($footerOld, $footerNew)
)
Patch-File "adopt.html" $adoptReplacements

# 2. Update dog-breeds.html
$breedsReplacements = @(
    @('<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">', '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'),
    @("<div`r`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`r`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @("<div`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @($footerOld, $footerNew)
)
Patch-File "dog-breeds.html" $breedsReplacements

# 3. Update lost.html
$lostReplacements = @(
    @('<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">', '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'),
    @("<div`r`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;`">", "<div`r`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;`">"),
    @("<div`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;`">", "<div`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;`">"),
    @($footerOld, $footerNew)
)
Patch-File "lost.html" $lostReplacements

# 4. Update pet-videos.html
$videosReplacements = @(
    @('<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">', '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'),
    @("<div`r`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`r`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @("<div`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @($footerOld, $footerNew)
)
Patch-File "pet-videos.html" $videosReplacements

# 5. Update shop.html
$shopReplacements = @(
    @('<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">', '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'),
    @("<div`r`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`r`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @("<div`n          style=`"max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">", "<div`n          style=`"width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;`">"),
    @($footerOld, $footerNew)
)
Patch-File "shop.html" $shopReplacements

# 6. Update about.html (completely remove stats container)
$aboutStatsOld = '          <div
            style="display: flex; gap: 0; background: rgba(255,255,255,.08); backdrop-filter: blur(12px); border-radius: 18px; border: 1px solid rgba(255,255,255,.12); overflow: hidden; width: fit-content;">
            <div style="padding: 18px 32px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">45K+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Happy Pets</div>
            </div>
            <div style="padding: 18px 32px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">1,200+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Vet Partners</div>
            </div>
            <div style="padding: 18px 32px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">8,200+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Adoptions</div>
            </div>
            <div style="padding: 18px 32px; text-align: center;">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">85+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Cities</div>
            </div>
          </div>'

# Normalize newlines for stats container
$aboutStatsOldCRLF = $aboutStatsOld.Replace("`n", "`r`n")

Patch-File "about.html" @(
    @($aboutStatsOld, ""),
    @($aboutStatsOldCRLF, "")
)

# 7. Update pawprint-website.jsx (completely remove stats container)
$jsxStatsOld = '          {/* Inline stats */}
          <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)", borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden", width: "fit-content" }}>
            {[["45K+", "Happy Pets"], ["1,200+", "Vet Partners"], ["8,200+", "Adoptions"], ["85+", "Cities"]].map(([v, l], i, arr) => (
              <div key={l} style={{ padding: "18px 32px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                <div className="melody" style={{ fontSize: 30, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500, letterSpacing: ".03em" }}>{l}</div>
              </div>
            ))}
          </div>'

$jsxStatsOldCRLF = $jsxStatsOld.Replace("`n", "`r`n")

Patch-File "pawprint-website.jsx" @(
    @($jsxStatsOld, ""),
    @($jsxStatsOldCRLF, "")
)

Write-Host "All changes applied successfully!"
