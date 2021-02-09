import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import port from "../images/tribute.jpg"
import bg from "../images/bg.jpg"
import Card from "../components/tribute-card"
import Layout from "../components/layout"
const IndexPage = ({data}) => {
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
          {data.allFile.edges.map(({ node }) => (
            <div className="w-full md:w-1/3 p-4">
              <Card title={node.childMarkdownRemark.frontmatter.title} slug={node.childMarkdownRemark.frontmatter.slug} 
              excerpt={node.childMarkdownRemark.frontmatter.excerpt} rank={node.childMarkdownRemark.frontmatter.rank}
              author={node.childMarkdownRemark.frontmatter.author}/>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "markdowns"}}) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              slug
              excerpt
              author
              rank
              date
            }
          }
        }
      }
    }
  }
`