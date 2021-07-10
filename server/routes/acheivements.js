const router = require('express').Router();
const { Router } = require('express');
const acheivement_model = require('../models/acheivements_model');
const user_model = require('../models/user_model');

router.get('/:id', async(req,res)=>{
    try {
        const id  = req.params.id;
        const query = {volunter_id: id};
        const data = await user_model.find(query);
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})

router.post('/', async(req,res)=>{
    try {
        const savedata = await acheivement_model.create(req.body);
        return res.status(201).send({success: true, datasave: savedata});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;