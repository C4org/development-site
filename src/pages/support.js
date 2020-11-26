/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import CountDiv from "../components/countDiv.js"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function App() {
  return (
    <div className="container pt-0 mx-auto">
      <Navbar></Navbar>
    </div>
  )
}
