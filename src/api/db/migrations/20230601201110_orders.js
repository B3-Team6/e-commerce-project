module.exports.up = async (knex) => {
  await knex.schema.createTable("orders", function (table) {
    table.increments("id").primary()
    table.integer("userId").unsigned().references("id").inTable("users")
    table.text("status", ["pending", "complete"])
    table.timestamps(true, true, true)
  })
}

module.exports.down = async (knex) => {
  await knex.schema.dropTable("orders")
}
