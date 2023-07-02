import i18next from "i18next"
import { initReactI18next } from "react-i18next"

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        // components
        submitButton: "Submit",
        emailPlaceholder: "Enter your email",
        emailLabel: "E-mail",
        passwordPlaceholder: "Enter your password",
        passwordLabel: "Password",
        displayNamePlaceholder: "Enter your username",
        displayNameLabel: "Username",
        signIn: "Sign in",
        signUp: "Sign up",
        // contact page
        contactHeadTitle: "AIRNEIS - Contact Us",
        contactTitle: "Contact Us",
        messagePlaceholder: "Enter your message",
        messageLabel: "Message",
        messageAriaLabel: "Message input",
        submitSuccessMessage: "Message successfully sent",
        // navbar & footer
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
        // cart page
        cartTitle: "AIRNEIS - Cart",
        emptyCart: "Your cart is empty",
        shoppingCart: "Shopping Cart",
        removeButton: "Remove",
        total: "Total",
        subTotal: "Sub-total:",
        checkout: "Checkout",
        // category page
        categoryTitle: "AIRNEIS - Category",
        categoryTitle2: "AIRNEIS - Category - ",
        seeDescription: "Here is a collection of ",
        seeDescription2: ", click on the product to see its description",
        // forgot password page
        forgotPasswordTitle: "AIRNEIS - Forgot Password",
        forgotPassword: "Forgot Password",
        submitSuccessEmail: "Successfully sent the email!",
        resetPassword: "Reset your Password",
        // product page
        productTitle: "AIRNEIS - Product",
        productTitle2: "AIRNEIS - ",
        inStock: "In stock",
        lowStock: "Stock is low",
        outOfStock: "Out of stock",
        similarProduct: "Similar products",
        // sign in/up page
        forgotPasswordLink: "Forgot password ?",
        signInTitle: "AIRNEIS - Sign In",
        signUpTitle: "AIRNEIS - Sign Up",
      },
    },
    fr: {
      translation: {
        // components
        submitButton: "Soumettre",
        emailPlaceholder: "Entrez votre email",
        emailLabel: "E-mail",
        passwordPlaceholder: "Entrez votre mot de passe",
        passwordLabel: "Mot de passe",
        displayNamePlaceholder: "Entrez votre nom d'utilisateur",
        displayNameLabel: "Nom d'utilisateur",
        signIn: "Se connecter",
        signUp: "S'inscrire",
        // contact page
        contactHeadTitle: "AIRNEIS - Contactez nous",
        contactTitle: "Contactez-nous",
        messagePlaceholder: "Entrez votre message",
        messageLabel: "Message",
        messageAriaLabel: "Zone de texte",
        submitSuccessMessage: "Message envoyé avec succès",
        // navbar & footer
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
        // cart page
        cartTitle: "AIRNEIS - Panier",
        emptyCart: "Votre panier est vide",
        shoppingCart: "Panier",
        removeButton: "Retirer",
        total: "Total",
        subTotal: "Le total:",
        checkout: "Aller au paiement",
        // category page
        categoryTitle: "AIRNEIS - Catégorie",
        categoryTitle2: "AIRNEIS - Catégorie - ",
        seeDescription: "Voici notre collection de ",
        seeDescription2: ", cliquez sur un produit pour voir sa description",
        // forgot password page
        forgotPasswordTitle: "AIRNEIS - Mot de passe oublié",
        forgotPassword: "Mot de passe oublié",
        submitSuccessEmail: "Email envoyé avec succès!",
        resetPassword: "Réinitialiser le mot de passe",
        // product page
        productTitle: "AIRNEIS - Produit",
        productTitle2: "AIRNEIS - ",
        inStock: "En stock",
        lowStock: "Stock faible",
        outOfStock: "En rupture de stock",
        similarProduct: "Produits similaires",
        // sign in/up page
        forgotPasswordLink: "Mot de passe oublié ?",
        signInTitle: "AIRNEIS - Se connecter",
        signUpTitle: "AIRNEIS - S'inscrire",
      },
    },
  },
})
