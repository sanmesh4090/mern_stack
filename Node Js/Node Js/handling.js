const fs = require('fs');

// Write to a file asynchronously
fs.writeFile('example.txt', 'Hello, Node.js file handling!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File written successfully.');

  // Read the file asynchronously
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File content:', data);
  });
});
