var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch');
var cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coinrankingRouter = require('./routes/coinranking');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/coinranking', coinrankingRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// listen on production port if available, otherwise run locally at 3001. 
let listener = app.listen(process.env.PORT || 3001, // NOTE: 5000 WHEN USING "heroku local web" !!!!
	() => console.log("Server is listening on port %d", listener.address().port));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
