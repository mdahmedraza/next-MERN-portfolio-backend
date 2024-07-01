const express=require('express');
const router=express.Router();
const Mycv=require('../models/mycv_modal');
const mongoose=require('mongoose');

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "cv get request...."
    })
})
router.post('/', (req, res, next)=>{
    const mycv=new Mycv({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    mycv.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message: 'cv post request',
            createdCv: mycv
        })
    }).catch((error)=>{
        console.log(error);
    })
})
module.exports=router;