const router = require('express').Router();
const { Router } = require('express');
const post_model = require('../models/post_model');

router.get('/', async(req,res)=>{
    try {
        const data = await post_model.find();
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.post('/', async(req,res)=>{
    try {
        const savedata = await post_model.create(req.body);
        return res.status(201).send({success: true, datasave: savedata});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.post('/verifypost', async(req,res)=>{
    try {
        const id = req.body.id;
        //const query = {_id: id};
        const data = await post_model.findByIdAndUpdate(id, {verified : true});
        //const savedata = await report_model.create(req.body);
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;