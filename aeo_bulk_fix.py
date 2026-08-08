"""
AEO Bulk Fix Script — Bongshai Engineering
Applies the following AEO trust signal upgrades across ALL HTML pages:
  1. Updates datetime from 2025-08-07 to 2026-08-08
  2. Updates date text to "August 8, 2026"
  3. Replaces all division-name reviewer bylines with:
     "Reviewed & Approved by SMA Awal, Chief Engineer, Bongshai Engineering & Construction"
  4. Injects AEO discovery <link> tags into <head> of any page missing them
  5. Upgrades FAQPage schema dateModified field to 2026-08-08

Run from: e:\\web\\Bongshai Engineering
"""

import os
import re
import glob

DIRECTORY = r"e:\web\Bongshai Engineering"
BASE_URL = "https://bongshaiengineering.com"

# The canonical author byline to use on every page
AUTHOR_BYLINE = "Reviewed &amp; Approved by <strong>SMA Awal, Chief Engineer</strong>, Bongshai Engineering &amp; Construction"

# AEO discovery links to inject
AEO_LINKS = """  <!-- AEO: AI Engine Discovery Links -->
  <link rel="llms-txt" href="/llms.txt" title="Machine-readable site summary for AI agents">
  <link rel="ai-content-policy" href="/agent-permissions.json" title="AI agent permissions and capabilities">
  <link rel="mcp-actions" href="/mcp-actions.json" title="WebMCP declarative actions for AI agents">"""

html_files = glob.glob(os.path.join(DIRECTORY, "*.html"))
html_files = [f for f in html_files if not f.endswith("verify_aeo.py")]

results = []

for file_path in html_files:
    filename = os.path.basename(file_path)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    changes = []

    # --- Fix 1: Update old datetime="2025-08-07" → 2026-08-08 ---
    if 'datetime="2025-08-07"' in content:
        content = content.replace('datetime="2025-08-07"', 'datetime="2026-08-08"')
        changes.append("Updated datetime 2025-08-07 to 2026-08-08")

    # --- Fix 2: Update old "Last updated: August 2025" text ---
    if "Last updated: August 2025" in content:
        content = content.replace("Last updated: August 2025", "Last updated: August 8, 2026")
        changes.append("Updated date text to August 8, 2026")

    # --- Fix 3: Replace division-name reviewer bylines with named Chief Engineer ---
    # Pattern: "· Reviewed by BONGSHAI E&amp;C [Division Name]" OR "· Reviewed & Approved by BONGSHAI E&amp;C ..."
    old_byline_pattern = re.compile(
        r'(?:·|&bull;)\s*(?:Reviewed(?:\s*&amp;\s*Approved)?\s*by|Verified by)\s+(?:BONGSHAI E&amp;C[^<"]*|S\. M\. Awal, CEO)',
        re.IGNORECASE
    )
    new_byline = f"&bull; {AUTHOR_BYLINE}"
    if old_byline_pattern.search(content):
        content = old_byline_pattern.sub(new_byline, content)
        changes.append("Upgraded reviewer byline to SMA Awal, Chief Engineer")

    # --- Fix 4: Also update the general-information.html specific byline ---
    if "Verified by S. M. Awal, CEO" in content:
        content = content.replace("Verified by S. M. Awal, CEO", f"Reviewed &amp; Approved by <strong>SMA Awal, Chief Engineer</strong>, Bongshai Engineering &amp; Construction")
        changes.append("Upgraded CEO byline to Chief Engineer")

    # --- Fix 5: Update FAQPage dateModified if present ---
    if '"dateModified"' in content and '"2025' in content:
        content = re.sub(r'"dateModified"\s*:\s*"2025[^"]*"', '"dateModified": "2026-08-08"', content)
        changes.append("Updated FAQPage dateModified to 2026-08-08")

    # --- Fix 6: Inject AEO discovery links if missing ---
    if 'rel="llms-txt"' not in content:
        # Inject after the last <link rel="stylesheet"...> or before </head>
        if '<link rel="stylesheet"' in content:
            # Find the last stylesheet link and inject after it
            last_stylesheet = content.rfind('<link rel="stylesheet"')
            # Find the end of that line
            end_of_line = content.find('\n', last_stylesheet)
            if end_of_line != -1:
                content = content[:end_of_line + 1] + "\n" + AEO_LINKS + "\n" + content[end_of_line + 1:]
                changes.append("Injected AEO discovery <link> tags")
        elif '</head>' in content:
            content = content.replace('</head>', AEO_LINKS + "\n</head>")
            changes.append("Injected AEO discovery <link> tags before </head>")

    # Write back if changed
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        results.append(f"[UPDATED] {filename}: {', '.join(changes)}")
    else:
        results.append(f"[SKIP]    {filename}: no changes needed")

print(f"\nAEO Bulk Fix -- Bongshai Engineering")
print(f"{'=' * 60}")
for r in results:
    print(r)
print(f"\nTotal files processed: {len(html_files)}")
print(f"Files updated: {sum(1 for r in results if r.startswith('[UPDATED]'))}")
