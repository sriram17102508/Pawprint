const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/HP/OneDrive/Documents/GitHub/Pawprint';
const files = fs.readdirSync(directory);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to look for the volunteer button with nav('home') or nav('careers')
    // and replace with nav('volunteer')
    const regex1 = /<button\s+onclick=["']nav\('(?:home|careers)'\)["']\s+class=["']footer-link["']\s*>Volunteer<\/button>/gi;
    const regex2 = /nav\('(?:home|careers)'\)([^>]*>Volunteer<\/button>)/gi;
    
    let modified = false;
    if (regex1.test(content)) {
      content = content.replace(regex1, '<button onclick="nav(\'volunteer\')" class="footer-link">Volunteer</button>');
      modified = true;
    } else if (regex2.test(content)) {
      content = content.replace(regex2, "nav('volunteer')$1");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
