const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'device.json'
);

const getDevicesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Device {
  constructor(id, sensor, data) {
    this.id = id;
    this.sensorData = [{
        name: sensor,
        data: [data]
    }];
  }
 
  save() { 
    getDevicesFromFile(devices => {
        const existingDevicesIndex = devices.findIndex(
            dev => {
                return dev.id === this.id
            }
        );
      if (existingDevicesIndex>=0) {
        const updatedDevices = [...devices];
        const sensorIndex = updatedDevices[existingDevicesIndex].sensorData.findIndex(
            sensor => { 
                return sensor.name === this.sensorData[0].name
            }
        );
        if(sensorIndex>=0){
            updatedDevices[existingDevicesIndex].sensorData[sensorIndex].data.push(...this.sensorData[0].data);
        }
        else{
            updatedDevices[existingDevicesIndex].sensorData .push(...this.sensorData);
        }
          console.log(updatedDevices);

        fs.writeFile(p, JSON.stringify(updatedDevices), err => {
          console.log(err);
        });
      } else {
        //this.id = Math.random().toString();
        devices.push(this);
        fs.writeFile(p, JSON.stringify(devices), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getDevicesFromFile(cb);
  }

  static findById(id, cb) {
    getDevicesFromFile(devices => {
      const device = devices.find(p => p.id === id);
      cb(device);
    });
  }
};
