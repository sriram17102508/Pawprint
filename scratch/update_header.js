const fs = require('fs');
const path = require('path');

const workspacePath = 'c:\\Users\\HP\\OneDrive\\Documents\\GitHub\\Pawprint';

// 1. Process all HTML files
const files = fs.readdirSync(workspacePath);
const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(filename => {
    const filepath = path.join(workspacePath, filename);
    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;

    // Replace the dropdown trigger label "Company" with "About Us"
    // Handle whitespace/newline robustly
    content = content.replace(/Company(\s*)<svg width="10" height="6"/, (match, p1) => {
        return `About Us${p1}<svg width="10" height="6"`;
    });

    // Remove the Contact Us dropdown item button
    content = content.replace(/[ \t]*<button onclick="nav\('contact'\)" class="dropdown-item">✉️ Contact Us<\/button>\r?\n?/, '');

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated HTML: ${filename}`);
    }
});

// 2. Process pawprint-website.jsx
const jsxPath = path.join(workspacePath, 'pawprint-website.jsx');
if (fs.existsSync(jsxPath)) {
    let content = fs.readFileSync(jsxPath, 'utf8');
    const original = content;

    // Locate the NAV constant
    // We want to replace label: "Company" with label: "About Us" and remove the contact child.
    const target = `    {
      label: "Company",
      children: [
        { label: "📖 Our Story", page: "about" },
        { label: "✉️ Contact Us", page: "contact" },
      ],
    },`;

    const replacement = `    {
      label: "About Us",
      children: [
        { label: "📖 Our Story", page: "about" },
      ],
    },`;

    if (content.includes(target)) {
        content = content.replace(target, replacement);
    } else {
        // Try with normalized newlines
        const targetLF = target.replace(/\r\n/g, '\n');
        const contentLF = content.replace(/\r\n/g, '\n');
        if (contentLF.includes(targetLF)) {
            content = contentLF.replace(targetLF, replacement.replace(/\r\n/g, '\n'));
        } else {
            console.warn("Could not find NAV config in JSX file.");
        }
    }

    if (content !== original) {
        fs.writeFileSync(jsxPath, content, 'utf8');
        console.log('Updated pawprint-website.jsx');
    }
}
console.log("Header update completed!");
