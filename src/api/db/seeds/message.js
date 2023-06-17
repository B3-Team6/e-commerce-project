exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE contact RESTART IDENTITY CASCADE")
  await knex("contact").insert([
    {
      email: "john@example.com",
      message: "Hello John!",
    },
    {
      email: "emma@example.com",
      message: "Hi Emma!",
    },
    {
      email: "david@example.com",
      message: "Hey David!",
    },
    {
      email: "sarah@example.com",
      message: "Greetings Sarah!",
    },
    {
      email: "alex@example.com",
      message: "Hello Alex!",
    },
    {
      email: "julia@example.com",
      message: "Hi Julia!",
    },
    {
      email: "michael@example.com",
      message: "Hey Michael!",
    },
    {
      email: "olivia@example.com",
      message: "Greetings Olivia!",
    },
    {
      email: "william@example.com",
      message: "Hello William!",
    },
  ])
}
