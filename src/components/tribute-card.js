import React from "react"

const Card = ({ title, slug, excerpt, author, rank }) => (
  <article className="w-full bg-gray-200 shadow rounded p-4">
    <a href={slug}>
      <h4 className="text-center normal-style">{title}</h4>
      <p className="m-0 font-light normal-style text-base">{excerpt}</p>
    </a>
    <footer>
      <hr />
      <p className="m-0">By {author}</p>
      <p className="m-0 text-xs font-thin">{rank}</p>
    </footer>
  </article>
)

export default Card
