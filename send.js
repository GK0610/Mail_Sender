const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "gk120000ks@gmail.com",
      pass: "puitxdfynwekimnb"
   }
});

const mailOptions = {
   from: "gk120000ks@gmail.com",
   to: "santhoshgpanangottu@gmail.com",
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
