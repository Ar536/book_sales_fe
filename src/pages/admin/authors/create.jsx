import { useNavigate } from "react-router-dom"
import { createAuthor } from "../../../services/authors"
import { useState } from "react"

export default function AuthorCreate() {
    const[errors,setErrors] = useState({})

    const[authorData, setAuthorData] = useState({
        name: "",
        photo:"",
        bio:""
    })

    const navigate = useNavigate()

    //Handle input change
    const handleInputChange = (e) => {
        const{ name, value} = e.target
        setAuthorData({...authorData, [name]: value})
    }
    //Handle file change
    const handleFileChange = (e) => {
        setAuthorData({...authorData, photo:e.target.files[0]})
    }
    
    //Handle submit
    const storeAuthor = async (e) => {
        e.preventDefault()

        const formDataToSend = new FormData()

        formDataToSend.append('name',authorData.name)
        formDataToSend.append('photo',authorData.photo)
        formDataToSend.append('bio',authorData.bio)
        try {
            await createAuthor(formDataToSend)
            navigate('/admin/authors')
        }   catch (err) {
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
        
        <form onSubmit={storeAuthor} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
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
                value={authorData.name}
                onChange={handleInputChange}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach file
              </label>
              {errors.photo &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.photo[0]}</span>
                </div>
              )}
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Bio
              </label>
              {errors.bio &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.bio[0]}</span>
                </div>
              )}
              <textarea
                name="bio"
                value={authorData.bio}
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
