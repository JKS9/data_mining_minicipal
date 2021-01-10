const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const fs = require('fs');
const path = require('path');
const CsvToArray = require ('csv-to-array');

/**
 * Mongoose connection
 */
const host = `mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`
const connect = mongoose.createConnection(host, { useNewUrlParser: true, useUnifiedTopology: true })
const db = connect.collection('tours');

/**
 * Parse
 */

const directoryPath = path.join(__dirname, 'datas');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        var data = fs.readFileSync(`${directoryPath}/${file}`)
            .toString()
            .split('\n')
            .map(e => e.trim())
            .map(e => e.split(',').map(e => e.trim()));
        
        
        let columns = data[0];
        let datas = [];
        CsvToArray ({
            csvOptions: {
                delimiter: ","
            }
        , file: `${directoryPath}/${file}`
        , columns: columns
        }, function (err, response) {
            response.shift();
        
            db.insertMany(response, function(err,result) {
                if (err) {
                    console.log(err);
                }else{
                    console.log(result);
                }
            });
        });
    });
});


