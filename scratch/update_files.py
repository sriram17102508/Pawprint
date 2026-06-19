# -*- coding: utf-8 -*-
import io
import os

files_to_update = [
    'adopt.html',
    'dog-breeds.html',
    'lost.html',
    'pet-videos.html',
    'shop.html'
]

workspace_path = r'c:\Users\HP\OneDrive\Documents\GitHub\Pawprint'

# Helper to load, replace, and save file with proper UTF-8 encoding
def patch_file(filename, replacements):
    filepath = os.path.join(workspace_path, filename)
    print(f"Processing: {filename}")
    with io.open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_length = len(content)
    for target, replacement in replacements:
        if target in content:
            content = content.replace(target, replacement)
        else:
            print(f"  WARNING: target not found in {filename}!")
            
    if len(content) != original_length or any(r[0] in content for r in replacements):
        with io.open(filepath, 'w', encoding='utf-8-sig') as f:
            f.write(content)
        print(f"  Successfully updated {filename}")
    else:
        print(f"  No changes made to {filename}")

# Footer replacement
footer_old = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint Technologies Pvt. Ltd. · Made With ❤️ In Coimbatore, India</p>'
footer_new = '<p style="color: rgba(255,255,255,.22); font-size: 12px; width: 100%;">© 2026 Pawprint · Made With ❤️ In Tamil Nadu, India</p>'

# 1. Update adopt.html
patch_file('adopt.html', [
    (
        '<section style="position: relative; height: 600px; overflow: hidden; display: flex; align-items: center; padding: 0;">',
        '<section style="position: relative; height: 540px; overflow: hidden; display: flex; align-items: center; padding: 0;">'
    ),
    (footer_old, footer_new)
])

# 2. Update dog-breeds.html
patch_file('dog-breeds.html', [
    (
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ),
    (
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ),
    (footer_old, footer_new)
])

# 3. Update lost.html
patch_file('lost.html', [
    (
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ),
    (
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; position: relative; z-index: 2;">'
    ),
    (footer_old, footer_new)
])

# 4. Update pet-videos.html
patch_file('pet-videos.html', [
    (
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ),
    (
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ),
    (footer_old, footer_new)
])

# 5. Update shop.html
patch_file('shop.html', [
    (
        '<section style="min-height: 500px; padding: 120px 0 80px; display: flex; align-items: center; position: relative; overflow: hidden;">',
        '<section style="height: 540px; display: flex; align-items: center; position: relative; overflow: hidden;">'
    ),
    (
        '<div\n          style="max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">',
        '<div\n          style="width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2;">'
    ),
    (footer_old, footer_new)
])

# 6. Update about.html stats container
about_stats_old = '''          <div
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
          </div>'''

about_stats_new = '''          <div
            style="display: flex; gap: 0; background: rgba(255,255,255,.08); backdrop-filter: blur(12px); border-radius: 18px; border: 1px solid rgba(255,255,255,.12); overflow: hidden; width: 100%; max-width: 600px;">
            <div style="flex: 1; padding: 18px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">45K+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Happy Pets</div>
            </div>
            <div style="flex: 1; padding: 18px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">1,200+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Vet Partners</div>
            </div>
            <div style="flex: 1; padding: 18px 10px; text-align: center; border-right: 1px solid rgba(255,255,255,.1);">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">8,200+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Adoptions</div>
            </div>
            <div style="flex: 1; padding: 18px 10px; text-align: center;">
              <div class="melody" style="font-size: 30px; color: var(--color-orange); line-height: 1;">85+</div>
              <div
                style="font-size: 11px; color: rgba(255,255,255,.55); margin-top: 4px; font-weight: 500; letter-spacing: .03em;">
                Cities</div>
            </div>
          </div>'''

patch_file('about.html', [(about_stats_old, about_stats_new)])

# 7. Update pawprint-website.jsx stats container
jsx_stats_old = '''          {/* Inline stats */}
          <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)", borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden", width: "fit-content" }}>
            {[["45K+", "Happy Pets"], ["1,200+", "Vet Partners"], ["8,200+", "Adoptions"], ["85+", "Cities"]].map(([v, l], i, arr) => (
              <div key={l} style={{ padding: "18px 32px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                <div className="melody" style={{ fontSize: 30, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500, letterSpacing: ".03em" }}>{l}</div>
              </div>
            ))}
          </div>'''

jsx_stats_new = '''          {/* Inline stats */}
          <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)", borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden", width: "100%", maxWidth: 600 }}>
            {[["45K+", "Happy Pets"], ["1,200+", "Vet Partners"], ["8,200+", "Adoptions"], ["85+", "Cities"]].map(([v, l], i, arr) => (
              <div key={l} style={{ flex: 1, padding: "18px 10px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                <div className="melody" style={{ fontSize: 30, color: C.orange, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500, letterSpacing: ".03em" }}>{l}</div>
              </div>
            ))}
          </div>'''

patch_file('pawprint-website.jsx', [(jsx_stats_old, jsx_stats_new)])

print("Done updates!")
