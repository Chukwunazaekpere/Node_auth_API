import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "../../src/config/config.env"})

const mailTransporter = () => nodemailer.createTransport({
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    auth: {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
    },
    secure: true
});

export default mailTransporter;