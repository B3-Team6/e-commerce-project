export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("displayName").notNullable()
    table.text("email").notNullable().unique()
    table.text("passwordHash").notNullable()
    table.text("passwordSalt").notNullable()
    table.boolean("isAdmin").notNullable().defaultTo(false)
    table.timestamps(true, true, true)
    table.jsonb("cart").notNullable().defaultTo({})
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("users")
}
