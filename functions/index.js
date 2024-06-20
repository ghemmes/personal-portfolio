const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp()

//google account credentials used to send email.
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

//send email function
exports.sendEmail = functions.https.onRequest((req, res) => {

  //get the query parameters from the request
  const email = req.query.email;
  const name = req.query.name;
  const message = req.query.message;

  //email template
  const mailOptions = {
    from: email ,
    to: process.env.SMTP_USERNAME,
    subject: '  ' + name,
    html: `
      <p>
        <b>Email: </b>${email}<br>
        <b>Name: </b>${name}<br>
        <b>Message: </b>${message}<br>
      </p>
    `,
    replyTo: email
    
  };

  // Enable CORS using the `cors` express middleware.
  const cors=require("cors");
  const corsOptions ={
     origin:'*', 
     credentials:true,           //access-control-allow-credentials:true
     optionSuccessStatus:200,
  }

  cors(corsOptions)(req,res,()=>{
    console.log("CORS Enabled");
  })

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});






