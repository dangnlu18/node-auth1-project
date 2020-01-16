
exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl=>{
      tbl.increments()
      tbl.string('username').unique()
      tbl.string('password').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
