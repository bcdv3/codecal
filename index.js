const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const indexRoute = require('./routes/index');
const noobRoute = require('./routes/noob');
 
// MongoDB setup
mongoose.connect(''); // Your mongodb:// URI/database

// Express setup
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Routes for app
app.use(indexRoute);
app.use(noobRoute);

app.listen(3003, () => {
  console.log('codeCal is running → PORT 3003');
});



