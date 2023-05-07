export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  })
    .format(date)
    .replace(/\s/g, " ")
