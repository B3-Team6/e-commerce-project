exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE materials RESTART IDENTITY CASCADE")
  await knex("materials").insert([
    {
      name: "Bois",
      slug: "bois",
    },
    {
      name: "Chêne",
      slug: "chene",
    },
    {
      name: "Hêtre",
      slug: "hetre",
    },
    {
      name: "Pin",
      slug: "pin",
    },

    {
      name: "Metal",
      slug: "metal",
    },

    {
      name: "Acier",
      slug: "acier",
    },
    {
      name: "Fer forgé",
      slug: "fer-forge",
    },
    {
      name: "Aluminium",
      slug: "aluminium",
    },
  ])
}
