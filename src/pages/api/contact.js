import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !message) {
      res.status(400).json({ message: "Please fill out all fields" });
    }
    if (email && !emailRegex.test(email)) {
      res.status(400).json({ message: "Please enter a valid email address" });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another email service like Outlook
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // The email to receive contact form submissions
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
