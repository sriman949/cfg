const router = require('express').Router();
const { Router } = require('express');
const announcement_model = require('../models/announcement_model');

router.get('/', async(req,res)=>{
    try {
        const data = await announcement_model.find();
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.post('/', async(req,res)=>{
    try {
        const savedata = await announcement_model.create(req.body);
        return res.status(201).send({success: true, datasave: savedata});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;