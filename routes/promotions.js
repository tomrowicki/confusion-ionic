var express = require('express');
var router = express.Router();
var data = require('../data.json');
var promotions = data.promotions;

router.route('/')
    .get(function(request, response) {
        response.json(promotions);
    });

router.route('/:promotionId')
    .get(function(request, response) {
	var id = request.params.promotionId;
	console.log('Promotion id: ' + id);
	response.json(promotions[id]);
    });

module.exports = router;
