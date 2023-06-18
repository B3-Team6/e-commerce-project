exports.seed = async function (knex) {
  await knex.raw("TRUNCATE TABLE contact RESTART IDENTITY CASCADE")
  await knex("contact").insert([
    {
      email: "info@example.com",
      message: "Bonjour, j'ai une question sur votre produit.",
    },
    {
      email: "samantha@example.com",
      message: "Salut Samantha, comment ça va ?",
    },
    {
      email: "robert@example.com",
      message: "Bonjour Robert, j'ai besoin de votre aide.",
    },
    {
      email: "sophie@example.com",
      message: "Bonjour Sophie, je voulais vous remercier pour votre soutien.",
    },
    {
      email: "maxime@example.com",
      message: "Salut Maxime, j'espère que tu passes une bonne journée !",
    },
    {
      email: "alice@example.com",
      message: "Bonjour Alice, avez-vous reçu mon dernier e-mail ?",
    },
    {
      email: "pierre@example.com",
      message: "Bonjour Pierre, j'ai une proposition commerciale à vous faire.",
    },
    {
      email: "isabelle@example.com",
      message: "Salut Isabelle, on se voit ce soir ?",
    },
    {
      email: "luc@example.com",
      message: "Bonjour Luc, j'aimerais discuter d'un projet avec vous.",
    },
    {
      email: "audrey@example.com",
      message: "Salut Audrey, comment se passe votre nouvelle entreprise ?",
    },
    {
      email: "julien@example.com",
      message:
        "Bonjour Julien, pourriez-vous m'envoyer les détails de la réunion ?",
    },
    {
      email: "laura@example.com",
      message:
        "Salut Laura, je voulais juste vous dire que vous avez fait un excellent travail.",
    },
    {
      email: "mathieu@example.com",
      message:
        "Bonjour Mathieu, j'ai quelques questions concernant votre service.",
    },
    {
      email: "camille@example.com",
      message:
        "Bonjour Camille, avez-vous des disponibilités pour une réunion la semaine prochaine ?",
    },
    {
      email: "antoine@example.com",
      message:
        "Salut Antoine, je voulais vous féliciter pour votre promotion !",
    },
    {
      email: "claire@example.com",
      message: "Bonjour Claire, j'ai besoin de votre avis sur un projet.",
    },
    {
      email: "arthur@example.com",
      message:
        "Bonjour Arthur, quand est-ce que vous êtes disponible pour une discussion téléphonique ?",
    },
    {
      email: "léa@example.com",
      message: "Salut Léa, j'aimerais vous inviter à notre événement spécial.",
    },
    {
      email: "victor@example.com",
      message:
        "Bonjour Victor, pourriez-vous me recommander un bon restaurant dans la région ?",
    },
    {
      email: "emma@example.com",
      message: "Bonjour Emma, félicitations pour votre diplôme !",
    },
    {
      email: "alexander@example.com",
      message: "Hello Alexander, how are you doing?",
    },
    {
      email: "natalie@example.com",
      message: "Hi Natalie, I have a question about your recent presentation.",
    },
    {
      email: "benjamin@example.com",
      message: "Hello Benjamin, thank you for your assistance.",
    },
    {
      email: "victoria@example.com",
      message: "Hi Victoria, I wanted to congratulate you on your achievement.",
    },
    {
      email: "nathan@example.com",
      message: "Hello Nathan, I hope you're having a great day!",
    },
    {
      email: "emma@example.com",
      message: "Hi Emma, did you receive my email?",
    },
    {
      email: "thomas@example.com",
      message: "Hello Thomas, I have a business proposal for you.",
    },
    {
      email: "sophia@example.com",
      message: "Hi Sophia, are we still meeting tonight?",
    },
    {
      email: "gabriel@example.com",
      message: "Hello Gabriel, I would like to discuss a project with you.",
    },
    {
      email: "olivia@example.com",
      message: "Hi Olivia, how is your new startup going?",
    },
    {
      email: "noah@example.com",
      message: "Hello Noah, could you send me the details of the meeting?",
    },
    {
      email: "emily@example.com",
      message:
        "Hi Emily, I just wanted to say that you've done an excellent job.",
    },
    {
      email: "samuel@example.com",
      message: "Hello Samuel, I have some questions regarding your service.",
    },
    {
      email: "charlotte@example.com",
      message:
        "Hi Charlotte, do you have any availability for a meeting next week?",
    },
    {
      email: "gabrielle@example.com",
      message: "Hello Gabrielle, congratulations on your promotion!",
    },
    {
      email: "leo@example.com",
      message: "Hi Leo, I need your opinion on a project.",
    },
    {
      email: "julia@example.com",
      message: "Hello Julia, when are you available for a phone call?",
    },
    {
      email: "lucas@example.com",
      message: "Hi Lucas, I would like to invite you to our special event.",
    },
    {
      email: "clara@example.com",
      message: "Hello Clara, can you recommend a good restaurant in the area?",
    },
    {
      email: "adam@example.com",
      message: "Hi Adam, congratulations on your graduation!",
    },
    {
      email: "alexander@example.com",
      message: "Hello Alexander, how are you doing?",
    },
    {
      email: "natalie@example.com",
      message: "Hi Natalie, I have a question about your recent presentation.",
    },
    {
      email: "benjamin@example.com",
      message: "Hello Benjamin, thank you for your assistance.",
    },
    {
      email: "victoria@example.com",
      message: "Hi Victoria, I wanted to congratulate you on your achievement.",
    },
    {
      email: "nathan@example.com",
      message: "Hello Nathan, I hope you're having a great day!",
    },
    {
      email: "emma@example.com",
      message: "Hi Emma, did you receive my email?",
    },
    {
      email: "thomas@example.com",
      message: "Hello Thomas, I have a business proposal for you.",
    },
    {
      email: "sophia@example.com",
      message: "Hi Sophia, are we still meeting tonight?",
    },
    {
      email: "gabriel@example.com",
      message: "Hello Gabriel, I would like to discuss a project with you.",
    },
    {
      email: "olivia@example.com",
      message: "Hi Olivia, how is your new startup going?",
    },
    {
      email: "noah@example.com",
      message: "Hello Noah, could you send me the details of the meeting?",
    },
    {
      email: "emily@example.com",
      message:
        "Hi Emily, I just wanted to say that you've done an excellent job.",
    },
    {
      email: "samuel@example.com",
      message: "Hello Samuel, I have some questions regarding your service.",
    },
    {
      email: "charlotte@example.com",
      message:
        "Hi Charlotte, do you have any availability for a meeting next week?",
    },
    {
      email: "gabrielle@example.com",
      message: "Hello Gabrielle, congratulations on your promotion!",
    },
    {
      email: "leo@example.com",
      message: "Hi Leo, I need your opinion on a project.",
    },
    {
      email: "julia@example.com",
      message: "Hello Julia, when are you available for a phone call?",
    },
    {
      email: "lucas@example.com",
      message: "Hi Lucas, I would like to invite you to our special event.",
    },
    {
      email: "clara@example.com",
      message: "Hello Clara, can you recommend a good restaurant in the area?",
    },
    {
      email: "adam@example.com",
      message: "Hi Adam, congratulations on your graduation!",
    },
    {
      email: "huitre@nfeu.com",
      message: "fee",
    },
  ])
}
