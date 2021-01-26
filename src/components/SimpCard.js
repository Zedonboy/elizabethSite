import React from "react"

const SimpCard = ({heading, answer}) => (
  <article className="m-2 w-full bg-white shadow rounded p-2">
    <a href="/schedule">
<h4 className="font-bold normal-style">{heading}</h4>
<hr/>
      <p className="font-thin text-base text-green-600">
        {answer}
      </p>
    </a>
  </article>
)

export default SimpCard
