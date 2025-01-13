import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPmethods } from "../../../services/payment_methods";


export default function Books() {
   const[pmethods, setPmethods] = useState([])

    useEffect(() => {
        const fetchBooks = async () =>{
            const data = await getPmethods()
            setPmethods(data)
        }
        fetchBooks()
    }, [])
    
    console.log(pmethods)
    return (
        <div
        className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
        >
       
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
                    Methode Bayar
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
                        <Link to="/admin/books/edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                        <button>
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