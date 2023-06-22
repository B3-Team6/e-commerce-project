import React, { useCallback, useEffect, useState } from "react"
import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid"
import axios from "axios"
import useAppContext from "@/web/hooks/useAppContext"
import routes from "@/web/routes"
import Link from "next/link"

const UserAdmin = () => {
  const {
    actions: { updateUser, deleteUser },
  } = useAppContext()

  const [users, setUsers] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedDisplayName, setEditedDisplayName] = useState("")
  const [editedEmail, setEditedEmail] = useState("")
  const [editedIsAdmin, setEditedIsAdmin] = useState("")

  const fetchData = async () => {
    const { data } = await axios.get("/api/backoffice/user")
    setUsers(data.result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = useCallback(
    (id) => {
      const user = users.find((user) => user.id === id)

      if (user) {
        setEditedId(id)
        setEditedDisplayName(user.displayName)
        setEditedEmail(user.email)
        setEditedIsAdmin(user.isAdmin)
      }
    },
    [users]
  )

  const handleSaveEdit = useCallback(async () => {
    const [err] = await updateUser(
      editedId,
      editedDisplayName,
      editedEmail,
      editedIsAdmin
    )

    if (err) {
      return err
    }

    fetchData()
    setEditedId(null)
  }, [editedId, editedDisplayName, editedEmail, editedIsAdmin])

  const handleDelete = useCallback(
    async (id) => {
      const [err] = await deleteUser(id)

      if (err) {
        return err
      }

      await axios.delete(`/api/backoffice/user/${id}`)

      fetchData()
    },
    [deleteUser]
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Backoffice user page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Users</div>

      <p className="my-8 flex justify-center font-serif text-2xl underline">
        USERS
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id :</th>
            <th>DisplayName :</th>
            <th>Email :</th>
            <th>IsAdmin :</th>
            <th>Action :</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-2 border-stone-300">
              <td className="w-16">{user.id}</td> // ID
              <td className="w-24 text-sm">
                {" "}
                // DisplayName
                {user.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="text"
                    value={editedDisplayName}
                    onChange={(e) => setEditedDisplayName(e.target.value)}
                  />
                ) : (
                  user.displayName
                )}
              </td>
              <td className="truncated-description w-2/3 text-sm">
                {" "}
                // Email
                {user.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-slate-300"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="w-24 text-sm">
                {" "}
                // IsAdmin
                {user.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="number"
                    value={editedIsAdmin}
                    onChange={(e) => setEditedIsAdmin(e.target.value)}
                  />
                ) : (
                  user.isAdmin
                )}
              </td>
              <td>
                {user.id === editedId ? (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleSaveEdit(user.id)}>
                        <CheckIcon className="h-8 text-green-500" />
                      </button>
                      <button onClick={() => setEditedId(null)}>
                        <XMarkIcon className="h-8 text-red-500" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleEdit(user.id)}>
                        <PencilSquareIcon className="h-8 w-8" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-500"
                      >
                        <TrashIcon className="h-8 w-8" />
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        href={routes.backoffice.addUser()}
        className="mx-auto mt-4 flex w-fit justify-center rounded-md bg-black px-4 py-2 text-white"
      >
        Add a new user
      </Link>
    </>
  )
}

UserAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

UserAdmin.isPublicPage = false

export default UserAdmin
