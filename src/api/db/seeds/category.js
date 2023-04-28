/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del()
  await knex("categories").insert([
    { id: 1, name: "Canapé", description: "a", image: "tg" },
    { id: 2, name: "Lit", description: "a", image: "tg" },
    { id: 3, name: "Table", description: "a", image: "tg" },
    { id: 4, name: "Bureau", description: "a", image: "tg" },
    { id: 5, name: "Chaise", description: "a", image: "tg" },
    { id: 6, name: "Armoire", description: "a", image: "tg" },
  ])
}
