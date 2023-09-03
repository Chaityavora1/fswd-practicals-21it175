const fs = require('fs');
const file1 = 'file1.txt'; // Replace with the path to the first file
const file2 = 'file2.txt'; // Replace with the path to the second file


const content1 = fs.readFileSync(file1, 'utf8');
const content2 = fs.readFileSync(file2, 'utf8');


const size1 = fs.statSync(file1).size;
const size2 = fs.statSync(file2).size;


console.log(`File1: ${file1} (Size: ${size1} bytes)`);
console.log(`File2: ${file2} (Size: ${size2} bytes)`);


if (size1 > size2) {
  console.log('File1 is larger than File2');
} else if (size1 < size2) {
  console.log('File2 is larger than File1');
} else {
  console.log('Both files have the same size');
}


const lines1 = content1.split('\n');
const lines2 = content2.split('\n');


console.log('Different Lines:');
for (let i = 0; i < lines1.length; i++) {
  if (lines1[i] !== lines2[i]) {
    console.log(`Line ${i + 1}:`);
    console.log(`File1: ${lines1[i]}`);
    console.log(`File2: ${lines2[i]}`);
  }
}
