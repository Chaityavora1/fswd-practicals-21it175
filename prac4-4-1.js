const readline = require('readline');
const path = require('path');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a file path: ', (filePath) => {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);

  console.log(`Directory Name: ${directoryName}`);
  console.log(`Base Name: ${baseName}`);

  rl.close();
});
