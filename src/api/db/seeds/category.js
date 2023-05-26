/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del()
  await knex("categories").insert([
    {
      id: 1,
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      image: "tg",
    },
    {
      id: 2,
      name: "Lit",
      description:
        "Les lits sont des meubles conçus pour offrir un endroit confortable pour dormir, disponibles dans différentes tailles et matériaux, souvent accompagnés de matelas et de literie.",
      image: "tg",
    },
    {
      id: 3,
      name: "Table",
      description:
        "Les tables sont des surfaces planes pour placer des objets, disponibles dans différentes tailles, matériaux et formes, souvent accompagnées de sièges.",
      image: "tg",
    },
    {
      id: 4,
      name: "Bureau",
      description:
        "Les bureaux sont des meubles de travail avec des fonctionnalités de rangement, disponibles dans différentes tailles et matériaux, souvent avec une chaise assortie.",
      image: "tg",
    },
    {
      id: 5,
      name: "Chaise",
      description:
        "Les chaises sont des sièges individuels avec des fonctionnalités supplémentaires, disponibles dans différents matériaux et tailles. Elles sont souvent utilisées pour fournir des sièges supplémentaires ou compléter un ensemble.",
      image: "tg",
    },
    {
      id: 6,
      name: "Armoire",
      description:
        "Les armoires sont des meubles de rangement verticaux pour les vêtements ou les articles ménagers, avec des étagères, des tiroirs et des portes, disponibles dans différents matériaux.",
      image: "tg",
    },
  ])
}
