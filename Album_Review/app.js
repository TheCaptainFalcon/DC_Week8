const express = require('express');
    path = require('path');
    cookieParser = require('cookie-parser');
    logger = require('morgan');
    es6Renderer = require('express-es6-template-engine');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const albumsRouter = require('./routes/albums');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');


app.use('/', indexRouter);
app.use('/albums', albumsRouter);
app.use('/users', usersRouter);


module.exports = app;
