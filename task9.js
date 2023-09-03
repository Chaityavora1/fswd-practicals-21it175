const fs = require('fs');
const path = require('path');


const dirPath = './files'; // Specify the directory path where files will be manipulated


// Create a directory (if it doesn't exist)
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}


// Create a new file and write content to it
const createAndWriteToFile = (fileName, content) => {
  const filePath = path.join(dirPath, fileName);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created and wrote to file: ${filePath}`);
};


createAndWriteToFile('file1.txt', 'This is file 1 content.');
createAndWriteToFile('file2.txt', 'This is file 2 content.');


// Read a file
const readFile = (fileName) => {
  const filePath = path.join(dirPath, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`Content of ${fileName}:`);
  console.log(content);
};


readFile('file1.txt');


// Append content to a file
const appendToFile = (fileName, contentToAppend) => {
  const filePath = path.join(dirPath, fileName);
  fs.appendFileSync(filePath, contentToAppend, 'utf8');
  console.log(`Appended to ${fileName}:`);
  console.log(contentToAppend);
};


appendToFile('file1.txt', '\nThis is additional content.');


// Rename a file
const renameFile = (oldFileName, newFileName) => {
  const oldFilePath = path.join(dirPath, oldFileName);
  const newFilePath = path.join(dirPath, newFileName);
  fs.renameSync(oldFilePath, newFilePath);
  console.log(`Renamed ${oldFileName} to ${newFileName}`);
};


renameFile('file2.txt', 'renamed-file2.txt');


// Delete a file
// Function to delete a file if it exists
const deleteFile = (fileName) => {
  const filePath = path.join(dirPath, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${fileName}`);
  } else {
    console.log(`File ${fileName} does not exist.`);
  }
};


deleteFile('file2.txt'); // This will handle the case where 'file2.txt' has been renamed


// List files and directories in a directory
const listFilesAndDirs = () => {
  const items = fs.readdirSync(dirPath);
  console.log('Files and directories in the directory:');
  items.forEach((item) => {
    const itemPath = path.join(dirPath, item);
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      console.log(`Directory: ${item}`);
    } else {
      console.log(`File: ${item}`);
    }
  });
};


listFilesAndDirs();
