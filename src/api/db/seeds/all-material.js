exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE materials RESTART IDENTITY CASCADE")
  await knex("materials").insert([
    {
      name: "Bois",
      slug: "canape",
    },
    {
      name: "Metal",
      slug: "caeadzdnape",
    },
  ])
}
