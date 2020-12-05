/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import "../styles/styles.css"
import { Link } from "gatsby"

export default function BlogCard(props) {
  return (
    <div className="container rounded-2xl shadow-xl my-3 mx-auto p-4 transition transform hover:-translate-y-1 hover:scale-110 ..." key={props.postId}>
      <Link to={props.postSlug}>
        <p className="text-base">By {props.author} in {props.category}</p>
        <h2 className="font-sans text-xl">{props.postTitle}</h2>
        <p>{props.postExcerpt}</p>
      </Link>
      
    </div>
  )
}
