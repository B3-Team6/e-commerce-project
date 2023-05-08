export const up = async (knex) => {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary()
    table
      .integer("product_id")
      .notNullable()
      .references("id")
      .inTable("products")
    table.integer("quantity").notNullable()
    table.timestamps(true, true, true)
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("orders")
}
