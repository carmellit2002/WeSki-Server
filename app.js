var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
const hotelsRouter = require("./routes/hotels");

var app = express();

const { corsOptions } = require("./consts");
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use("/hotels", hotelsRouter);

// Error Handling
// ~~~~~~~~~~~~~~
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("An error has occured.");
  console.log("Error message:", err.message);
  console.log("Error status:", err.status);

  res.status(err.status || 500);
});

module.exports = app;
