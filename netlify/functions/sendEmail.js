const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Configure the email transport using Gmail's SMTP with username and password
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Using Gmail service
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail email (from environment variable)
        pass: process.env.EMAIL_PASS,  // Your Gmail password (from environment variable)
      },
    });

    // Set up email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,  // Sender name and email
      to: process.env.EMAIL_USER,                     // Your email (recipient)
      subject: `New message from ${name}`,
      text: `
        You have a new contact form submission:
        --------------------------------------
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email." }),
    };
  }
};
