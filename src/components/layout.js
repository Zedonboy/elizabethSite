/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import song from "../assets/music/credo.mp3"
const Layout = ({ children }) => {
  
  return (
    <>
      <section className="w-full h-full relative bg-pink-100">
      <audio src={song} autoPlay={true} ></audio>
      <nav className="bg-transparent max-h-24 flex w-full">
        <div className="w-full flex-shrink-0 md:w-2/3 bg-black border-r-4 border-l-4 border-b-4 border-solid border-yellow-500 h-16 rounded-b-lg ">
          <ul className="m-0 overflow-x-auto flex normal-style p-4 text-white  w-full">
            <li>
              <a
                className="border-b-2 p-4 text-sm border-transparent hover:border-yellow-500"
                href="/"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="border-b-2 p-4 text-sm border-transparent hover:border-yellow-500"
                href="/gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="border-b-2 p-4 text-sm border-transparent hover:border-yellow-500"
                href="/schedule"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                className="border-b-2 p-4 text-sm border-transparent hover:border-yellow-500"
                href="/tributes"
              >
                Tributes
              </a>
            </li>
            <li>
              <a
                className="border-b-2 text-sm p-4 border-transparent hover:border-yellow-500"
                href="/biography"
              >
                Biography
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="p-2 flex justify-center items-center">
        <span> Designed by <a className="text-green-500 text-base" href="https://twitter.com/dtc_inc">DecTek</a></span>
      </footer>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
