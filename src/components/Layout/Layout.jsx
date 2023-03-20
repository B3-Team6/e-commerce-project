import NavBar from "@/components/Layout/NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
export default Layout
