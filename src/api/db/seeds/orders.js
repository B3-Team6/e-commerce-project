exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE orders RESTART IDENTITY CASCADE")
  await knex("orders").insert([
    {
      userId: 1,
      status: "pending",
    },
  ])

  await knex.raw("TRUNCATE TABLE orders_products RESTART IDENTITY CASCADE")
  await knex("orders_products").insert([
    {
      orderId: 1,
      productId: 1,
      quantity: 187,
      price: 49.99,
    },
    {
      orderId: 1,
      productId: 2,
      quantity: 187,
      price: 49.99,
    },
  ])
}
