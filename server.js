const express = require('express');
const registerRouter = require('./routers/register-router')
const loginRouter = require('./routers/login-router')
const usersRouter = require('./routers/users-router')


const server = express();


server.use(express.json());
server.use('/api/register', registerRouter)
server.use('/api/login', loginRouter)
server.use('/api/users', usersRouter)


server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;