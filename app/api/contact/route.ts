import nodemailer from "nodemailer";

export default function handler(req: any, res: any) {
  const message = {
    from: req.body.email,
    to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
