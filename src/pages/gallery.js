import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./gallery.css"
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
const Gallery = () => {
  const query = graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  return (
    <Layout>
      <section id="photos" className="w-full text-center p-24">
        {data.allFile.edges.map(obj => {
          return <img className="p-2 transition-transform transform duration-500 ease-in-out hover:scale-110" src={obj.node.childImageSharp.fluid.src} width={getRandomSize(200, 400)} height={getRandomSize(200, 400)}/>
        })}
      </section>
    </Layout>
  )
}

export default Gallery
