import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "cookie-parser";

import loginRoute from './routers/auth/login.js';
import logoutRoute from './routers/auth/logout.js';
import registerRoute from './routers/auth/register.js';
import projectRoutes from './routers/projects.js';
import updateRoute from "./routers/update.js";
import recommendedRoute from "./routers/recommend.js";
import userRoute from "./routers/users.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);
app.use('/projects', projectRoutes);
app.use('/update', updateRoute);
app.use('/recommend', recommendedRoute);


//Database Connection
const CONNECTION_URL = "mongodb+srv://fsdproject:fsdproject007@cluster0.cnnlb.mongodb.net/FSDProject?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
}).catch((error) => console.log(error.message));