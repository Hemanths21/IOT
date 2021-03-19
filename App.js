const express = require ('express');
const arduinoRouter = require ('./Routers/arduinoRouter');
const clientRouter = require ('./Routers/clientRouter');
const errorController = require('./controllers/error');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
//So in html files we can find the location of css files.
//app.use(express.static(path.join(__dirname,'web-resoures')));

//app.use(adminRouter.router); //we can add when to go to this router
app.use('/iotdevice', arduinoRouter); // Now url should start with /admin , then / something in the router
app.use('/webclient', clientRouter); // Now url should start with /admin , then / something in the router

//this will send 404 for all other urls
app.use((req,res,next)=>{
    res.status(404).send("NOT FOUND");
});

app.use(errorController.get404);

app.listen(3000);