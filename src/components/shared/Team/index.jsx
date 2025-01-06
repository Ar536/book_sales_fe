const people = [
    {
        name: "Ariq",
        role: "Frontend Developer",
        imageUrl:"https://img.merahputih.com/media/0b/70/0b/0b700beae4a04f1bc029d4124663c31e.jpeg"
    },
    {
        name: "dadaqi",
        role: "Backend Developer",
        imageUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/493.png"
    },
    {
        name: "qoiqlask",
        role: "UIUX Designer",
        imageUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe494071721497.5bd63947c7095.jpg"
    }
   
]


export default function Team (){
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* .flex.flex-wrap.-m-2>.p-2.lg:w-1/3.md:w-1/2.w-full>.h-full.flex.items-center.border-gray-200.border.p-4.rounded-lg */}
                <div className="flex flex-wrap -m-2">
                    {people.map((person)=> (
                        <div key={person.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img src={person.imageUrl} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font-medium">{person.name}</h2>
                                    <p className="text-gray-500">{person.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>  
        
    )
}