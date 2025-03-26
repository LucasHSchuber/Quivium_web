import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json());

// GET test route
app.get('/', (req, res) => {
    res.send('Welcome to the API for Quivium. Have a great day!'); 
});

// route for Nodemailer
app.post('/send-email', (req, res) => {
    const { lang } = req.body;
    console.log("/send-email triggered...");
    console.log("Request received:", req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        logger: true,
        debug: true 
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Quivium Application Download`,
        text: `A user download with language: ${lang}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); 
            return res.status(500).json({ error: 'Failed to send email.' });
        } 
        console.log(`Success! Email sent to ${mailOptions.to} with subject "${mailOptions.subject}"`);
        res.status(200).json({ message: 'An email has been sent to message ' + process.env.GMAIL_USER + ' about your visit. Thank you!' });
    });
});



// route for Nodemailer
app.post('/send-email-contact', (req, res) => {
    const { lang, email, message } = req.body;
    console.log("/send-email-contact triggered...");
    console.log("Request received:", req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        logger: true,
        debug: true 
    });

    const mailOptions = {
        from: `Quivium Web Contact`, 
        replyTo: email, 
        to: process.env.GMAIL_USER,
        subject: "Quivium Web",
        text: `From: ${email}\n\n${message}`,
      };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); 
            return res.status(500).json({ error: 'Failed to send email.' });
        } 
        console.log(`Success! Email sent to ${mailOptions.to} with subject "${mailOptions.subject}"`);
        res.status(200).json({ message: 'An email has been sent to message ' + process.env.GMAIL_USER + ' about your visit. Thank you!' });
    });
});



//LISTEN
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
    console.log(`See server on http://localhost:${port}`)
})