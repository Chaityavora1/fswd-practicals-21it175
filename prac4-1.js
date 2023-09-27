const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for URL input
rl.question('Enter a URL: ', (inputUrl) => {
  const parsedUrl = url.parse(inputUrl, true);

  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);
  
  // Check if there are query parameters
  if (parsedUrl.query && Object.keys(parsedUrl.query).length > 0) {
    console.log('Query Parameters:', parsedUrl.query);
  } else {
    console.log('No Query Parameters');
  }

  rl.close();
});
