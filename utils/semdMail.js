const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    auth: {
        user: process.env.USER_ID || "tanjim11alam@gmail.com",
        pass: process.env.PASSWORD || "cwwtqtyirmnsdceh",
    },
});


async function sendMail(subject, text, to, form) {
    await transporter.sendMail({
        form: form || process.env.FORM || "tanjim11alam@gmail.com",
        to: to || process.env.TO || "tanjim11alam@gmail.com",
        subject,
        text
    })
}

module.exports = sendMail;