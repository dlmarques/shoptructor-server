const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

//variables
const port = process.env.PORT  || 3001;

//server config
dotenv.config();
app.use(cors());

//route variables
const authRoute = require("./routes/auth")


//routes configuration
app.use("/api/auth", authRoute)

//db connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, async () => console.log("connected to DB"));

//middleware
app.use(express.json());



app.listen(port, () => console.log(`server running on ${port}`))