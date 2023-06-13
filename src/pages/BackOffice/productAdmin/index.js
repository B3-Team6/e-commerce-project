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

const ProductAdmin = () => {
  const {
    actions: { updateProduct, deleteProduct },
  } = useAppContext()

  const [products, setProducts] = useState([])
  const [editedId, setEditedId] = useState(null)
  const [editedName, setEditedName] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedMaterial, setEditedMaterial] = useState("")
  const [editedQuantity, setEditedQuantity] = useState("")
  const [editedPrice, setEditedPrice] = useState("")
  const [editedImage, setEditedImage] = useState("")

  const fetchData = async () => {
    const { data } = await axios.get("/api/backoffice/product")
    setProducts(data.result)
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
        setEditedMaterial(product.material.id)
        setEditedQuantity(product.quantity)
        setEditedPrice(product.price)
        setEditedImage(product.image)
      }
    },
    [products]
  )

  const handleSaveEdit = useCallback(async () => {
    const [err] = await updateProduct(
      editedId,
      editedName,
      editedDescription,
      editedMaterial,
      editedQuantity,
      editedPrice,
      editedImage
    )

    if (err) {
      return err
    }

    fetchData()
    setEditedId(null)
  }, [
    editedId,
    editedName,
    editedDescription,
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

      await axios.delete(`/api/backoffice/product/${id}`)

      fetchData()
    },
    [deleteProduct]
  )

  const [materials, setMaterials] = useState([])

  const fecthData = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backoffice/material"
    )
    setMaterials(data.result)
  }

  useEffect(() => {
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
        PRODUCT
      </p>
      <table className="mx-8 border-2 border-red-500">
        <thead className="border-2 border-red-500">
          <tr className="border-2 text-left">
            <th>Id :</th>
            <th>Name :</th>
            <th>Desc :</th>
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
              <td className="text-sm">
                {product.id === editedId ? (
                  <input
                    className="w-full border-2 border-slate-300"
                    value={editedImage}
                    onChange={(e) => setEditedImage(e.target.value)}
                  />
                ) : (
                  product.image
                )}
              </td>
              <td>
                {product.id === editedId ? (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleSaveEdit(product.id)}>
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
