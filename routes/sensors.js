var express = require('express');
var router = express.Router();

let json = [
  {
    "id": 100,
    "bygning" : "Femøvej",
    "lokale" : "001",
    "temperatur" : "23.9",
    "luftfugtighed": 37,
    "co2": 466,
    "luftkvalitet" : 3.07,
    "lysniveau" : 346,
    "lysfarve" :  2986,
    "lydniveau" : 36
  },
  {
    "id": 101,
    "bygning" : "Femøvej",
    "lokale" : "002",
    "temperatur" : "12.9",
    "luftfugtighed": 27,
    "co2": 422,
    "luftkvalitet" : 2.07,
    "lysniveau" : 396,
    "lysfarve" :  3111,
    "lydniveau" : 35
  },
  {
    "id": 102,
    "bygning" : "Femøvej",
    "lokale" : "101",
    "temperatur" : "23.5",
    "luftfugtighed": 33,
    "co2": 566,
    "luftkvalitet" : 3.24,
    "lysniveau" : 312,
    "lysfarve" :  2989,
    "lydniveau" : 32
  },
  {
    "id": 103,
    "bygning" : "Maglemølle",
    "lokale" : "101",
    "temperatur" : "34.9",
    "luftfugtighed": 37,
    "co2": 399,
    "luftkvalitet" : 3.17,
    "lysniveau" : 446,
    "lysfarve" :  2532,
    "lydniveau" : 82
  },
  {
    "id": 104,
    "bygning" : "Maglemølle",
    "lokale" : "102",
    "temperatur" : "23.2",
    "luftfugtighed": 32,
    "co2": 189,
    "luftkvalitet" : 3.12,
    "lysniveau" : 336,
    "lysfarve" :  2678,
    "lydniveau" : 44
  }
]

/* GET a list of all sensors. */
router.get('/', function(req, res, next) {
  res.send(json);
});

/* GET sensordata for the specified sensor ID */
router.get('/:sensor_id', function(req, res, next) {
  let sensor = req.params.sensor_id;
  console.log(req.params.sensor_id)
  res.send(json[sensor]);
});

router.post('/add-sensor', function(req, res, next) {
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

  json.push(newSensor);

  res.send(json);

  //TODO: tilføj persistence
});

module.exports = router;
