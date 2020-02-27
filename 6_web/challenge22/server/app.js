// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));

app.use(cors())
app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoose.Promise = global.Promise;

//connect to Mongodb
mongoose.connect('mongodb://localhost:27017/bread', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
  .then(() => console.log('Berhasil terhubung dengan MongoDB'))
  .catch((err) => console.error(err));

app.use('/', indexRouter);

module.exports = app;
