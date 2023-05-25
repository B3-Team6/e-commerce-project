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
    category: {
      categories: (categoryId) => `/category/${categoryId}`,
    },
  },
  backoffice: {
    backoffice: () => "/BackOffice",
    category: () => "/BackOffice/categoryAdmin",
    order: () => "/BackOffice/orderAdmin",
    product: () => "/BackOffice/productAdmin",
    user: () => "/BackOffice/userAdmin",
  },
  category: {},
}

export default routes
