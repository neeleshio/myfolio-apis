const serverless = require("serverless-http");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const articlesRoute = require('./src/routes/artciles')
const articleContentRoute = require('./src/routes/articleContent')
const cors = require('cors')
require('dotenv/config')

app.use(express.json())
app.use(cors());
app.options('*', cors());

app.use('/', articlesRoute)
app.use('/', articleContentRoute)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@cluster0.urk1m.mongodb.net/myFolio?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(result => {
  console.log('connected')
}).catch(err => {
  console.log(err)
});

module.exports.handler = serverless(app);
