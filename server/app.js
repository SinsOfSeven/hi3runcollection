const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
//Import Routes
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoute);

app.get('/',(req,res) => {
    res.send('we are on home');
});

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db')
);

app.listen(3000);