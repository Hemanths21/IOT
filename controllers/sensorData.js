const Device = require('./../model/device');
exports.getData = (req,res,next) => {
    res.status(200).send("{id:\"local\"}");
};

exports.postData = (req,res,next)=>{
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.sensor);
    console.log(req.body.data);
    const id = req.body.id;
    const sensor = req.body.sensor;
    const data = req.body.data;
    const device = new Device(id, sensor, data);
    console.log(device);

    device.save();
    res.status(200).send("SUCCESS");
};

exports.putData = (req,res,next)=>{
    console.log(req.body);
    const id = req.body.id;
    const sensor = req.body.sensor;
    const data = req.body.data;
    const device = new Device(id, sensor, data);
    device.save();
    res.send("SUCCESS");
};
