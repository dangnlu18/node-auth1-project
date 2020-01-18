const db = require('../db-config')
const bcrypt = require('bcryptjs')

function findById(id){
    return db('users').where({ id }).first()
}

async function add(payload){
    payload.password = await bcrypt.hash(payload.password, 14)

    const [id]= await db('users').insert(payload)
    return findById(id)
}

module.exports = {
    add,
}