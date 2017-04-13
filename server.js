const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
const fs = require('fs');
const app = express();

const environment = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Garage-Bin'



app.listen(app.get('port'), ()=>{
  console.log(`${app.locals.title} is running at ${app.get('port')}`)
})
