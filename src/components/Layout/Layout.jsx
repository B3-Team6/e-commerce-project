import Footer from "@/components/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
export default Layout;