const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const fs = require('fs');
const path = require('path');

/**
 * Mongoose connection
 */
const host = `mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`
const connect = mongoose.createConnection(host, { useNewUrlParser: true, useUnifiedTopology: true })
const db = connect.collection('tours');

/**
 * Parse
 */
db.find({}).then(datas => {
    console.log(datas);
}).catch(err => {
    console.log(err);
});