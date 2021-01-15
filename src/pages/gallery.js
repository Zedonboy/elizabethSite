import React from 'react'

const Gallery = () => (
    <main>
    <nav className="absolute top-0 bg-transparent max-h-24 flex w-full">
      <div className="w-full md:w-1/3 bg-black border-r-4 border-l-4 border-b-4 border-solid border-yellow-500 h-16 rounded-b-lg ">
        <ul className="m-0 flex justify-center items-center p-4 text-white  w-full">
          <li>
            <a
              className="border-b-2 p-4 border-transparent hover:border-yellow-500"
              href="javascript:void()"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="border-b-2 p-4 border-transparent hover:border-yellow-500"
              href="javascript:void()"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="border-b-2 p-4 border-transparent hover:border-yellow-500"
              href="javascript:void()"
            >
              Tributes
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden w-1/3"></div>
      <div className="md:hidden w-1/3"></div>
    </nav>
    <section className="w-full text-center p-24 bg-yello-100">
      <h4>No Photos</h4>
    </section>
  </main>
)

export default Gallery