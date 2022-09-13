import AppConfig from "@config/appConfig";
import fs from "fs";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import nodemailer from "nodemailer";
import path from "path";
import { UserModel } from "../../models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { serverRuntimeConfig } = getConfig();

  const filePath = `${path.resolve()}/static/mail/contact-template.html`;

  let contactTemplete: any = await fs.readFileSync(filePath);
  contactTemplete = contactTemplete.toString();

  const { firstname, lastname, company, linkedin, email, mobile, message } =
    req.body;

  if (!firstname || !lastname || !linkedin || !email || !mobile || !message) {
    res.status(400).json({
      success: false,
      message:
        "Firstname, Lastname, Linkedin, email, mobile and message are needed.",
    });
    return;
  }

  //replace name
  contactTemplete = contactTemplete.replace("{{firstname}}", firstname);

  try {
    // connect to Mongo DB
    await mongoose.connect(AppConfig.mongoUri);

    // check if user with email exists with email
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(409).json({
        success: false,
        message: "User already exists with this email.",
      });
      return;
    }

    //Insert new entry to DB
    await UserModel.create({
      firstName: firstname,
      lastName: lastname,
      companyName: company !== undefined ? company : "",
      linkedinUrl: linkedin,
      email: email,
      contactNumber: mobile,
      message,
    });

    // Send mail
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "Devops@avalor.investments",
        pass: "xsmtpsib-6f58a17860133bb2aee8d0815983305795c6952207a9f02f01b2a3c2ebcf161c-dSaAytZ5kB6XpgY3",
      },
      logger: true,
    });

    await transporter.sendMail({
      from: "business@swytch.in",
      to: `${email}`,
      subject: "Swytch To Web3",
      html: contactTemplete,
      attachments: [
        {
          filename: "Swytch Company's Profile.pdf",
          content: fs.createReadStream(
            `${path.resolve()}/static/mail/attachments/swytch-pitch-deck.pdf`
          ),
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Email was successfully sent.",
    });
  } catch (error) {
    console.log("Something went wrong:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  } finally {
    await mongoose.disconnect();
  }
};
