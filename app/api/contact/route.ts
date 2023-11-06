import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;
  const credentials = {
    email: "ermiyas.dagnachew@gmail.com",
    password: "unkhycdgrihbrhzq",
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: credentials.email,
      pass: credentials.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const addBreaks = (str: string) => {
    return str.replace(/\n/g, "<br />");
  };
  const mailOptions = {
    from: credentials.email,
    to: credentials.email,
    subject: `Contact form from ${name}`,
    text: ` Name: ${name} \n Email: ${email} \n\n Message: ${message} `,
    html: `<p><span style="font-size: 18pt;"><span style="font-family: 'courier new', courier, monospace;">Name: ${name}</span></span></p>
    <p><span style="font-size: 18pt;"><span style="font-family: 'courier new', courier, monospace;">Email: ${email}</span></span></p>
    <p><span style="font-size: 18pt;"><span style="font-family: 'courier new', courier, monospace;">Message: <br><br>${addBreaks(
      message
    )}</span></span></p>`,
  };
  try {
    console.log("Sending email...");
    const res = await transporter.sendMail(mailOptions);
    if (res.accepted.length > 0) {
      console.log("Email sent successfully!");
      return NextResponse.json(
        {
          message: "Email sent successfully!",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Something went wrong. Please try again later.",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 400,
      }
    );
  }
}
