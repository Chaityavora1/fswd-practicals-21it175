const fs = require('fs');
const path = require('path');


function createStructure(basePath, structure) {
  structure.forEach((item) => {
    const itemPath = path.join(basePath, item.name);


    if (item.type === 'file') {
      // Create a file with optional content
      if (item.content) {
        fs.writeFileSync(itemPath, item.content, 'utf8');
      } else {
        fs.writeFileSync(itemPath, '', 'utf8'); // Create an empty file
      }
      console.log(`Created file: ${itemPath}`);
    } else if (item.type === 'folder') {
      if (!fs.existsSync(itemPath)) {
        fs.mkdirSync(itemPath);
        console.log(`Created folder: ${itemPath}`);
      }


      if (item.children) {
        createStructure(itemPath, item.children);
      }
    }
  });
}


const jsonStructure = [
  {
    name: 'folder1',
    type: 'folder',
    children: [
      {
        name: 'file1.txt',
        type: 'file',
        content: 'Content of file1',
      },
      {
        name: 'folder2',
        type: 'folder',
        children: [
          {
            name: 'file2.txt',
            type: 'file',
            content: 'Content of file2',
          },
        ],
      },
    ],
  },
];


const basePath = './output';
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}


createStructure(basePath, jsonStructure);
