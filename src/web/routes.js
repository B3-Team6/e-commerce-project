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
       order: {
      orders: () => `/order`,
      order: (orderId) => `/order/${orderId}`,
    },
  },
  backoffice: {
    backoffice: () => "/BackOffice",
    category: () => "/BackOffice/categoryAdmin",
    addCategory: () => "/BackOffice/categoryAdmin/add",
    order: () => "/BackOffice/orderAdmin",
    addOrder: () => "/BackOffice/orderAdmin/add",
    product: () => "/BackOffice/productAdmin",
    user: () => "/BackOffice/userAdmin",
    contact: () => "/BackOffice/contactAdmin",
  },
  category: {},
}

export default routes
