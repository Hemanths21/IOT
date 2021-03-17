const express = require ('express');
const bodyParser = require('body-parser');
const arduinoRouter = require ('./Routers/arduinoRouter');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false})); // this will do all the work like req.on ('data', (chunk)=>dataarray.push(chunk)) and buffer.append(dataarray)
// inorder to use the files statically use a middleware and add the path to it.
//So in html files we can find the location of css files.
//app.use(express.static(path.join(__dirname,'web-resoures')));

//app.use(adminRouter.router); //we can add when to go to this router
app.use('/iot', arduinoRouter); // Now url should start with /admin , then / something in the router

//this will send 404 for all other urls
app.use((req,res,next)=>{
    res.status(404).send("NOT FOUND");
});
app.listen(3000);