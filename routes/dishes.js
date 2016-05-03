var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
var data = require('../data.json');
var dishes = data.dishes;

router.route('/')
    .get(function(request, response) {
        response.json(dishes);
    });

router.route('/:dishId')
    .get(function(request, response) {
	var id = request.params.dishId;
	console.log('Dish id: ' + id);
	response.json(dishes[id]);
    });

module.exports = router;
