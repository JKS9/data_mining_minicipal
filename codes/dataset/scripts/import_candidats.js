const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const fs = require('fs');

/**
 * Mongoose connection
 */
const host = `mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`
const connect = mongoose.createConnection(host, { useNewUrlParser: true, useUnifiedTopology: true })
const db = connect.collection('candidats');

/**
 * Parse
 */

let rawdata = fs.readFileSync('_candidats.json');
let datas = JSON.parse(rawdata);

db.insertMany(datas, function(err,result) {
    if (err) {
        console.log(err);
    }else{
        console.log(result);
    }
});

