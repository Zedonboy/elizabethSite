/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <section className="w-full h-full relative bg-yellow-100">
      <nav className="bg-transparent max-h-24 flex w-full">
        <div className="w-full md:w-1/3 bg-black border-r-4 border-l-4 border-b-4 border-solid border-yellow-500 h-16 rounded-b-lg ">
          <ul className="m-0 flex justify-center items-center p-4 text-white  w-full">
            <li>
              <a
                className="border-b-2 p-4 border-transparent hover:border-yellow-500"
                href="/"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="border-b-2 p-4 border-transparent hover:border-yellow-500"
                href="/gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="border-b-2 p-4 border-transparent hover:border-yellow-500"
                href="/tributes"
              >
                Tributes
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
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
