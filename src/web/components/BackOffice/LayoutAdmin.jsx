import NavBarAdmin from "./NavBarAdmin"

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex flex-col">
      <NavBarAdmin />
      {children}
    </div>
  )
}

export default LayoutAdmin
