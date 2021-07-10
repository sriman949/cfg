const router = require('express').Router();
const { Router } = require('express');
const report_model = require('../models/report_model');
var fs = require('fs');
var path = require('path');

router.get('/:id', async(req,res)=>{
    try {
        const data = await report_model.find();
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.post('/', async(req,res)=>{
    try {
        const savedata = await report_model.create(req.body);
        return res.status(201).send({success: true, datasave: savedata});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;