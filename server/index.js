const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const customerRoute = require('./routes/customer');
const candidateRouter = require('./routes/candidate');
const examinerRouter = require('./routes/examiner');
const examRouter = require('./routes/exam');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");

app.use('/candidate',candidateRouter);
app.use('/examiner',examinerRouter);
app.use('/exam',examRouter);

app.use('/customer',customerRoute)

app.listen(8000,()=>{
    console.log("Server started");
  });