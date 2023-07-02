import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import { TrashIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import useAppContext from "@/web/hooks/useAppContext"
import { useCallback, useEffect, useState } from "react"

const ContactAdmin = () => {
  const {
    actions: { deleteContact },
  } = useAppContext()

  const [contact, setContact] = useState([])
  const [editedId] = useState(null)
  const [editedEmail] = useState("")
  const [editedMessage] = useState("")

  const fecthData = async () => {
    const { data } = await axios.get("http://localhost:3000/api/contact")
    setContact(data.result)
  }

  useEffect(() => {
    fecthData()
  }, [])

  const handleDelete = useCallback(
    async (id) => {
      const [err] = await deleteContact(id)

      if (err) {
        return err
      }

      fecthData()
    },
    [deleteContact]
  )

  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Airneis.jpg" />
      </Head>

      <p className="my-8 flex justify-center font-serif text-2xl underline">
        CONTACT
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id :</th>
            <th>Name :</th>
            <th>Desc :</th>
            <th>Action :</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((message) => (
            <tr key={message.id} className="border-2 border-stone-300">
              <td className="w-16">{message.id}</td>
              <td className="w-24 text-sm">
                {message.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="text"
                    value={editedEmail}
                  />
                ) : (
                  message.email
                )}
              </td>
              <td className="truncated-description w-2/3 text-sm ">
                {message.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-slate-300"
                    value={editedMessage}
                  />
                ) : (
                  message.message
                )}
              </td>

              <td>
                {message.id === editedId ? (
                  <></>
                ) : (
                  <>
                    <div className=" flex-rows flex">
                      <button
                        onClick={() => handleDelete(message.id)}
                        className="text-red-500"
                      >
                        <TrashIcon className="h-8" />
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

ContactAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

ContactAdmin.isPublicPage = true

export { ContactAdmin as default }
