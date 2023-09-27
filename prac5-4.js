const nodemailer = require('nodemailer'); 
 
const transporter = nodemailer.createTransport({ 
  service: 'gmail', 
  auth: { 
    user: 'nishitrokadcse1@gmail.com', 
    pass: 'resfggmfxuvhwatb' 
  } 
}); 
 
const mailOptions = { 
  from: 'chaityavora30@gmail.com', 
  to: '21it175@charusat.edu.in', 
  subject: 'Subject', 
  text: 'hey welcome to our website chaitya' 
}; 
 
transporter.sendMail(mailOptions, function(error, info){ 
  if (error) { 
 console.log(error); 
  } else { 
    console.log('Email sent: ' + info.response); 
    // do something useful 
  } 
});