import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePmethod, getPmethods } from "../../../services/payment_methods";


export default function Books() {
   const[pmethods, setPmethods] = useState([])

    useEffect(() => {
        const fetchPmethods = async () =>{
            const data = await getPmethods()
            setPmethods(data)
        }
        fetchPmethods()
    }, [])

    const handleDelete = async (id) => {
        const confirmedDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini")
    
        if (confirmedDelete){
            await deletePmethod(id)
            setPmethods(pmethods.filter(pmethod => pmethod.id !==id))
            }
        }
        
    
    console.log(pmethods)
    return (
        <div
        className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
        >
        <Link to={"/admin/payment_methods/create"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah data</Link>
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
                    Nomor Akun
                </th>
                <th
                    className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white"
                >
                    Image
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>

                {pmethods.length > 0 ?
                pmethods.map((pmethod) => (
                <tr  key={pmethod.id} className="hover:bg-gray-50">
                    <td
                        className="px-4 py-5 pl-9 xl:pl-11"
                    >
                        <h5 className="font-medium text-black dark:text-white">{pmethod.name}</h5>
                    </td>
                    <td className="px-4 py-5">
                        <p className="text-black dark:text-white">{pmethod.account_number}</p>
                    </td>
                    <td className="px-4 py-5">
                        <p className="text-black dark:text-white">{pmethod.image}</p>
                    </td>
                    <td className="px-4 py-5">
                        <div className="flex items-center space-x-3.5">
                        <Link to={`/admin/payment_methods/edit/${pmethod.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                        <button onClick={()=> handleDelete(pmethod.id)}>
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