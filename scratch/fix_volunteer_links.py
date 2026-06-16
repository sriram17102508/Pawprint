import os
import re

directory = r"c:\Users\HP\OneDrive\Documents\GitHub\Pawprint"

# Find all HTML files
html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith(".html")]

pattern = re.compile(r'<button\s+onclick=["\']nav\(\'(?:home|careers)\'\)["\']\s+class=["\']footer-link["\']\s*>Volunteer</button>', re.IGNORECASE)

for file_path in html_files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Check if we need to replace
        new_content, count = pattern.subn(r'<button onclick="nav(\'volunteer\')" class="footer-link">Volunteer</button>', content)
        
        if count > 0:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(file_path)}: replaced {count} occurrence(s).")
        else:
            # Let's also check if there is any other Volunteer button layout in footer
            # e.g. onclick="nav('home')" or onclick="nav('careers')"
            # Let's do a broader check
            broad_pattern = re.compile(r'nav\(\'(?:home|careers)\'\)([^>]*>Volunteer</button>)', re.IGNORECASE)
            new_content, count = broad_pattern.subn(r"nav('volunteer')\1", content)
            if count > 0:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Broadly updated {os.path.basename(file_path)}: replaced {count} occurrence(s).")
            else:
                print(f"No match in {os.path.basename(file_path)}")
    except Exception as e:
        print(f"Error processing {os.path.basename(file_path)}: {e}")
