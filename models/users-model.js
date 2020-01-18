const db = require('../db-config')

function getUsers(){
    return db('users').select('id', 'username')
}

module.exports ={
    getUsers,
}