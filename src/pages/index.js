import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bg from "../gallery/bg.png"
import candle from "../images/candle.png"
import song from "../assets/music/2.mp3"
import SimpCard from "../components/SimpCard"
const IndexPage = () => (
  <Layout>
    <audio src={song} autoPlay={true} ></audio>
    <main className="flex flex-wrap text-purple-900 mt-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={bg} />
      </div>
      <div className="w-full md:w-1/2 p-12">
        <h1 className="text-center font-bold normal-style">
          EX<i><img className="inline candle" src={candle}/></i>T OF A GREAT WOMAN
        </h1>
        <p className="text-center font-thin text-sm md:text-xl">
          OFFICE - THE CANDLE LIGHTER
        </p>
        <p className="text-center normal-style font-bold text-xl">
          (1938 - 2021)
        </p>
        <p className="normal-style text-center">
          It is with sadness , but profound gratitude and total submission to
          the will of God that we announce the passing on to Glory of our wife,
          mother, grandmother, sister, friend, niece, aunty and mentor
        </p>
        <p className="m-0 font-bold text-2xl text-green-500 text-center">
          Madam Elizabeth Mgbechikwelu ILO
        </p>
        <p className="font-thin text-sm text-green-500 text-center">
          NEE Obiajulu
        </p>
        <p className="text-sm text-center">
          Who went to be with our lord on Monday 11th January 2021. Please join us to celebrate her unique memories and moments  as follows
        </p>
        <SimpCard heading="Vigil Date" answer="5pm Wednesday 17th March, 2021 by His Lordship Most Rev Dr. Paulinues Ezeokafor Catholic Bishop of Akwa diocese"/>
        <SimpCard heading="Vigil Venue" answer="chief Francis ilo's compound Ezioko village Oko"/>

        <SimpCard heading="Funeral Date" answer="10am Thursday 18th March, 2021 by His lordship Most Rev Dr. Okpalaeke,catholic Bishop of Ekwulobia Diocese"/>
        <SimpCard heading="Funeral Mass Venue" answer="St. Peter's catholic church Oko, Orumba North LGA , Anambra State."/>
        <SimpCard heading="Interment Venue" answer="In her husband's compound"/>
        
      </div>
    </main>
  </Layout>
)

export default IndexPage
