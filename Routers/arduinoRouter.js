const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.send("hello");
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.put('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;