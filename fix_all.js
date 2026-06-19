const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 1. Fix Add to Cart in app.js
let appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(
  /<div style="padding: 20px 22px;">\s*<h3([\s\S]*?)<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">/,
  '<div style="padding: 20px 22px; display: flex; flex-direction: column; flex-grow: 1;">\n        <h3<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; margin-top: auto;">'
);
fs.writeFileSync(appJsPath, appJs);

// 2. Fix footer logo in all html files
const htmlFiles = glob.sync('*.html');
const logoReplacement = <img src="Logo.png" alt="Pawprint Logo"\n              style="width: 48px; height: 48px; object-fit: contain; flex-shrink: 0; border-radius: 10px;">;
const oldLogoRegex = /<div\\s*style="width: 48px; height: 48px; border-radius: 12px; background: var\\(--color-orange\\); display: flex; align-items: center; justify-content: center; font-size: 22px;">\\s*??\\s*<\\/div>/g;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(oldLogoRegex)) {
    content = content.replace(oldLogoRegex, logoReplacement);
    fs.writeFileSync(file, content);
  }
});

// 3. Let's check hero sections first to understand their current state
let heroStats = {};
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Usually the hero section is the first <section> inside #main-content
  const match = content.match(/<main id="main-content"[^>]*>\\s*<section[^>]*>\\s*<section style="([^"]*)"/);
  if (match) {
    heroStats[file] = match[1];
  }
});
console.log("Hero stats:", JSON.stringify(heroStats, null, 2));

