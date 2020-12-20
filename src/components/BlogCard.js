/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import "../styles/styles.css"
import { Link } from "gatsby"

export default function BlogCard(props) {
  return (
    <div className="container rounded-2xl shadow-2xl my-3 mx-auto p-4 bg-CBlue transition transform hover:-translate-y-2" key={props.postId}>
      <Link to={props.postSlug}>
        <p className="text-base text-CGold">By {props.author} in {props.category}</p>
        <h2 className="font-display font-medium text-xl text-CGold">{props.postTitle}</h2>
        <p className="text-base text-CGold">{props.postExcerpt}</p>
      </Link>
      
    </div>
  )
}
