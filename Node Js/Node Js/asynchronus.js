const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const filePath = path.join(baseDir, 'example.txt');
const folderPath = path.join(baseDir, 'testFolder');

// 1. Get file stats
fs.stat(filePath, (err, stats) => {
  if (err) {
    return console.error('fs.stat error:', err.message);
  }
  console.log('File Stats:', stats);

  // 2. Create a new folder
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      return console.error('fs.mkdir error:', err.message);
    }
    console.log('Folder created:', folderPath);

    // 3. Read directory contents
    fs.readdir(baseDir, (err, files) => {
      if (err) {
        return console.error('fs.readdir error:', err.message);
      }
      console.log('Directory contents:', files);

      // 4. Delete the file
      fs.unlink(filePath, (err) => {
        if (err) {
          return console.error('fs.unlink error:', err.message);
        }
        console.log('File deleted:', filePath);

        // 5. Remove the folder
        fs.rmdir(folderPath, (err) => {
          if (err) {
            return console.error('fs.rmdir error:', err.message);
          }
          console.log('Folder removed:', folderPath);
        });
      });
    });
  });
});
