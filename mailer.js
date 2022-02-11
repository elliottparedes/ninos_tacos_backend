var nodemailer = require('nodemailer');

sendMail =(message, subject) => 
{
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILUSERNAME,
            pass: process.env.EMAILPASSWORD
        }
        });

        var mailOptions = {
        from: process.env.EMAILUSERNAME,
        to: process.env.RECIPIENT,
        subject: subject,
        text: message
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
        console.log("the mailer was called");
}

exports.sendMail = sendMail; 