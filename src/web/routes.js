const routes = {
  home: () => "/",
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  legalNotice: () => "/legal-notice",
  tos: () => "/tos",
  contact: () => "/contact",
  cart: () => "/cart",
  products: () => "/product",
  api: {
    signUp: () => "/sign-up/sign-up",
    signIn: () => "/sign-in/sign-in",
    category: {
      categories: (categoryId) => `/backoffice/category/${categoryId}`,
      category: () => `/backoffice/category`,
    },
    product: {
      products: (productId) => `/product/${productId}`,
      product: () => `/product`,
    },
    material: {
      materials: (materialId) => `/material/${materialId}`,
      material: () => `/material`,
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
  },
  category: {},
  product: {},
}

export default routes
