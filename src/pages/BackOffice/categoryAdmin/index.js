import React, { useState } from "react"
import LayoutAdmin from "@/web/components/BackOffice/LayoutAdmin"
import Head from "next/head"
import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid"

const CategoryAdmin = () => {
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "Canapé",
      description:
        "Les canapés sont des sièges confortables pour les salons, disponibles dans différentes tailles et matériaux, souvent accompagnés de fauteuils assortis.",
      image: "tg",
    },
    {
      id: 2,
      name: "Lit",
      description:
        "Les lits sont des meubles conçus pour offrir un endroit confortable pour dormir, disponibles dans différentes tailles et matériaux, souvent accompagnés de matelas et de literie.",
      image: "tg",
    },
    {
      id: 3,
      name: "Table",
      description:
        "Les tables sont des surfaces planes pour placer des objets, disponibles dans différentes tailles, matériaux et formes, souvent accompagnées de sièges.",
      image: "tg",
    },
    {
      id: 4,
      name: "Bureau",
      description:
        "Les bureaux sont des meubles de travail avec des fonctionnalités de rangement, disponibles dans différentes tailles et matériaux, souvent avec une chaise assortie.",
      image: "tg",
    },
    {
      id: 5,
      name: "Chaise",
      description:
        "Les chaises sont des sièges individuels avec des fonctionnalités supplémentaires, disponibles dans différents matériaux et tailles. Elles sont souvent utilisées pour fournir des sièges supplémentaires ou compléter un ensemble.",
      image: "tg",
    },
    {
      id: 6,
      name: "Armoire",
      description:
        "Les armoires sont des meubles de rangement verticaux pour les vêtements ou les articles ménagers, avec des étagères, des tiroirs et des portes, disponibles dans différents matériaux.",
      image: "tg",
    },
  ])

  const [editedId, setEditedId] = useState(null)
  const [editedName, setEditedName] = useState("")
  const [editedDescription, setEditedDescription] = useState("")

  function handleEdit(id) {
    // Récupérer l'élément correspondant à l'ID donné et effectuer des actions d'édition
    const element = category.find((categorie) => categorie.id === id)

    if (element) {
      // Mettre à jour les valeurs éditées avec les valeurs actuelles de l'élément
      setEditedId(id)
      setEditedName(element.name)
      setEditedDescription(element.description)
    } else {
      console.log("Element not found")
    }
  }

  function handleSaveEdit(id) {
    // Récupérer l'index de l'élément correspondant à l'ID donné
    const index = category.findIndex((categorie) => categorie.id === id)

    if (index !== -1) {
      const updatedCategory = [...category]
      updatedCategory[index].name = editedName
      updatedCategory[index].description = editedDescription
      setCategory(updatedCategory)
      setEditedId(null)
      setEditedName("")
      setEditedDescription("")
    }
  }

  function handleDelete(id) {
    // Supprimer l'élément correspondant à l'ID donné
    const updatedCategory = category.filter((categorie) => categorie.id !== id)
    // Mettre à jour le tableau category avec les éléments restants
    setCategory(updatedCategory)
    // Exemple : Afficher un message de suppression réussie ou effectuer d'autres actions
    console.log("Element deleted successfully")
  }

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
            <th>Action :</th>
          </tr>
        </thead>
        <tbody>
          {category.map((categorie) => (
            <tr key={categorie.id} className="border-2 border-stone-300">
              <td className="w-16">{categorie.id}</td>
              <td className="w-24 ">
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
                    className="border-2 border-red-500"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                ) : (
                  categorie.description
                )}
              </td>
              <td>
                {categorie.id === editedId ? (
                  <>
                    <div className="flex flex-row">
                      <button onClick={() => handleSaveEdit(categorie.id)}>
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
