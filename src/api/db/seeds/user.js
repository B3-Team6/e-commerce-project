import faker from "faker"

export const seed = async (knex) => {
  const userData = Array.from({ length: 10 }, () => ({
    displayName: faker.name.findName(),
    email: faker.internet.email(),
    passwordHash: faker.internet.password(),
    passwordSalt: faker.random.alphaNumeric(10),
    isAdmin: faker.datatype.boolean(),
  }))

  await knex("users").insert(userData)
}
