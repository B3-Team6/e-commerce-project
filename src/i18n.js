import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          contactTitle: "Contact Us",
          emailPlaceholder: "Enter your email",
          emailLabel: "E-mail",
          messagePlaceholder: "Enter your message",
          messageLabel: "Message",
          messageAriaLabel: "Message input",
          submitButton: "Submit",
          submitSuccessMessage: "Message successfully sent",
        },
      },
    },
  })
