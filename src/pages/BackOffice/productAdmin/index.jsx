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

const ProductAdmin = () => {
  const {
    actions: { updateProduct, deleteProduct },
  } = useAppContext()

  const [products, setProducts] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedName, setEditedName] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedCategory, setEditedCategory] = useState("")
  const [editedMaterial, setEditedMaterial] = useState("")
  const [editedQuantity, setEditedQuantity] = useState("")
  const [editedPrice, setEditedPrice] = useState("")
  const [editedImage, setEditedImage] = useState(null)

  const fetchData = async () => {
    const {
      data: { result },
    } = await axios.get("http://localhost:3000/api/backoffice/product")
    setProducts(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = useCallback(
    (id) => {
      const product = products.find((product) => product.id === id)

      if (product) {
        setEditedId(id)
        setEditedName(product.name)
        setEditedDescription(product.description)
        setEditedCategory(product.category.id)
        setEditedMaterial(product.material.id)
        setEditedQuantity(product.quantity)
        setEditedPrice(product.price)
        setEditedImage(product.image)
      }
    },
    [products]
  )

  const handleEditedImageChange = (event) => {
    const eventFiles = event.target.files

    if (eventFiles && eventFiles.length > 0) {
      const eventFile = eventFiles[0]
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
    const [err] = await updateProduct(
      editedId,
      editedName,
      editedDescription,
      editedCategory,
      editedMaterial,
      editedQuantity,
      editedPrice,
      editedImage
    )

    if (err) {
      // eslint-disable-next-line no-console
      console.error("Erreur lors de la mise à jour du produit :", err)

      return
    }

    fetchData()
    setEditedId(null)
  }, [
    editedId,
    editedName,
    editedDescription,
    editedCategory,
    editedMaterial,
    editedQuantity,
    editedPrice,
    editedImage,
    updateProduct,
  ])

  const handleDelete = useCallback(
    async (id) => {
      const [err] = await deleteProduct(id)

      if (err) {
        return err
      }

      fetchData()
    },
    [deleteProduct]
  )

  const [materials, setMaterials] = useState([])

  const fecthDataMaterial = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backoffice/material"
    )
    setMaterials(data.result)
  }

  useEffect(() => {
    fecthDataMaterial()
  }, [])

  const [categories, setCategories] = useState([])

  const fecthDataCategory = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backoffice/category"
    )
    setCategories(data.result)
  }

  useEffect(() => {
    fecthDataCategory()
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
        PRODUCT
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id :</th>
            <th>Name :</th>
            <th>Desc :</th>
            <th>Category :</th>
            <th>Material :</th>
            <th>Quantity :</th>
            <th>Price :</th>
            <th>Image :</th>
            <th>Action :</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-2 border-stone-300">
              <td className="w-16">{product.id}</td>
              <td className="w-24 text-sm">
                {product.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td className="truncated-description w-2/3 text-sm">
                {product.id === editedId ? (
                  <textarea
                    className="w-full border-2 border-slate-300"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td className="w-24 text-sm">
                {product.id === editedId ? (
                  <select
                    name="categories"
                    label="Category"
                    onChange={(e) => setEditedCategory(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  product.category.name
                )}
              </td>
              <td className="w-24 text-sm">
                {product.id === editedId ? (
                  <select
                    name="materials"
                    label="Material"
                    onChange={(e) => setEditedMaterial(e.target.value)}
                  >
                    <option value="">Select a material</option>
                    {materials.map((material) => (
                      <option key={material.id} value={material.id}>
                        {material.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  product.material.name
                )}
              </td>

              <td className="w-24 text-sm">
                {product.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="number"
                    value={editedQuantity}
                    onChange={(e) => setEditedQuantity(e.target.value)}
                  />
                ) : (
                  product.quantity
                )}
              </td>
              <td className="w-24 text-sm">
                {product.id === editedId ? (
                  <input
                    className="border-2 border-slate-500"
                    type="text"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td className=" text-sm">
                {product.id === editedId ? (
                  <>
                    <input
                      type={"file"}
                      className={clsx(
                        "rounded-lg border-2 px-4 py-2 outline-none"
                      )}
                      onChange={(e) => handleEditedImageChange(e)}
                    />
                  </>
                ) : (
                  product.image
                )}
              </td>
              <td>
                {product.id === editedId ? (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleSaveEdit(product)}>
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
                      <button onClick={() => handleEdit(product.id)}>
                        <PencilSquareIcon className="h-8 w-8" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
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
        href={routes.backoffice.addProduct()}
        className="mx-auto mt-4 flex w-fit justify-center rounded-md bg-black px-4 py-2 text-white"
      >
        Add a new product
      </Link>
    </>
  )
}

ProductAdmin.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>
}

ProductAdmin.isPublicPage = true

export default ProductAdmin
