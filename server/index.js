import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "cookie-parser";

import loginRoute from './routers/login.js';
import registerRoute from './routers/register.js';
import projectRoutes from './routers/projects.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/projects', projectRoutes);
// app.use('/students', studentRoutes);

app.get('set-cookies', (req, res) => {
    res.cookie('newUser', false);
    res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });//secure:true
    res.send("You got the cookies");
});

app.get('read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);

    res.json(cookies);
});

const CONNECTION_URL = "mongodb+srv://fsdproject:fsdproject007@cluster0.cnnlb.mongodb.net/FSDProject?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
}).catch((error) => console.log(error.message));