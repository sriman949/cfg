const router = require('express').Router();
const { Router } = require('express');
const report_model = require('../models/report_model');

router.get('/:id', async(req,res)=>{
    try {
        const id  = req.params.id;
        const query = {volunter_id: id};
        const data = await report_model.find(query);
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.get('/', async(req,res)=>{
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

router.post('/verifyreport', async(req,res)=>{
    try {
        const id = req.body.id;
        //const query = {_id: id};
        const data = await report_model.findByIdAndUpdate(id, {verified : true});
        //const savedata = await report_model.create(req.body);
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;