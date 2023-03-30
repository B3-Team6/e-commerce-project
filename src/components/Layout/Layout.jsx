import CartPage from "./CartPage"

const Layout = ({ children }) => {
  return (
    <>
      <CartPage />
      {children}
    </>
  )
}
export default Layout
