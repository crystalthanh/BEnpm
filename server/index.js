// import express from 'express';
const express = require('express');
const posts = require('./routers/posts');
const cors = require('cors');
const bodyParser = require('body-parser');
// import connectDB from './common/database.js';
const connectDB = require('./common/database');
const userRouter = require('./routers/userRouter');

connectDB();


const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', userRouter);

app.use('/posts', posts);
app.get('/', (req, res) => {
    res.send('SERVER SUCCESS');
})

app.listen(PORT, () => {
    console.log(`server is running on app.listen PORT ${PORT}`)
})