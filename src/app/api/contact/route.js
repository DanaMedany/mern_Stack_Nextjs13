import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: "Dana@gmail.com",
      to: email,
      subject: "Contact Form",
      text: `Hello ${name} 
      you have an new form entry: ${email}.
      ${message}`,
    };
    let mailResponse = await transport.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "receive Data" }));
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
