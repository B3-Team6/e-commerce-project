import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"

const UserAdmin = () => {
  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>User</div>
    </>
  )
}
UserAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

UserAdmin.isPublicPage = true
export default UserAdmin
