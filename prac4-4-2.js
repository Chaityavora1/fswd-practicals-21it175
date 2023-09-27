const readline = require('readline'); const 
fs = require('fs');  
  
// Create readline interface const 
rl = readline.createInterface({   
input: process.stdin,   output: 
process.stdout  
});  function checkFilePathExists(filePath) {   
fs.access(filePath, fs.constants.F_OK, (err) => {     
if (err) {       console.log('Error: File does not exist');  
    } else {       console.log('Success: File exists');  
    }  
  });  
}  rl.question('Enter a file path: ', (filePath) => {   checkFilePathExists(filePath);   
rl.close();  
}); 