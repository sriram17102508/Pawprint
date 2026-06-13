# PowerShell script to update all HTML files in-place
$files = Get-ChildItem -Path "c:\Users\HP\OneDrive\Documents\GitHub\Pawprint" -Filter *.html

# Define the new SVG social buttons HTML block
$socialBlock = @"
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-social" onclick="alert('Redirecting to Facebook...')" aria-label="Facebook">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="display: block;"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </button>
            <button class="btn btn-social" onclick="alert('Redirecting to Instagram...')" aria-label="Instagram">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="display: block;"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </button>
            <button class="btn btn-social" onclick="alert('Redirecting to X...')" aria-label="X">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style="display: block;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button class="btn btn-social" onclick="alert('Redirecting to LinkedIn...')" aria-label="LinkedIn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="display: block;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </button>
            <button class="btn btn-social" onclick="alert('Redirecting to YouTube...')" aria-label="YouTube">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="display: block;"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 002.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </button>
          </div>
"@

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Raw -Path $file.FullName -Encoding UTF8
    
    # 1. Header Logo (40px -> 55px)
    $content = $content -replace 'style="width:\s*40px;\s*height:\s*40px;\s*object-fit:\s*contain;\s*flex-shrink:\s*0;"', 'style="width: 55px; height: 55px; object-fit: contain; flex-shrink: 0;"'

    # 2. Footer Logo (34px -> 48px)
    $content = $content -replace 'style="width:\s*34px;\s*height:\s*34px;\s*object-fit:\s*contain;\s*flex-shrink:\s*0;\s*border-radius:\s*8px;"', 'style="width: 48px; height: 48px; object-fit: contain; flex-shrink: 0; border-radius: 10px;"'

    # 3. Footer headings font-size (10px -> 14px)
    $content = $content -replace 'font-size:\s*10px;\s*font-weight:\s*700;\s*letter-spacing:\s*\.12em;\s*text-transform:\s*uppercase;\s*color:\s*rgba\(255,255,255,\.3\);', 'font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.35);'

    # 4. Footer contact strip center alignment
    $content = $content -replace 'style="display:\s*flex;\s*gap:\s*32px;\s*flex-wrap:\s*wrap;\s*padding:\s*20px\s*0;\s*border-top:\s*1px\s*solid\s*rgba\(255,255,255,\.07\);', 'style="display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,.07);'

    # 5. Rename Priya -> Geetha (safe plain ASCII replacements)
    $content = $content -replace 'Good morning,\s*Priya', 'Good morning, Geetha'
    $content = $content -replace 'Priya Sharma', 'Geetha Sharma'
    $content = $content -replace 'priya@example.com', 'geetha@example.com'
    $content = $content -replace 'priya@email.com', 'geetha@email.com'
    $content = $content -replace 'placeholder="Priya"', 'placeholder="Geetha"'
    $content = $content -replace 'placeholder=\s*''Priya''', 'placeholder="Geetha"'

    # 6. Replace Social Media Buttons Block
    $socialRegex = '(?s)<div style="display:\s*flex;\s*gap:\s*8px;">\s*<button class="btn btn-social" onclick="alert\(''Redirecting to Facebook\.\.\.''\)">f</button>\s*<button class="btn btn-social" onclick="alert\(''Redirecting to LinkedIn\.\.\.''\)">in</button>\s*<button class="btn btn-social" onclick="alert\(''Redirecting to X\.\.\.''\)">𝕏</button>\s*<button class="btn btn-social" onclick="alert\(''Redirecting to YouTube\.\.\.''\)">▶</button>\s*</div>'
    $content = [regex]::Replace($content, $socialRegex, $socialBlock)

    # 7. Remove Privacy, Terms, Cookies buttons at the bottom of footer
    $privacyRegex = '(?s)<div style="display:\s*flex;\s*gap:\s*20px;">\s*<button onclick="nav\(''home''\)" class="footer-bottom-link">Privacy</button>\s*<button onclick="nav\(''home''\)" class="footer-bottom-link">Terms</button>\s*<button onclick="nav\(''home''\)" class="footer-bottom-link">Cookies</button>\s*</div>'
    $content = [regex]::Replace($content, $privacyRegex, '')

    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
}
Write-Host "All HTML files updated successfully!"
