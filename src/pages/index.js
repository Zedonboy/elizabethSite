import React from "react"
import { Link } from "gatsby"

import bg from "../images/bg.jpg"
const IndexPage = () => (
  <>
    <section className="w-full h-full relative">
      <div className="w-full h-full">
        <img className="m-0 object-cover w-full h-screen" src={bg} />
      </div>
      <div className="absolute flex flex-wrap left-0 top-0 w-full h-full bg-opacity-60 bg-black">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <nav className="p-8 rounded-xl border-solid border-2 border-yellow-500 bg-black w-40 h-40">
            <ul className="text-white m-0">
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="/gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="/tributes"
                >
                  Tributes
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/3"></div>
        <div className="w-full md:w-1/3 flex p-1 justify-center sm:items-center">
          <div className="w-full p-4 h-1/2 text-gray-200 overflow-hidden">
            <h4 className="text-center calligraphy text-2xl">Our Mother</h4>
            <p className="text-center font-thin text-xl normal-style">
              Aliqua ex incididunt aliquip incididunt. Ut anim qui do sint. Ex
              Lorem incididunt qui elit consequat velit ex deserunt mollit ad.
              Pariatur aliquip ea elit ut et anim ullamco. Sunt ut id ullamco
              dolor. Excepteur reprehenderit fugiat sit ex consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-center">
        <h4 className="text-6xl m-2 normal-style text-gray-200">Elizabeth ilo</h4>
        <h4 className="text-base normal-style text-gray-200">Age 90</h4>
      </div>
    </section>
  </>
)

export default IndexPage
