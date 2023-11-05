require('dotenv').config();
const express = require('express');
require("./dbConfig/db");
// const http = require('http');
const mongoose = require('mongoose');
const router = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors());
app.get('/', (req, res)=>{  return res.send("Hi, APIs are working here."); })
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server is running successfully on post : ${PORT}`);
})