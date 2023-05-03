export const up = async (knex) => {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.text("description").notNullable()
    table.float("price").notNullable()
    table.integer("quantity").notNullable()
    table.timestamps(true, true, true)
  })
}
export const down = async (knex) => {
  await knex.schema.dropTable("products")
}
