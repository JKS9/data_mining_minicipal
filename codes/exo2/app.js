const express = require("express");
const app = express();
const server = require('http').createServer(app);
const fs = require('fs');

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res) {
	res.render( 'index' );
});




app.get('/:tour/:arr', function(req, res, next) {
	let rawdata = fs.readFileSync(`./datas/results/${req.params.tour}/${req.params.arr}.json`);
	res.render( 'data', {
		data: JSON.parse(rawdata),
		arr: req.params.arr,
		tour: req.params.tour
	} );
});

server.listen(3030, () => {
  	console.log(`Listening to requests on http://localhost:3030`);
});