const express = require('express');
const router = express.Router();
const { getWeatherDataNaestved } = require('../modules/weather');

router.get('/', function(req, res, next) {
    res.send(getWeatherDataNaestved());
});

module.exports = router;