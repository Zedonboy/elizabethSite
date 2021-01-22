import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bg from "../gallery/bg3.png"
import SimpCard from "../components/SimpCard"
const IndexPage = () => (
  <Layout>
    <main className="flex flex-wrap text-purple-900 mt-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={bg} />
      </div>
      <div className="w-full md:w-1/2 p-12">
        <h1 className="text-center font-bold calligraphy">
          EXIT OF A GREAT WOMAN
        </h1>
        <p className="text-center font-thin text-xl">
          (OFFICE - THE CANDLE LIGHTER)
        </p>
        <p className="text-center normal-style font-bold text-xl">
          (1938 - 2021)
        </p>
        <p className="normal-style text-center">
          It is with sadness , but profound gratitude and total submission to
          the will of God that we announce the passing on to Glory of our wife,
          mother, grandmother, sister, friend and mentor
        </p>
        <p className="m-0 font-bold text-2xl text-green-500 text-center">
          Madam Elizabeth Mgbechikwelu ILO
        </p>
        <p className="font-thin text-sm text-green-500 text-center">
          (NEE Obiajulu)
        </p>
        <p className="text-sm text-center">
          Who went to be with our lord on Monday, January 11th 2021. Join us to
          celebrate our unique memories and moments on
        </p>
        <SimpCard heading="Funeral Mass" answer="St. Peter's catholic church Oko, Orumba North LGA , Anambra State."/>
      </div>
    </main>
  </Layout>
)

export default IndexPage
