const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

// body parser middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))