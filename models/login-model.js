const db = require('../db-config')
const bcrypt = require('bcryptjs')

function findBy(username){
    return db('users').where({ username }).select('id', 'username', 'password')
}

module.exports = {
    findBy,
}