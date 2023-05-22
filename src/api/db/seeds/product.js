import { faker } from "@faker-js/faker"

export const seed = async (knex) => {
  const productData = Array.from({ length: 10 }, () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    quantity: faker.number.int({ max: 100 }),
  }))

  await knex("products").insert(productData)
}
