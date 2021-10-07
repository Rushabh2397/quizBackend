import express from 'express'
import path from  'path'
import  cookieParser from 'cookie-parser'
import cors from 'cors'
const DB = require('./db/connection')
const indexRouter = require('./routes/index');


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
