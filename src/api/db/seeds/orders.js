exports.seed = async function (knex) {
    await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    await knex("users").insert([
        {
            displayName: "admin",
            email: "admin@gmail.com",
            passwordHash: "admin",
            passwordSalt: "admin",
        },
    ])

    await knex.raw("TRUNCATE TABLE orders RESTART IDENTITY CASCADE")
    await knex("orders").insert([
        {
            userId: 1,
            status: "pending",
        },
    ])

    await knex.raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    await knex("products").insert([
        {name: "product1", price: 50},
        {name: "product2", price: 49.99},
        {name: "product3", price: 4999.99},
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
