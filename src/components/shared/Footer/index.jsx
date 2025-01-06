export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-gray-800 text-white py-4">  {/* tdk pakai obj */}
            <p className="text-center">Copyright &copy; Ariq - {currentYear}</p>
        </footer> 
    )
}