module.exports.up = async (knex) => {
  await knex.schema.createTable("categories", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("description").notNullable()
    table.text("image").notNullable()
    table.timestamps(true, true, true)
  })
}

module.exports.down = async (knex) => {
  await knex.schema.dropTable("categories")
}
