import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGenres, updateGenre } from "../../../services/genre";

export default function GenreEdit() {
    const[errors,setErrors] = useState({})
   
    const [name, setName] = useState(); //ush
    const [description, setDescription] = useState();


    //Destruct ID dari URL
    const { id } = useParams()
    const navigate = useNavigate()

    //fetch datanbuku berdasarkan ID
    const fetchGenreDetails = async () => {
       const data = await getGenres() // ambil semua data buku

       //cari data buku berdasarkan ID
       const genre =data.find(genre => genre.id === parseInt(id)) //find itu mencari
       if (genre) {
            //Assign data to state
            setName(genre.name)
            setDescription(genre.description)
            
       } 
    //    console.log(book)
    }
    
  

    useEffect(() => {
        fetchGenreDetails()
    }, []);

   
    //upload book data
    const updateGenreDetails = async(e) => { //utk form submit
        e.preventDefault()

        //buat FormData
        const genreData = new FormData()

        genreData.append('name', name)
        genreData.append('description', description)
        genreData.append('_method', 'PUT')
        // genre&author

        
        await updateGenre(id, genreData)
         .then(() => {
            // redirect ke halaman index
            navigate('/admin/genres')
            console.log(genreData)
         }) 
         .catch((err) => {
            console.log(err.response.data.message)
            setErrors(err.response.data.message)
         })

        // genreData.forEach((value, key) => {
        //     console.log(key, value)
        // })

        // console.log(bookData)
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
            Edit Data
          </h3>
        </div>
        <form onSubmit={updateGenreDetails} className="py-5">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
