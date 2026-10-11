LPF.one website V2.1 — Daily slogans in a separate JSON file

WHAT CHANGED
- Added assets/slogans.json with the original six headline/description pairs.
- Updated slogans.js to load the JSON file and use deterministic shuffling.
- No changes to the design, navigation, About, Support or application pages.

HOW TO ADD SLOGANS
Edit assets/slogans.json in GitHub (or locally) and add entries like:
  {"title": "Another headline.", "description": "Its matching sentence."}
Keep the square brackets, commas between entries, and double quotes valid JSON.
You can validate JSON at jsonlint.com before committing if desired.

BEHAVIOR
- A slogan changes once per Swiss calendar day (Europe/Zurich).
- The title and description are always selected as a pair.
- All visitors see the same pair on the same date.
- The order is deterministically shuffled for each complete cycle.
- Each pair appears exactly once per cycle, assuming the file stays unchanged.
- Adding/removing slogans changes the sequence, including which one appears today.
- If JSON cannot be loaded, the homepage displays its built-in default pair.
- The site remains fully static and works on GitHub Pages.

DEPLOY
Unzip this package. Upload the extracted files and assets folder into the
repository root using GitHub > Add file > Upload files, then Commit changes.
Do not upload the ZIP itself or nest the entire folder inside the repository.
To edit only slogans later, edit assets/slogans.json directly on GitHub.
