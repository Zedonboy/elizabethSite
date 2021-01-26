import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import port from "../images/port.jpeg"

const SecondPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <main>
        <div className="hidden md:block absolute mt-5 mr-5 flex flex-col top-0 right-0">
          <figure className="h-24 w-24">
            <img className="rounded-full" src={port} />
          </figure>
          <p>Elizabeth ilo</p>
        </div>

        <section className="w-full text-center mt-5 p-4 md:p-24 bg-yello-100">
          <h4 className="text-2xl normal-style md:text-4xl">
            {frontmatter.title}
          </h4>
          <p className="text-center normal-style text-sm">{frontmatter.date}</p>
          <div
            className="tribute-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </section>
      </main>
    </Layout>
  )
}
export default SecondPage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        excerpt
      }
    }
  }
`
