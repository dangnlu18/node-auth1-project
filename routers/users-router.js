const express = require('express')
const usersModel = require('../models/users-model')
const restricted = require('../middleware/middleware')
const router = express.Router({
    mergeParams: true
})

router.get('/', restricted(), async(req,res,next)=>{
    try{
        res.json(await usersModel.getUsers())
    }

    catch(err){
        next(err)
    }
})

module.exports = router