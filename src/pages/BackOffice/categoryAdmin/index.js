import React, { use, useCallback, useEffect, useState } from "react"
import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid"
import axios from "axios"

const CategoryAdmin = () => {
  const [category, setCategory] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedName, setEditedName] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedImage, setEditedImage] = useState("")

  const fecthData = async () => {
    const { data } = await axios.get("http://localhost:3000/api/category")
    setCategory(data.result)

    console.log(data)
  }

  useEffect(() => {
    fecthData()
  }, [])

  function handleEdit(id) {
    const element = category.find((categorie) => categorie.id === id)

    if (element) {
      setEditedId(id)
      setEditedName(element.name)
      setEditedDescription(element.description)
      setEditedImage(element.image)
    }
  }

  const handleSaveEdit = useCallback(
    async (category) => {
      await axios.patch(`http://localhost:3000/api/category/${category.id}`, {
        name: editedName,
        description: editedDescription,
        image: editedImage,
      })

      fecthData()
      setEditedId(null)
    },
    [editedName, editedDescription, editedImage]
  )

  const handleDelete = useCallback(async (id) => {
    await axios.delete(`http://localhost:3000/api/category/${id}`)

    fecthData()
  }, [])

  return (
    <>
      <Head>
        <title>Back Office</title>
        <meta name="description" content="Terms of Use page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="my-8 flex justify-center font-serif text-2xl underline">
        CATEGORY
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id :</th>
            <th>Name :</th>
            <th>Desc :</th>
            <th>Image :</th>
            <th>Action :</th>
          </tr>
        </thead>
        <tbody>
          {category.map((categorie) => (
            <tr key={categorie.id} className="border-2 border-stone-300">
              <td className="w-16">{categorie.id}</td>
              <td className="w-24 text-sm">
                {categorie.id === editedId ? (
                  <input
                    className="border-2 border-green-500"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  categorie.name
                )}
              </td>
              <td className="truncated-description w-2/3 text-sm">
                {categorie.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-red-500"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                ) : (
                  categorie.description
                )}
              </td>
              <td className="text-sm">
                {categorie.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-red-500"
                    value={editedImage}
                    onChange={(e) => setEditedImage(e.target.value)}
                  />
                ) : (
                  categorie.image
                )}
              </td>
              <td>
                {categorie.id === editedId ? (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleSaveEdit(categorie)}>
                        <CheckIcon className="h-8 text-green-500" />
                      </button>
                      <button onClick={() => setEditedId(null)}>
                        <XMarkIcon className="h-8 text-red-500" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex-rows flex">
                      <button onClick={() => handleEdit(categorie.id)}>
                        <PencilSquareIcon className="h-8" />
                      </button>
                      <button
                        onClick={() => handleDelete(categorie.id)}
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

CategoryAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

CategoryAdmin.isPublicPage = true

export { CategoryAdmin as default }
