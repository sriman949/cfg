const router = require('express').Router();
const { Router } = require('express');
const acheivement_model = require('../models/acheivements_model');
const report_model = require('../models/report_model');

router.get('/', async(req,res)=>{
    try {
        //const query = { $query: {}, $orderby: { age : -1 } }
        const data = await report_model.find().sort( { score: -1 } );
        return res.status(201).send({success: true, datasave: data});
    } catch (error) {
        return res.status(404).send({success: false, msg:error})
    }
})


module.exports = router;