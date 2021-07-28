const path = require('path')
var sass = require('node-sass');
const express = require('express')
var exphbs  = require('express-handlebars');
var morgan = require('morgan')
const route =require('./router/index')

const app = express()
const port = 3003

//template:hendlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourcs/views'));

//static file
app.use(express.static(path.join(__dirname,'public'))) 

//
route(app);

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})