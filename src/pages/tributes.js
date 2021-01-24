import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import port from "../images/port1.jpg"
import bg from "../images/bg.jpg"
import Card from "../components/tribute-card"
import Layout from "../components/layout"
const IndexPage = () => {
  const query = graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              excerpt
              title
              author
              rank
            }
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  return (
    <Layout>
      <main className="flex flex-col justify-center p-2 md:p-24">
        <div className="flex justify-center">
          <figure>
            <img className="h-24 w-24 rounded-full" src={port} />
            <figcaption>Elizabeth ilo</figcaption>
          </figure>
        </div>
        <h4 className="text-center normal-style text-4xl">
          Tributes and Condolences
        </h4>
        <section className="flex flex-wrap w-full justify-around">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="w-full md:w-1/3 p-4">
              <Card title={node.frontmatter.title} slug={node.frontmatter.slug} 
              excerpt={node.frontmatter.excerpt} rank={node.frontmatter.rank}
              author={node.frontmatter.author}/>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}
export default IndexPage
