import os
import re
import glob

directory = r"e:\web\Bongshai Engineering"
html_files = glob.glob(os.path.join(directory, "*.html"))

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    filename = os.path.basename(file_path)
    has_faq = bool(re.search(r'"@type":\s*"FAQPage"', content))
    has_last_updated = 'Last updated:' in content
    has_h1_q = bool(re.search(r'<h1[^>]*>[^<]*\?[^<]*</h1>', content))
    has_h2_q = bool(re.search(r'<h2[^>]*>[^<]*\?[^<]*</h2>', content))
    has_h3_q = bool(re.search(r'<h3[^>]*>[^<]*\?[^<]*</h3>', content))
    has_q = has_h1_q or has_h2_q or has_h3_q
    
    print(f"{filename.ljust(35)} FAQ: {str(has_faq).ljust(5)} | LastUpdated: {str(has_last_updated).ljust(5)} | QuestionHeadings: {str(has_q).ljust(5)}")
