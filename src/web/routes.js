const routes = {
  home: () => "/",
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  legalNotice: () => "/legal-notice",
  tos: () => "/tos",
  contact: () => "/contact",
<<<<<<< HEAD
  checkout: {
    checkout: () => "/checkout",
    payment: () => "/checkout/payment",
    summary: () => "/checkout/summary",
  },
=======
  cart: () => "/cart",
  forgotPassword: () => "/forgot-password",
  products: (productId) => `/product/${productId}`,
>>>>>>> main
  api: {
    signUp: () => "/sign-up/sign-up",
    signIn: () => "/sign-in/sign-in",
    sendMailPassword: () => `/mail/`,
    resetPassword: (userId) => `/reset/${userId}`,
    contactUs: () => "/contact/",
    contact: {
      contacts: (contactId) => `/contact/${contactId}`,
      contact: () => `/contact`,
    },
    category: {
      categories: (categoryId) => `/backoffice/category/${categoryId}`,
      category: () => "/backoffice/category",
    },
    order: {
      orders: (orderId) => `/backoffice/order/${orderId}`,
      order: () => "/backoffice/order",
    },
    product: {
      products: (productId) => `/backoffice/product/${productId}`,
      product: () => "/backoffice/product",
    },
    material: {
      materials: (materialId) => `/material/${materialId}`,
      material: () => "/backoffice/material",
    },
    user: {
      users: (userId) => `/backoffice/user/${userId}`,
      user: () => "/backoffice/user",
    },
    cart: () => "/cart/cart",
  },
  backoffice: {
    backoffice: () => "/BackOffice",
    category: () => "/BackOffice/categoryAdmin",
    addCategory: () => "/BackOffice/categoryAdmin/add",
    order: () => "/BackOffice/orderAdmin",
    product: () => "/BackOffice/productAdmin",
    addProduct: () => "/BackOffice/productAdmin/add",
    user: () => "/BackOffice/userAdmin",
    addUser: () => "/BackOffice/userAdmin/add",
    contact: () => "/BackOffice/contactAdmin",
  },
  category: {},
  product: {},
  user: {},
}

export default routes
