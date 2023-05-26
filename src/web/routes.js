const routes = {
  home: () => "/",
  signUp: () => "/sign-up",
  signIn: () => "/sign-in",
  legalNotice: () => "/legal-notice",
  tos: () => "/tos",
  contact: () => "/contact",
  cart: () => "/cart",
  product: () => "/product",
  api: {
    signUp: () => "/sign-up/sign-up",
    signIn: () => "/sign-in/sign-in",
    cart: () => "/cart/cart",
    order: () => "/order/order",
    product: () => "/backoffice/product/product",
  },
  backoffice: {
    backoffice: () => "/BackOffice",
    category: () => "/BackOffice/categoryAdmin",
    order: () => "/BackOffice/orderAdmin",
    product: () => "/BackOffice/productAdmin",
    user: () => "/BackOffice/userAdmin",
  },
}

export default routes
