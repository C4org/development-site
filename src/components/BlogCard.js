/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import "../styles/styles.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function BlogCard(props) {
  return (
    <AniLink className="my-3" paintDrip to={props.postSlug} hex="#d9b559" duration={.75}>
      <div className="container flex flex-row justify-evenly rounded-2xl shadow-2xl mx-auto p-4 bg-CBlue transition transform hover:-translate-y-2" key={props.postId}>
        <div className="flex flex-col text-center w-96">
        <p className="text-base font-display font-medium text-CGold">By {props.author} in {props.category}</p>
        <h2 className="font-serif font-medium text-xl text-center text-CGold">{props.postTitle}</h2>
        <p className="text-base font-display font-medium text-CGold">{props.postDate}</p>
        </div>
        <div className="hidden md:flex md:flex-col md:text-CGold md:font-medium">
          <p className="my-auto text-sm w-96 font-display ">
            {props.excerpt}
          </p>
        </div>
      </div>
    </AniLink>

  )
}
