import React from "react"
import { Link } from "gatsby"

import port from "../images/port.jpeg"
import bg from "../images/bg.jpg"
import Card from "../components/tribute-card"
import Layout from "../components/layout"
const IndexPage = () => (
  <Layout>
    <main className="flex flex-col justify-center p-2 md:p-24">
      <div className="flex justify-center">
        <figure>
          <img className="h-24 w-24 rounded-full" src={port} />
          <figcaption>Elizabeth ilo</figcaption>
        </figure>
      </div>
      <h4 className="text-center normal-style text-4xl">Tributes</h4>
      <section className="flex flex-wrap w-full justify-around">
        <div className="w-full md:w-1/3 p-4">
          <Card />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Card />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Card />
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
