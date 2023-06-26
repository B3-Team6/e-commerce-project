module.exports.up = async (knex) => {
  await knex.schema.alterTable("products", (table) => {
    table.text("slug")
  })
}

module.exports.down = async (knex) => {
  await knex.schema.alterTable("products", (table) => {
    table.dropColumn("slug")
  })
}
