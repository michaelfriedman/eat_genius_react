exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments()
  table.string('name').defaultTo('')
  table.string('email').unique().notNullable()
  table.specificType('hashed_password', 'char(60)').notNullable()
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('users')