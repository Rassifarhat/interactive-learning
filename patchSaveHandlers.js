const fs = require('fs');
const path = require('path');

// Path to app directory
const appDir = path.join(__dirname, 'app');

// Only target specific chapters
const targetChapters = ['csCh5', 'csCh6', 'csCh7'];
fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && targetChapters.includes(dirent.name))
  .forEach(dirent => {
    const dirName = dirent.name;
    const filePath = path.join(appDir, dirName, 'page.tsx');
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const chapter = parseInt(dirName.replace('csCh', ''), 10);

    // 1. Add import if missing
    if (!/saveNoteForRevision/.test(content)) {
      content = content.replace(/(import \{[^}]+\} from 'react';)/,
        `$1\nimport { saveNoteForRevision } from '../utilities/saveNoteForRevision';`
      );
    }

    // 2. Add isSaving state
    if (!/const \[isSaving/.test(content)) {
      content = content.replace(
        /const \[saveStatus[\s\S]*?];/,
        match => `${match}\n  const [isSaving, setIsSaving] = useState<boolean>(false);`
      );
    }

    // 3. Remove inline saveNoteForRevision function
    content = content.replace(/const saveNoteForRevision[\s\S]*?};\n/, '');

    // 4. Update button to call utility
    content = content.replace(
      /onClick=\{saveNoteForRevision\}/g,
      `onClick={() => saveNoteForRevision(activeNodeName, infoContent, 'computerScience', ${chapter}, setSaveStatus, setIsSaving)}`
    );

    // 5. Insert spinner overlay if missing
    if (!/{isSaving &&/.test(content)) {
      content = content.replace(
        /return \(\s*<div className="([^"]+)"/,
        `return (\n    <div className="relative">\n      {isSaving && (\n        <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center z-50">\n          <svg className="w-16 h-16 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />\n            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />\n          </svg>\n        </div>\n      )}\n      <div className="$1"`
      );
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched', filePath);
  });
