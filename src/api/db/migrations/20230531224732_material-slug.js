module.exports.up = async (knex) => {
  await knex.schema.alterTable("materials", (table) => {
    table.text("slug").unique()
  })
}

module.exports.down = async (knex) => {
  await knex.schema.alterTable("materials", (table) => {
    table.dropColumns("slug")
  })
}
