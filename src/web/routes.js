const routes = {
  home: () => "/",
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  legalNotice: () => "/legal-notice",
  tos: () => "/tos",
  contact: () => "/contact",
  api: {
    signUp: () => "/sign-up/sign-up",
    signIn: () => "/sign-in/sign-in",
    contactUs: () => "/contact/",
    contact: {
      contacts: (contactId) => `/contact/${contactId}`,
      contact: () => `/contact`,
    },
    category: {
      categories: (categoryId) => `/category/${categoryId}`,
      category: () => `/category`,
    },
  },
  backoffice: {
    backoffice: () => "/BackOffice",
    category: () => "/BackOffice/categoryAdmin",
    addCategory: () => "/BackOffice/categoryAdmin/add",
    order: () => "/BackOffice/orderAdmin",
    product: () => "/BackOffice/productAdmin",
    user: () => "/BackOffice/userAdmin",
    contact: () => "/BackOffice/contactAdmin",
  },
  category: {},
}

export default routes
