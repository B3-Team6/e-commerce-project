module.exports.up = async (knex) => {
  await knex.schema.alterTable("categories", (table) => {
    table.text("slug").unique()
  })
}

module.exports.down = async (knex) => {
  await knex.schema.alterTable("categories", (table) => {
    table.dropColumns("slug")
  })
}
