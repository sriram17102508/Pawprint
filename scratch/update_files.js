const fs = require('fs');
const path = require('path');

const workspacePath = 'c:\\Users\\HP\\OneDrive\\Documents\\GitHub\\Pawprint';

function patchFile(filename, replacements) {
    const filepath = path.join(workspacePath, filename);
    console.log(`Processing: ${filename}`);
    let content = fs.readFileSync(filepath, 'utf8');
    const originalLength = content.length;

    for (const [target, replacement] of replacements) {
        if (content.includes(target)) {
            content = content.split(target).join(replacement);
        } else {
            console.warn(`  WARNING: target not found in ${filename}!`);
        }
    }

    if (content.length !== originalLength || replacements.some(r => content.includes(r[1]))) {
        // Write as UTF-8
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`  Successfully updated {filename}`);
    } else {
        console.log(`  No changes made to ${filename}`);
    }
}

const footerOld = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India</p>';
const footerNew = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint · Made With ❤️ In Tamil Nadu, India</p>';

// 1. Update adopt.html
patchFile('adopt.html', [
    [
        '<section style="position: relative; height: 600px; overflow: hidden; display: flex; align-items: center; padding: 0;">',
        '<section style="position: relative; height: 540px; overflow: hidden; display: flex; align-items: center; padding: 0;">'
    ],
    [footerOld, footerNew]
]);

// 2. Update dog-breeds.html
patchFile('dog-breeds.html', [
    [
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ],
    [
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ],
    [footerOld, footerNew]
]);

// 3. Update lost.html
patchFile('lost.html', [
    [
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ],
    [
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;">'
    ],
    [footerOld, footerNew]
]);

// 4. Update pet-videos.html
patchFile('pet-videos.html', [
    [
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ],
    [
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ],
    [footerOld, footerNew]
]);

// 5. Update shop.html
patchFile('shop.html', [
    [
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ],
    [
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ],
    [footerOld, footerNew]
]);

// 6. Update about.html (completely remove stats container)
const aboutStatsOld = `          <div
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
          </div>`;

patchFile('about.html', [[aboutStatsOld, '']]);

// 7. Update pawprint-website.jsx (completely remove stats container)
const jsxStatsOld = `          {/* Inline stats */}
          <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)", borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden", width: "fit-content" }}>
            {[["45K+", "Happy Pets"], ["1,200+", "Vet Partners"], ["8,200+", "Adoptions"], ["85+", "Cities"]].map(([v, l], i, arr) => (
              <div key={l} style={{ padding: "18px 32px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                <div className="melody" style={{ fontSize: 30, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500, letterSpacing: ".03em" }}>{l}</div>
              </div>
            ))}
          </div>`;

patchFile('pawprint-website.jsx', [[jsxStatsOld, '']]);

console.log("Done updates!");
