const http = require('http');
const fs = require('fs');


// Define the port you want to use
const port = 3000;


// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');


  // Handle different HTTP methods
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.end('Hello, World!');
  } else if (req.method === 'POST') {
    res.statusCode = 201;
    res.end('POST request received!');
  } else if (req.method === 'PUT') {
    res.statusCode = 200;
    res.end('PUT request received!');
  } else if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.end('DELETE request received!');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});


// Start the server on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// Read the file 'student-data.txt' with utf8 encoding
fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }


  // Split the file content into lines based on newline characters
  const lines = data.split('\n');


  // Iterate over each line
  lines.forEach((line) => {
    // Split each line into name and CGPA using a comma as the delimiter
    const [name, cgpa] = line.split(',');


    // Check if the name includes 'Ma' and if the CGPA is greater than 7
    if (name.includes('Ma') && parseFloat(cgpa) > 7) {
      // Print information for qualifying students
      console.log(`Student: ${name}, CGPA: ${cgpa}`);
    }
  });
});
