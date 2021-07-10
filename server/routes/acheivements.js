const router = require('express').Router();
const { Router } = require('express');
const acheivement_model = require('../models/acheivements_model');
const report_model = require('../models/report_model');
const acheivements_model = require('../models/acheivements_model');

router.get('/', async(req,res)=>{
        const reportData = await report_model.find();
        // let firstHashmap = new Map();
        // var i=0;
        // for(i=0;i<reportData.length; i++){
        //     const data = reportData[i];
        //     console.log(data.volunter_id);
        //     if(! firstHashmap.has(data.volunter_id))
        //     {
        //         firstHashmap.set(data.volunter_id, data.score)
        //     }
        //     else{
        //         var oldscore = firstHashmap.get(data.volunter_id);
        //         var newscore = oldscore + data.score;
        //         firstHashmap.set(data.volunter_id, newscore);
        //     }
        // }
        // console.log("Sorting");
        // const mapSort1 = new Map([...firstHashmap.entries()].sort((a, b) => b[1] - a[1]));
        // console.log(mapSort1);
        // // for(var j=0;j<=mapSort1.length;j++){
        // //     console.log(mapSort1[i]);
        // // }
        // count = 0;
        // mapSort1.forEach((x,y,z)=>{
        //     //console.log(count);
        //     if(count==0)
        //     {
        //         const acheive_data = {volunter_id: y, batch: 'Gold', score: x};
        //         const savedata = await acheivements_model.create(acheive_data);
        //     }
        //     if(count==1)
        //     {
        //         const acheive_data = {volunter_id: y, batch: 'Silver', score: x};
        //         const savedata = await acheivements_model.create(acheive_data);
        //     }
        //     if(count==2)
        //     {
        //         const acheive_data = {volunter_id: y, batch: 'Bronze', score: x};
        //         const savedata = await acheivements_model.create(acheive_data);
        //     }
        //     count ++;
        //     console.log(x,y);
        // })
        // return res.status(201).send({success: true, datasave: "data entered"});
})


module.exports = router;