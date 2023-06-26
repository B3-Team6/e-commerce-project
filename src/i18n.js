import i18next from "i18next"
import { initReactI18next } from "react-i18next"

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        // components
        submitButton: "Submit",
        // contact page
        contactHeadTitle: "AIRNEIS - Contact Us",
        contactTitle: "Contact Us",
        emailPlaceholder: "Enter your email",
        emailLabel: "E-mail",
        messagePlaceholder: "Enter your message",
        messageLabel: "Message",
        messageAriaLabel: "Message input",
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
        signOut: "Sign out",
        // home page
        homepageHeadTitle: "AIRNEIS - Home",
        discoverCategory:
          "Discover our categories of furniture as well as our best sellers",
        discoverProduct: "The Highlanders of the moment",
      },
    },
    fr: {
      translation: {
        // components
        submitButton: "Soumettre",
        // contact page
        contactHeadTitle: "AIRNEIS - Contactez nous",
        contactTitle: "Contactez-nous",
        emailPlaceholder: "Entrez votre email",
        emailLabel: "E-mail",
        messagePlaceholder: "Entrez votre message",
        messageLabel: "Message",
        messageAriaLabel: "Message input",
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
        signOut: "Déconnexion",
        // home page
        homepageHeadTitle: "AIRNEIS - Accueil",
        discoverCategory:
          "Découvrez nos catégories de meubles ainsi que nos meilleures ventes",
        discoverProduct: "Les Highlanders du moment",
      },
    },
  },
})
