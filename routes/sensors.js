var express = require('express');
var router = express.Router();
const json = require('../persistence/sensordata.json');

/* GET a list of all sensors. */
router.get('/', function (req, res, next) {
    res.send(json);
});

/* GET sensordata for the specified sensor ID */
router.get('/:sensor_id', function (req, res, next) {
    let sensor = req.params.sensor_id;
    console.log(req.params.sensor_id)
    res.send(json.sensors[sensor]);
});

router.post('/add-sensor', function (req, res, next) {
    console.log(req.body)

    const newSensor = {
        "id": req.body.id,
        "bygning": req.body.bygning,
        "lokale": req.body.lokale,
        "temperatur": req.body.temperatur,
        "luftfugtighed": req.body.luftfugtighed,
        "co2": req.body.co2,
        "luftkvalitet": req.body.luftkvalitet,
        "lysniveau": req.body.lysniveau,
        "lysfarve": req.body.lysfarve,
        "lydniveau": req.body.lydniveau
    }

    json.sensors.push(newSensor);

    res.send(json);

    //TODO: tilføj persistence
});

module.exports = router;
