const express = require('express');
const session = require('express-session')
const cors = require('cors')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConfig = require('./db-config')
const registerRouter = require('./routers/register-router')
const loginRouter = require('./routers/login-router')
const usersRouter = require('./routers/users-router')


const server = express();
server.use(cors())
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret sauce',
    cookie:{
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false
    },
    store: new KnexSessionStore({
        knex: dbConfig,
        createtable: true
    }),
}))

server.use('/api/register', registerRouter)
server.use('/api/login', loginRouter)
server.use('/api/users', usersRouter)


server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;