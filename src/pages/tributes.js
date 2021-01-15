import React from "react"
import { Link } from "gatsby"

import bg from "../images/bg.jpg"
import Card from "../components/tribute-card"
const IndexPage = () => (
  <>
    <section className="w-full h-full relative">
      {/* <div className="w-full h-full">
        <img className="m-0 object-cover w-full h-screen" src={bg} />
      </div> */}
      <div className="bg-image flex flex-wrap left-0 top-0 w-full h-full bg-opacity-60 bg-black">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <nav className="p-8 rounded-xl border-solid border-2 border-yellow-500 bg-black w-40 h-40">
            <ul className="text-white m-0">
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="javascript:void()"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="javascript:void()"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="border-b-2 border-transparent hover:border-yellow-500"
                  href="javascript:void()"
                >
                  Tributes
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-2/3 flex p-16 overflow-auto flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
