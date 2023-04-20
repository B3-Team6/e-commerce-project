import NavBar from "@/web/components/Layout/NavBar"
import Footer from "@/web/components/Layout/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
export default Layout
