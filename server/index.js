import express from 'express';
// const express = require('express');
import posts from './routers/posts.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const connectDB = require('./common/database');

connectDB();


const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/posts', posts);
app.get('/', (req, res) => {
    res.send('SERVER SUCCESS');
})

app.listen(PORT, () => {
    console.log(`server is running on app.listen PORT ${PORT}`)
})