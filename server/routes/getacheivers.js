const router = require('express').Router();
const { Router } = require('express');
const user_model = require('../models/acheivements_model');

router.get('/', async(req,res)=>{
    try {
        const data = await user_model.find();
        return res.status(201).send({success: true, datasave: data, datacount: data.length});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.get('/:id', async(req,res)=>{
    const id  = req.params.id;
    const query = {_id: id};
    try{
        const data = await user_model.find(query);
        return res.status(201).send({success: true, datasave: data}); 
    }catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

module.exports = router;