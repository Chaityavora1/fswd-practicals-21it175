const url = require('url'); const querystring = 
require('querystring'); const inputUrl = 
'https://example.com/search?q=nodejs&lang=en&page=1';  
const parsedUrl = url.parse(inputUrl);  
const queryString = parsedUrl.query;  
const parsedQueryString = 
querystring.parse(queryString);  
console.log('Query Parameters:');  
for (const [key, value] of Object.entries(parsedQueryString)) {   
console.log(key + ':', value);  
}  