var express = require('express');
var router = express.Router();
var data = require('../data.json');
var leaders = data.leadership;

router.route('/')
    .get(function(request, response) {
        response.json(leaders);
    });

router.route('/:leaderId')
    .get(function(request, response) {
	var id = request.params.leaderId;
	console.log('Leader id: ' + id);
	response.json(leaders[id]);
    });

module.exports = router;
