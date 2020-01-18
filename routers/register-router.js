const express = require('express')
const regModel = require('../models/register-model')
const router = express.Router({
    mergeParams: true
})

router.post('/', async(req,res,next)=>{
    try{
        const payload = {
            username: req.body.username,
            password: req.body.password
        }

        await regModel.add(payload)
        res.status(204).json({message: 'user has been created'})

    }
    catch(err){
        next(err)
    }
})


module.exports = router