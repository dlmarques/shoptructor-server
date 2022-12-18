const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config();

app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, async () => console.log("connected to DB"));

app.use(express.json());

const port = process.env.PORT  || 3001;

app.listen(port, () => console.log(`server running on ${port}`))