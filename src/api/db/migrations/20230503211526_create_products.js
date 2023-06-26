export const up = async (knex) => {
  await knex.schema.createTable("materials", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.timestamps(true, true, true)
  })

  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.text("description").notNullable()
    table.float("price").notNullable()
    table.integer("quantity").notNullable()
    table.integer("image").notNullable()
    table
      .integer("material_id")
      .notNullable()
      .references("id")
      .inTable("materials")
    table
      .integer("categories_id")
      .notNullable()
      .references("id")
      .inTable("categories")
    table.timestamps(true, true, true)
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("materials")
  await knex.schema.dropTable("products")
}
