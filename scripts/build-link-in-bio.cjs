const fs = require('fs');
const path = require('path');

const txtPath = path.resolve(__dirname, '../link-in-bio.txt');
const jsonPath = path.resolve(__dirname, '../src/link-in-bio.json');

const raw = fs.readFileSync(txtPath, 'utf8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
const entries = lines.map(line => {
  const [label, url] = line.split('|').map(s => s.trim());
  return { label, url };
});
fs.writeFileSync(jsonPath, JSON.stringify(entries, null, 2));
console.log(`Wrote ${entries.length} entries to src/link-in-bio.json`); 