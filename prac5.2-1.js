const os = require('os');  
// Get all environment variables 
const environmentVariables = process.env;  
// Display environment variables 
console.log('Environment Variables:');  
console.log('----------------------');  
for (const key in environmentVariables) {  
console.log(`${key}: ${environmentVariables[key]}`);  
}