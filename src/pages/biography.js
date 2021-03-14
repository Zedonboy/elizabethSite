import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import song from "../assets/music/1.mp3"
import port from "../images/port1.jpg"
const BiograpgyPage = ({ data }) => {
  let pageData = data.allFile.edges[0].node.childMarkdownRemark
  return (
    <Layout>
      <audio src={song} autoPlay={true} ></audio>
      <main className="flex flex-col text-purple-900 mt-4 justify-center">
        <div className="flex justify-center">
          <div className="frame w-48 h-48 p-2">
            <img className="object-fill" src={port} />
          </div>
        </div>
        <p className="m-0 calligraphy text-center mt-4 text-3xl">
          Madam Elizabeth llo
        </p>
        <p className="normal-style text-center font-bold text-sm">Age 83</p>
        <article
          className="p-2 md:p-24 tribute-content"
          dangerouslySetInnerHTML={{
            __html: pageData.html,
          }}
        ></article>
      </main>
    </Layout>
  )
}

export default BiograpgyPage

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blogdata" } }) {
      edges {
        node {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
