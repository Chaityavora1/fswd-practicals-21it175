const readline = require('readline');
const fs = require('fs');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Prompt the user for employee information
rl.question('Enter employee name: ', (name) => {
  rl.question('Enter employee age: ', (age) => {
    rl.question('Enter employee position: ', (position) => {
      // Create an object with the employee information
      const employeeData = {
        name,
        age: parseInt(age, 10), // Convert age to a number
        position,
      };


      // Convert the employee data to JSON format
      const jsonData = JSON.stringify(employeeData, null, 2);


      // Write the JSON data to the 'employee-data.json' file
      fs.writeFile('employee-data.json', jsonData, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Employee data has been written to employee-data.json.');
        }


        // Close the readline interface
        rl.close();
      });
    });
  });
});
