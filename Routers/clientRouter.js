const express = require('express');
const path = require('path');
const Device = require('./../model/device');
const router = express.Router();

router.get('/',(req,res,next) => {
    Device.fetchAll(devices => {
    res.render('device/device-list', {
        devs: devices,
        pageTitle: 'Devices',
        path: '/webclient/'
      });
    });
});

router.get('/data',(req,res,next) => {
    Device.fetchAll(devices => {
    res.render('device/device-list', {
        devs: devices,
        pageTitle: 'Devices',
        path: '/webclient/data'
      });
    });
});
router.get('/graph',(req,res,next) => {
    res.render('404', {
        path: '/webclient/graph',
        pageTitle: 'GRAPH',
      });
});

router.get('/data/:deviceid',(req,res,next) => {
    const deviceid = req.params.deviceid;
    Device.findById(deviceid, devices => {
    res.render('device/device-details', {
        device: devices,
        pageTitle: 'Devices',
        path: '/webclient/data/'+deviceid
      });
    });
});
module.exports = router;