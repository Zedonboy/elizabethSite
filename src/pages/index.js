import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bg from "../gallery/bg.png"
import candle from "../images/candle.png"
import song from "../assets/music/2.mp3"
import SimpCard from "../components/SimpCard"
const IndexPage = () => (
  <Layout>
    <audio src={song} autoPlay={true}></audio>
    <main className="flex flex-wrap text-purple-900 mt-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={bg} />
      </div>
      <div className="w-full md:w-1/2 p-12">
        <h1 className="text-center font-bold normal-style">
          EX
          <i>
            <img className="inline candle" src={candle} />
          </i>
          T OF A GREAT WOMAN
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
          Who went to be with our lord on Monday 11th January 2021. Please join
          us to celebrate her unique memories and moments as follows
        </p>

        <p className="text-4xl text-center">Appreciation</p>
        <p className="text-base text-center">
          Dear, we are sincerely elated to note that at this time of our. grief,
          on the loss of our beloved mother, and wife, that we have good friends
          whom through their prayers, advices, benevolences both financially and
          in all other positive ways have shown us immerse support. We are
          really blessed to be associated with your type of person. We lack
          words to appreciate your magnanimity. May our good Lord who knows how
          best to bless, replenish your pocket, bless your family and
          continually keep you in good health. Amen. The Burial and the
          accompanying ceremonies were a great success. Once more, we say a very
          big thank you.
        </p>
        <p className="text-2xl text-center">
        With gratitude, from all of us @ Chief francis ilo 🙇🏼‍🙏
        </p>
      </div>
    </main>
  </Layout>
)

export default IndexPage
