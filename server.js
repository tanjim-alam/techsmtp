const express = require("express");
const cors = require("cors");
const sendMail = require("./utils/semdMail");

const app = express();

const corsOptions = {
    origin: "https://nowstart.co",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Welcome to new smtp"
    })
})

app.post("/", async (req, res) => {
    const { name, email, number, printerName, model, issue, to, form } = req.body;
    if (!email || !name || !number) {
        res.status(501).send({
            success: false,
            message: "All fields are required"
        })
        return
    }

    const text = `Name:- ${name} \n Email:- ${email} \n Phone Number:- ${number} \n Printer Name:- ${printerName} \n Model:- ${model} \n Issue:- ${issue}`;
    const subject = "Tech Lead";
    sendMail(subject, text, to, form);
    res.status(200).send({
        success: true,
        message: "Email sent successfully"
    })

})
const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
})
