import { useNavigate } from "react-router-dom"
import { createGenre } from "../../../services/genre"
import { useState } from "react"

export default function GenreCreate() {
    const[errors,setErrors] = useState({})

     const[genreData, setGenreData] = useState({
            name: "",
            description:""
        })

        const navigate = useNavigate()

        const handleInputChange = (e) => {
            const{ name, value} = e.target
            setGenreData({...genreData, [name]: value})
        }

       const storeGenre = async (e) => {
              e.preventDefault()
      
            const formDataToSend = new FormData()
      
              formDataToSend.append('name',genreData.name)
              formDataToSend.append('description',genreData.description)
            try {
                await createGenre(formDataToSend)
                navigate('/admin/genres')
            }catch (err) {
                // console.log(err.response.data.message)
                setErrors(err.response.data.message)
              }
          }  

  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default dark:bg-boxdark"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"
        >
          <h3 className="font-medium text-black dark:text-white">
            Add Data
          </h3>
        </div>
        <form onSubmit={storeGenre}className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Name
              </label>
              {errors.name &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.name[0]}</span>
                </div>
              )}
              <input
                name="name"
                value={genreData.name}
                onChange={handleInputChange}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Description
              </label>
              {errors.description &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.description[0]}</span>
                </div>
              )}
              <textarea
                name="description"
                value={genreData.description}
                onChange={handleInputChange}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
