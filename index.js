require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const router = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cookieParser());
app.use(express.json());
// app.use(bodyParser.json({ limit: "10mb", extented: true }));
// app.use(cors({
//     origin: ['https://localhost:3000'],
//     credentials: true
// }));
app.use(cors());
app.use(router);
mongoose.set('strictQuery', true);
m