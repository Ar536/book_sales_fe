import genres from "../../../utils/constants/genres";

export default function Genres() {
    

  return (
    <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Genres</h1>
                </div>

                {/* .flex.flex-wrap.-m-2>.p-2.lg:w-1/3.md:w-1/2.w-full>.h-full.flex.items-center.border-gray-200.border.p-4.rounded-lg */}
                <div className="flex flex-wrap -m-2">
                    {genres.map((genres, index)=> ( // pembuka, key buat unik kaya person.name
                        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font-medium">{genres.name}</h2>
                                    <p className="text-gray-500">{genres.description}</p>
                                </div>
                             </div>  {/*penutup  */}
                        </div>
                    ))} 
                </div>

            </div>
        </section>  
  )
}