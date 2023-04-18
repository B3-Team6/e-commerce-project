import NavBar from "@/components/Layout/NavBar"
import Footer from "@/components/Layout/Footer"

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