import { useState } from "react"

const initAutomotive =[
    {car: "Toyota"},
    {car: "Audi"},
    {car: "Tesla"}
]

function Home() { {/*Home adalah parent*/}
    const[car , setCars] = useState('');
    const[automotive , setAutomotive] = useState(initAutomotive);

    const handleChange = (event) =>[
       setCars(event.target.value) //memperbarui state car ketika input berubah
    ]

    const handleSubmit = (event) => {
        event.preventDefault() // mencegah reload halaman
        if(car.trim() !== '') { //pastikan inpit tidak kosong
        setAutomotive([...automotive, {car}])// menambah data ke state automotive
        setCars('')// kosongkan input ketika submit telah berhasil
        }
    }

    console.log(car)
    console.log(automotive)

    return(
        // Tampilkan data
        <>
            <ul className="w-1/2 mx-auto py-12 my-12 border">
                <h2>Data Nama:</h2>
                {automotive.map((automobile,index) => (// automobile adalah alias dan kenapa tdk bisa di panggil karena masih menggunakan name
                    <li key={index}>{automobile.car}</li>
                ))}
            </ul>

            {/* //Bikin form */}
            <div className="w-1/2 mx-auto py-12 my-12 border">
                <h1>Masukan Nama Anda!</h1>
                <form onSubmit={handleSubmit}>
                    <input value={car} onChange={handleChange} type="car" className="border"/>
                    <br />
                    <button type="submit" className="border">Kirim</button>
                </form>
            </div>
        </>   

    );




    // let angka =0;
    // const [angka,setAngka] = useState(0) // steAngka = setter function

    // function incClick() {
    //     // angka= angka + 1
    //     setAngka(angka + 1) // setAngka ngirim hasil ke angka yang di atas
    //     // console.log(angka);
    // }
    // function decClick() {
    //     // angka= angka - 1
    //     setAngka(angka - 1)   
    // }

    //ubah jadi arrow function lalu tulis di dalam onclick 
    
    // return(
    //     <div className="w-1/2 mx-auto">
    //         <p>Angka: {angka}</p>
    //         <button onClick={() => setAngka(angka + 1)} className="py-3 px-5 bg-rose-300"> {/* arrow function */}
    //             increment
    //         </button>
    //         <button onClick={() => setAngka(angka - 1)} className="py-3 px-5 bg-rose-300">
    //             decrement
    //         </button>
    //     </div>
    // );

}

export default Home;
// export {Header, Main, Footer}