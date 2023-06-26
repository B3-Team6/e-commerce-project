module.exports.up = async (knex) => {
  await knex.schema.createTable("contact", (table) => {
    table.increments("id")
    table.text("email").notNullable()
    table.text("message").notNullable()
    table.timestamps(true, true, true)
  })
}

module.exports.down = async (knex) => {
  await knex.schema.dropTable("contact")
}
