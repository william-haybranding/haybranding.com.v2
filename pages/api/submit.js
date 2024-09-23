// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

var path = require("path");

export default function handler(req, res) {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      res.status(500).json("Email not sent: " + err);
      return; // Adicione um return para sair da função após o erro
    }

    const transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 587,
      secure: false,
      auth: {
        user: "haybranding.com",
        pass: "serTVfcRLBshIWDw",
      },
    });

    // console.log(files.file.mimetype);

    var mailOptions = {
      from: "bruna@haybranding.com",
      cc: "william.carriello@haybranding.com",
      to: "bruna@haybranding.com",
      subject: "Contact Form - Website - Haybranding",
      html: `
      
        <h1>Contact Form - Website</h1>

        <p>Full Name: ${fields.fullName}</p>
        <p>Company Name: ${fields.companyName}</p>
        <p>Phone: ${fields.phone}</p>
        <p>Email: ${fields.email}</p>
        <p>Website: ${fields.website}</p>
        <p>Current Position: ${fields.currentPosition}</p>
        <p>Industry Segment: ${fields.industrySegment}</p>
        <p>Number of Employees: ${fields.numberOfEmployees}</p>
        <p>Message: ${fields.message}</p>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json("Email not sent: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json("Email sent: " + info.response);
      }
    });
  });
}
