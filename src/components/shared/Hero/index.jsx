export default function Hero (){
    return (
        <section>
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pt-5">Our Company</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="mt-4 text-gray-700 pb-5" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Learn More!</button>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
          className="rounded "
          alt=""
        />
      </div>
    </div>
  </div>
</section>
        
    )
}