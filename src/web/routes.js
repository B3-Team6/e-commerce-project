const routes = {
  home: () => "/",
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  legalNotice: () => "/legal-notice",
  tos: () => "/tos",
  contact: () => "/contact",
  cart: () => "/cart",
  forgotPassord: () => "/forgot-password",
  products: (productId) => `/product/${productId}`,
  api: {
    signUp: () => "/sign-up/sign-up",
    signIn: () => "/sign-in/sign-in",
    contactUs: () => "/contact/",
    contact: {
      contacts: (contactId) => `/contact/${contactId}`,
      contact: () => `/contact`,
    },
    category: {
      categories: (categoryId) => `/backoffice/category/${categoryId}`,
      category: () => "/backoffice/category",
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
    order: () => "/order/order",
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
