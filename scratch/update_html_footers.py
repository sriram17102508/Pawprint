import os
import re

directory = r"c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Find all HTML files
html_files = [f for f in os.listdir(directory) if f.endswith(".html")]

for filename in html_files:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Remove Privacy Policy and Terms of Use lines
    # Matches patterns like: <button onclick="nav('...')" class="footer-link">Privacy Policy</button>
    content = re.sub(r'^[ \t]*<button onclick="nav\(\'(?:home|privacy|terms)\'\)" class="footer-link">Privacy Policy</button>.*\n', '', content, flags=re.MULTILINE | re.IGNORECASE)
    content = re.sub(r'^[ \t]*<button onclick="nav\(\'(?:home|privacy|terms)\'\)" class="footer-link">Terms Of Use</button>.*\n', '', content, flags=re.MULTILINE | re.IGNORECASE)
    content = re.sub(r'^[ \t]*<button onclick="nav\(\'(?:home|privacy|terms)\'\)" class="footer-link">Terms of Use</button>.*\n', '', content, flags=re.MULTILINE | re.IGNORECASE)

    # 2. Rename Careers to Volunteer
    content = re.sub(r'Careers', 'Volunteer', content)
    content = re.sub(r'careers.html', 'careers.html', content) # Ensure files are correct

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("HTML files successfully processed.")
