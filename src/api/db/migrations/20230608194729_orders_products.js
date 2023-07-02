module.exports.up = async (knex) => {
  await knex.schema.createTable("orders_products", function (table) {
    table.integer("orderId").unsigned().references("id").inTable("orders")
    table.integer("productId").unsigned().references("id").inTable("products")
    table.integer("quantity").notNullable()
    table.decimal("price").notNullable()
    table.timestamps(true, true, true)

    table.primary(["orderId", "productId"])
  })
}

module.exports.down = async (knex) => {
  await knex.schema.dropTable("orders_products")
}
