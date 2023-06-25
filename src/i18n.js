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
          // contact page
          contactTitle: "Contact Us",
          emailPlaceholder: "Enter your email",
          emailLabel: "E-mail",
          messagePlaceholder: "Enter your message",
          messageLabel: "Message",
          messageAriaLabel: "Message input",
          submitButton: "Submit",
          submitSuccessMessage: "Message successfully sent",
          // navbar & footer
          signIn: "Sign in",
          signUp: "Sign up",
          legalNotice: "Legal Notice",
          termsOfUse: "Terms of Use",
          contactUs: "Contact us",
          aboutUs: "About AIRNEIS",
          mySettings: "My account",
          myOrders: "My orders",
          // home page
          discoverCategory:
            "Discover our categories of furniture as well as our best sellers",
          discoverProduct: "The Highlanders of the moment",
        },
      },
      fr: {
        translation: {
          // contact page
          contactTitle: "Contactez-nous",
          emailPlaceholder: "Entrez votre email",
          emailLabel: "E-mail",
          messagePlaceholder: "Entrez votre message",
          messageLabel: "Message",
          messageAriaLabel: "Message input",
          submitButton: "Soumettre",
          submitSuccessMessage: "Message envoyé avec succès",
          // navbar & footer
          signIn: "Se connecter",
          signUp: "S'inscrire",
          legalNotice: "Mentions légales",
          termsOfUse: "Conditions d'utilisations",
          contactUs: "Contactez-nous",
          aboutUs: "À propos de nous",
          mySettings: "Mon compte",
          myOrders: "Mes commandes",
          // home page
          discoverCategory:
            "Découvrez nos catégories de meubles ainsi que nos meilleures ventes",
          discoverProduct: "Les Highlanders du moment",
        },
      },
    },
  })
