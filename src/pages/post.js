import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import port from "../images/port.jpeg"

const SecondPage = () => (
  <Layout>
    <main>
      <div className="hidden md:block absolute mt-5 mr-5 flex flex-col top-0 right-0">
        <figure className="h-24 w-24">
          <img className="rounded-full" src={port} />
        </figure>
        <p>Elizabeth ilo</p>
      </div>

      <section className="w-full text-center p-2 md:p-24 bg-yello-100">
        <h4 className="calligraphy text-7xl">Our Mother</h4>
        <p className="text-2xl norrmal-style">
          Dolore ut dolore cupidatat do ex quis consectetur est sunt cupidatat
          id. Laborum incididunt officia ipsum ea ut enim elit exercitation et
          deserunt sit. Sunt qui exercitation reprehenderit Lorem dolore aute
          officia sint. Ullamco eu id minim pariatur cillum id Lorem anim duis
          pariatur dolore anim. Incididunt elit amet nisi enim pariatur laboris
          adipisicing. Irure sint cupidatat labore reprehenderit. Veniam officia
          elit incididunt ullamco minim in ex ut. Fugiat culpa ad est esse
          dolore et ullamco proident qui nulla non in fugiat tempor. Laborum in
          labore ad Lorem in proident do culpa in mollit eu. Ea et eu cillum ex
          incididunt proident ad officia qui ex ad elit. Pariatur ipsum dolore
          est cillum occaecat tempor duis Lorem eiusmod minim. Ex ipsum
          incididunt ex reprehenderit ullamco fugiat cillum. Nisi cupidatat
          officia ipsum dolor dolore esse. Sint duis in esse ut minim eu ad ut
          ex officia dolore. Proident deserunt eu culpa sint dolor pariatur
          exercitation. Ullamco ea non amet id ut incididunt quis deserunt. Sint
          qui ex proident amet culpa irure ullamco occaecat exercitation sunt
          occaecat. Quis exercitation ipsum proident esse reprehenderit. Duis
          duis esse aute fugiat. Nostrud officia sint fugiat deserunt irure.
          Velit officia sint officia laboris Lorem. Velit est aliquip ipsum ex
          occaecat esse proident sunt. Ullamco labore cillum exercitation
          dolore. Minim irure cupidatat quis exercitation sit ut labore do elit
          Lorem nisi sint. Proident magna ullamco non eu in cillum proident non
          ad. Aliquip tempor mollit elit dolore laboris ex amet velit occaecat
          in ullamco est occaecat tempor. Culpa sint anim laborum consequat
          commodo nostrud. Velit qui est deserunt ullamco. Fugiat veniam labore
          nisi magna cillum magna cupidatat qui est Lorem nisi. Ipsum magna
          excepteur ullamco non eiusmod incididunt duis exercitation nisi dolor
          quis veniam. Deserunt exercitation elit ullamco anim.
        </p>
      </section>
    </main>
  </Layout>
)

export default SecondPage
