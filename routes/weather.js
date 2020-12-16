var express = require('express');
var router = express.Router();
const getWeatherDataNaestved = require('../modules/weather').getWeatherDataNaestved;

router.get('/', function(req, res, next) {
    res.send(getWeatherDataNaestved());
});

module.exports = router;
