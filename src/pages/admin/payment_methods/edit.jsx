import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getPmethods, updatePmethod } from "../../../services/payment_methods";

export default function Pmethodedit() {
    const[errors,setErrors] = useState({})
   

    const [image, setImage] = useState(''); //ush
    const [name, setName] = useState(''); //ush
    const [account_number, setAccountNumber] = useState('');

    //Destruct ID dari URL
    const { id } = useParams()
    const navigate = useNavigate()

    //fetch datanbuku berdasarkan ID
    const fetchPmethodDetails = async () => {
       const data = await getPmethods() // ambil semua data buku

       //cari data buku berdasarkan ID
       const pmethod =data.find(pmethod => pmethod.id === parseInt(id)) //find itu mencari
       if (pmethod) {
            //Assign data to state
            setName(pmethod.name)
            setAccountNumber(pmethod.account_number)
       } 
    //    console.log(pmethod)
    }
    
    

    useEffect(() => {
        fetchPmethodDetails()
    }, []);

    // handle file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    //upload pmethod data
    const updatePmethodDetails = async(e) => { //utk form submit
        e.preventDefault()

        //buat FormData
        const PmethodData = new FormData()

        PmethodData.append('name', name)
        PmethodData.append('account_number', account_number)
        PmethodData.append('_method', 'PUT')
        

        if (image) {
            PmethodData.append('image', image)
        } 

        await updatePmethod(id, PmethodData)
         .then(() => {
            // redirect ke halaman index
            navigate('/admin/payment_methods')
            console.log('data', PmethodData)
         }) 
         .catch((err) => {
            console.log(err.response.data.message)
            setErrors(err.response.data.message)
         })

        // console.log(PmethodData)
        
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
          <form  onSubmit={updatePmethodDetails} className="py-5">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                />
              </div>
  
              <div className="mb-4.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                >
                  Account Number
                </label>
                {errors.account_number &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.account_number[0]}</span>
                </div>
              )}
                <textarea
                  name="account_number"
                  value={account_number}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  rows="6"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                ></textarea>
              </div>
              <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach file
              </label>
              {errors.image &&(
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.image[0]}</span>
                </div>
              )}
              <input  
                type="file"
                onChange={handleFileChange}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
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
  