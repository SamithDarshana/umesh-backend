const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    port: 587,
    secure: false,

    /* host: "smtp.forwardemail.net",
        port: 465,
        secure: true, */

    auth: {
      // TODO: for secure : replace `user` and `pass` values from <https://forwardemail.net>

      /*user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
          pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD", */

      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Umesh Mobile" <umeshmobilebadulla@gmail.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log('Message send: %s', info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = { sendEmail };
