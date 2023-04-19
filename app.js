var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hatsRouter = require('./routes/hats');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');

var app = express();

var resourceRouter = require('./routes/resource');
var costumesRouter = require('./routes/costumes');
var costumesDetailRouter = require('./routes/detail');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var Costume = require("./models/costume"); // Capture the Costume model

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hats', hatsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);

app.use('/costumes', costumesRouter);

app.use('/resource', resourceRouter);

app.use('/resource', costumesDetailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Once the connection is open, log a success message
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

// We can seed the collection if needed on server start
async function recreateDB() {
  try {
    // Delete everything
    await Costume.deleteMany();
    const costumesList = [
      {
        hat_type: "Baseball Cap",
        color: 'Red',
        price: 12.99
      },
      {
        hat_type: "Fedora",
        color: 'Black',
        price: 29.99
      },
      {
        hat_type: "Beanie",
        color: 'Blue',
        price: 9.99
      }
    ];
    await Costume.insertMany(costumesList);
    console.log("Costumes recreated successfully!");
  } catch (error) {
    console.error(error);
  }
}
let reseed = true;
if (reseed) { recreateDB(); }