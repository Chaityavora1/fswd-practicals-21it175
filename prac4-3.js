const readline = require('readline');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first file path: ', (filePath1) => {
  rl.question('Enter the second file path: ', (filePath2) => {
    // Resolve the absolute paths
    const absolutePath1 = path.resolve(filePath1);
    const absolutePath2 = path.resolve(filePath2);

    const exists1 = fs.existsSync(absolutePath1);
    const exists2 = fs.existsSync(absolutePath2);

    if (exists1 && exists2) {
      const stat1 = fs.statSync(absolutePath1);
      const stat2 = fs.statSync(absolutePath2);

      const isSameFile = stat1.ino === stat2.ino;

      console.log('The two file paths refer to the same file:', isSameFile);
    } else {
      console.log('One or both of the file paths do not exist.');
    }

    rl.close();
  });
});
