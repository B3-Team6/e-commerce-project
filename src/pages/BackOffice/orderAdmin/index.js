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

const OrderAdmin = () => {
  const {
    actions: { updateOrder, deleteOrder },
  } = useAppContext()

  const [order, setOrder] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedUserId, setEditedUserId] = useState(null)
  const [editedStatus, setEditedStatus] = useState("")
  const [editedDate, setEditedDate] = useState()

  const fecthData = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backoffice/order"
    )
    setOrder(data.result)
  }

  useEffect(() => {
    fecthData()
  }, [])

  function handleEdit(id) {
    const element = order.find((order) => order.id === id)

    if (element) {
      setEditedId(element.id)
      setEditedUserId(element.userId)
      setEditedStatus(element.status)
      setEditedDate(element.date)
    }
  }

  const handleSaveEdit = useCallback(async () => {
    const [err] = await updateOrder(
      editedId,
      editedUserId,
      editedStatus,
      editedDate
    )

    if (err) {
      return err
    }

    fecthData()
    setEditedId(null)
  }, [editedId, editedUserId, editedStatus, editedDate, updateOrder])

  const handleDelete = useCallback(
    async (id) => {
      const [err] = await deleteOrder(id)

      if (err) {
        return err
      }

      await axios.delete(`http://localhost:3000/api/backoffice/order/${id}`)

      fecthData()
    },
    [deleteOrder]
  )

  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="my-8 flex justify-center font-serif text-2xl underline">
        ORDER
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id</th>
            <th className=" pl-32">userId</th>
            <th className="pl-32">Status</th>
            <th className="pl-32">last Update</th>
            <th className="pl-32">Action</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order) => (
            <tr key={order.id} className="border-2 border-stone-300">
              <td className="w-16 ">{order.id}</td>
              <td className="w-24 pl-32 text-sm">{order.userId}</td>
              <td className="truncated-description  pl-32 text-sm ">
                {order.id === editedId ? (
                  <select
                    className="border-2 border-slate-300 pl-32"
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value)}
                  >
                    <option value="pending">pending</option>
                    <option value="finished">finished</option>
                  </select>
                ) : (
                  order.status
                )}
              </td>
              <td className="pl-32">
                {new Date(order.date).toISOString().slice(0, 10)}
              </td>
              <td>
                {order.id === editedId ? (
                  <>
                    <div className="flex flex-row pl-32">
                      <button onClick={() => handleSaveEdit(order)}>
                        <CheckIcon className="h-8 text-green-500" />
                      </button>
                      <button onClick={() => setEditedId(null)}>
                        <XMarkIcon className="h-8 text-red-500" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex-rows flex pl-32">
                      <button onClick={() => handleEdit(order.id)}>
                        <PencilSquareIcon className="h-8" />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
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

OrderAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

OrderAdmin.isPublicPage = true

export { OrderAdmin as default }
