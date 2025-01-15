import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteAuthor, getAuthors } from "../../../services/authors";


export default function Authors() {
   const[authors, setAuthors] = useState([])

    useEffect(() => {
        const fetchAuthors = async () =>{
            const data = await getAuthors()
            setAuthors(data)
        }
        fetchAuthors()
    }, [])

    const handleDelete = async (id) => {
                const confirmedDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini")
         
            if (confirmedDelete){
                await deleteAuthor(id)
                setAuthors(authors.filter(author => author.id !==id))
            }
    }
    
    console.log(authors)
    return (
        <div
        className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
        >
       <Link to={"/admin/authors/create"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah data</Link>
        <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
            <thead className="border-b bg-gray-50 text-white">
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th
                    className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
                >
                    Nama
                </th>
                <th
                    className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white"
                >
                    Foto
                </th>
                <th
                    className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white"
                >
                    Bio
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>

                {authors.length > 0 ?
                authors.map((author) => (
                <tr  key={author.id} className="hover:bg-gray-50">
                    <td
                        className="px-4 py-5 pl-9 xl:pl-11"
                    >
                        <h5 className="font-medium text-black dark:text-white">{author.name}</h5>
                    </td>
                    <td className="px-4 py-5">
                        {/* <p className="text-black dark:text-white">{author.photo}</p> */}
                        <img src={"http://127.0.0.1:8000/storage/authors/" + author.photo} alt="" />
                    </td>
                    <td className="px-4 py-5">
                        <p className="text-black dark:text-white">{author.bio}</p>
                    </td>
                     <td className="px-4 py-5">
                        <div className="flex items-center space-x-3.5">
                        <Link to={`/admin/authors/edit/${author.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                        <button  onClick={()=> handleDelete(author.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        </div>
                    </td>
                </tr>
                )) : (
                    <p>Tidak ada data</p>
                )}
            </tbody>
            </table>
        </div>
            
        </div>
    )
}