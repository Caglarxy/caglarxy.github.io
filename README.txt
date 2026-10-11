LPF.one — GitHub Pages V2.4 (analytics-free baseline)
==================================================

Based on V2.3.1, including its corrected CSS import.

Changes:
- Removed the Google Analytics script reference from all five HTML pages.
- Removed assets/analytics.js.
- Retained the existing responsive design, navigation, artwork and daily Swiss-time slogan rotation.
- Added “We Don't Track You. We Have Better Things to Do.” to assets/slogans.json (107 pairs total).
- No visitor analytics, tracking pixels or analytics cookies are added by this website's own code.

PUBLISHING / IMPORTANT DELETION:
1. Unzip the archive.
2. In GitHub repository lespetitesfugues/lespetitesfugues.github.io, delete
   the OLD file assets/analytics.js using the GitHub file view > Delete file
   (trash icon or ... menu), and commit the deletion.
   Uploading a ZIP's contents DOES NOT remove old repository files.
3. Upload the CONTENTS of this archive (not the ZIP) using Add file > Upload files.
   Overwrite changed files and commit. index.html must remain in the repository root.
4. Verify https://lpf.one and its About, Support, Organizer and Explorer pages.
5. Optionally verify in Safari Web Inspector > Network that there are no requests
   to googletagmanager.com or google-analytics.com from this site.

MAINTENANCE:
Edit assets/slogans.json in GitHub to add more title/description pairs.
Each pair can optionally include a category for editorial organization.
The slogans.js script deterministically shuffles the complete set and selects
one pair per Swiss calendar day.

Note: The site loads Lato from Google Fonts; that is not Google Analytics,
but it does contact an external Google service. The hosting provider may
also maintain technical server logs. Do not claim absolute zero data processing.
