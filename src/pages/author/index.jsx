import { useRef } from "react";
import authors from "../../utils/constants/authors"

export default function Author() {
    let authorList =[...authors]; // salin data array constants/authors
    const authorContainerRef = useRef(null); //membuat container author

    const handleclick = () => {
        const newAuthor = {
            name: "john doe",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VGM9vn6zR5W3FupeI1egl9EYJImwbs1QvQ&s",
            bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, reiciendis?"
        }
        authorList.push(newAuthor);

        if (authorContainerRef.current){
            const newAuthorElement = document.createElement("div");
            newAuthorElement.className ="p-2 lg:w-1/4 md:w-1/2 w-full"
            newAuthorElement.innerHTML = `
                <img src = "${newAuthor.imageUrl}" />
                <h2>${newAuthor.name}</h2>
                <p>${newAuthor.bio}</p>

                
            `;
            authorContainerRef.current.appendChild(newAuthorElement);
        } 

        console.log(authorList);
        alert("Data berhasil ditambahkan")
    }



    // function handleScroll(){} ini sama kaya yang handleclick

  return (
    <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* .flex.flex-wrap.-m-2>.p-2.lg:w-1/3.md:w-1/2.w-full>.h-full.flex.items-center.border-gray-200.border.p-4.rounded-lg */}
                <div ref={authorContainerRef} className="flex flex-wrap -m-2">
                    {authorList.map((author, index)=> ( // pembuka, key buat unik kaya person.name
                        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img src={author.imageUrl} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font-medium">{author.name}</h2>
                                    <p className="text-gray-500">{author.bio}</p>
                                </div>
                             </div>  {/*penutup  */}
                        </div>
                    ))} 
                </div>

                <button onClick={handleclick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            </div>
        </section>  
  )
}
