const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "uremailid",
      pass: "your_app_password"
   }
});

const mailOptions = {
   from: "senderemail",
   to: "receiveremailid",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});
