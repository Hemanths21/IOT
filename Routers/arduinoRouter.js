const sensorData = require('./../controllers/sensorData');

const express = require('express');
const router = express.Router();

router.get('/device', sensorData.getData);

router.post('/device',sensorData.postData);

router.put('/device',sensorData.putData);

module.exports = router;