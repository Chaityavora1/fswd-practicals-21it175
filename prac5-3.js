const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the fs module
const app = express();
const PORT = 8080;

// Create an array to store information about uploaded files
const uploadedFiles = [];

// Create the "uploads" directory if it doesn't exist
const uploadDirectory = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    // Generate a unique file name by adding a timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Create multer instance with the storage configuration
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>File Upload Example</h1>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file">
          <button type="submit">Upload</button>
        </form>
      </body>
    </html>
  `);
});

// Set up the route to handle file upload
app.post('/upload', (req, res) => {
  try {
    upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(400).send('File upload failed.');
      }

      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      // Save information about the uploaded file
      const fileInfo = {
        originalname: req.file.originalname,
        filename: req.file.filename,
      };
      uploadedFiles.push(fileInfo);

      res.send('File uploaded successfully!');
    });
  } catch (error) {
    console.error('An error occurred during file upload:', error);
    res.status(500).send('Internal server error.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
