import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import port from "../images/port.jpeg"
const BiograpgyPage = () => (
  <Layout>
    <main className="flex flex-col text-purple-900 mt-4 justify-center">
      <div className="flex justify-center">
        <div className="frame w-48 h-48 p-2">
          <img className="object-fill" src={port} />
        </div>
      </div>
      <p className="m-0 calligraphy text-center mt-4 text-3xl">Elizaeth Ilo</p>
      <p className="normal-style text-center font-bold text-sm">Age 90</p>
      <article className="p-2 md:p-24">
        <h4 className="calligraphy text-center text-3xl">Our Mother</h4>
        <p className="text-center normal-style text-base font-light">
          Nisi aute Lorem enim fugiat tempor irure veniam magna qui proident
          mollit consectetur commodo. Ipsum exercitation ad incididunt proident.
          Dolore esse eu eu ex incididunt occaecat eiusmod laborum elit non
          consectetur Lorem sint aute. Quis aute ipsum enim velit consequat nisi
          non quis velit. Aliquip incididunt et quis ipsum excepteur irure ad
          nulla mollit. Ad ullamco veniam sunt ullamco reprehenderit sint dolor
          consequat fugiat laborum quis. Exercitation exercitation esse
          incididunt elit est enim sit excepteur. Ea quis anim amet sint nisi
          sint ullamco reprehenderit proident esse in ullamco veniam. Est aliqua
          reprehenderit minim aliquip amet ullamco commodo. Dolor mollit veniam
          sit id excepteur laborum pariatur pariatur dolor laboris pariatur aute
          nisi eu. Id aliqua ad sit qui sunt mollit mollit irure duis est.
          Eiusmod ipsum aliquip irure ut labore voluptate aute dolore mollit
          nulla sit. Aute duis in pariatur duis ex. Eiusmod sunt esse non
          excepteur pariatur sint nulla. Officia officia fugiat velit consequat
          laboris tempor pariatur sint nulla. Nisi ad anim excepteur ex ullamco
          quis proident culpa cupidatat elit anim nulla. Minim enim sit mollit
          irure. Ut irure amet pariatur aute aliqua cillum. Eiusmod minim ex
          adipisicing officia. Dolor commodo laborum pariatur tempor. Quis
          laborum eu proident anim minim enim sunt enim commodo consequat
          pariatur ut. Magna magna culpa mollit exercitation irure. Eiusmod
          laboris occaecat dolor est non do anim fugiat Lorem reprehenderit elit
          non commodo. Do sit qui voluptate aliquip sint eiusmod. Amet in
          cupidatat incididunt dolore cillum anim reprehenderit in excepteur. Id
          amet do excepteur veniam nisi mollit quis. Qui pariatur qui consequat
          nisi elit dolore culpa id labore consequat quis magna cupidatat.
          Cillum pariatur do aliquip amet culpa commodo elit cupidatat officia
          consectetur exercitation est dolor mollit. Amet sunt est eiusmod eu
          tempor consequat nostrud culpa enim. Exercitation commodo proident ex
          sint elit. Eiusmod officia adipisicing sunt incididunt velit occaecat
          magna aliqua ipsum et commodo laborum cillum.
        </p>
      </article>
    </main>
  </Layout>
)

export default BiograpgyPage
