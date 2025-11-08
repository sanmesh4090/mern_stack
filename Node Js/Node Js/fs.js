const fs = require('fs');

try {
  // Write to a file synchronously
  fs.writeFileSync('demo.txt', 'Hello, Node.js file handling!');
  console.log('File written successfully.');

  // Read the file synchronously
  const data = fs.readFileSync('demo.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error:', err);
}
