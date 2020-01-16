const express = require('express')
const bcrypt = require('bcryptjs')
const loginModel = require('../models/login-model')
const router = express.Router({
    mergeParams: true
})

router.post('/', async(req,res,next)=>{
    try{
        const { username, password } = req.body
        const user = await loginModel.findBy(username).first()
        const passwordValid = await bcrypt.compare(password, user.password)

        if (user && passwordValid){
            res.status(200).json({message: `Welcome, ${user.username}`})
        } else{
            res.status(401).json({message: 'Invalid Credentials'})
        }

    }
    catch(err){
        next(err)
    }
})


module.exports = router