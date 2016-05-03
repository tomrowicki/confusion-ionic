var express = require('express');
var app = express();

var logger = require('morgan');
var fs = require('fs');

var dishes = require('./routes/dishes');
var promotions = require('./routes/promotions');
var leaders = require('./routes/leaders');

app.use(logger('dev'));
app.use(express.static('public'));
app.use('/dishes', dishes);
app.use('/promotions', promotions);
app.use('/leadership', leaders);

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
