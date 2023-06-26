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
import clsx from "clsx"

const CategoryAdmin = () => {
  const {
    actions: { updateCategory, deleteCategory },
  } = useAppContext()

  const [category, setCategory] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedName, setEditedName] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedImage, setEditedImage] = useState("")

  const fecthData = async () => {
    const { data } = await axios.get("http://localhost:3000/api/category")
    setCategory(data.result)
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

  const handleEditedImageChange = (event) => {
    const eventFile = event.target.files[0]

    if (editedImage) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileContent = e.target.result
        const buffer = Buffer.from(fileContent.split(",")[1], "base64")

        setEditedImage({
          name: eventFile.name,
          content: buffer,
          type: eventFile.type,
        })
      }
      reader.readAsDataURL(eventFile)
    }
  }

  const handleSaveEdit = useCallback(async () => {
    const [err] = await updateCategory(
      editedId,
      editedName,
      editedDescription,
      editedImage
    )

    if (err) {
      return err
    }

    fecthData()
    setEditedId(null)
  }, [editedId, editedName, editedDescription, editedImage, updateCategory])

  const handleDelete = useCallback(
    async (id) => {
      const [err] = await deleteCategory(id)

      if (err) {
        return err
      }

      await axios.delete(`http://localhost:3000/api/category/${id}`)

      fecthData()
    },
    [deleteCategory]
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
                    className="border-2 border-slate-500"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  categorie.name
                )}
              </td>
              <td className="truncated-description w-2/3 text-sm ">
                {categorie.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-slate-300"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                ) : (
                  categorie.description
                )}
              </td>
              <td className=" text-sm">
                {categorie.id === editedId ? (
                  <input
                    type={"file"}
                    className={clsx(
                      "rounded-lg border-2 px-4 py-2 outline-none"
                    )}
                    onChange={(e) => handleEditedImageChange(e)}
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
      <Link
        href={routes.backoffice.addCategory()}
        className="mx-auto mt-4 flex w-fit justify-center rounded-md bg-black px-4 py-2 text-white"
      >
        Ajouter une catÃ©gorie
      </Link>
    </>
  )
}

CategoryAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

CategoryAdmin.isPublicPage = true

export { CategoryAdmin as default }
