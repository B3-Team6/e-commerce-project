export const up = async (knex) => {
  await knex.schema.createTable("categories", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.timestamps(true, true, true)
  })
}
export const down = async (knex) => {
  await knex.schema.dropTable("categories")
}
