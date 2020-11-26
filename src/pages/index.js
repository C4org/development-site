/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import CountDiv from "../components/countDiv.js"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typewriter from "typewriter-effect"



export default function App() {
  
  return (
    <div className="container main-container pt-0 mx-auto">
      <Navbar></Navbar>
      <div className="page first-page cover">
        <div className="align-self-center align-middle w-64">
          <Typewriter
            options={{
              cursor:""
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Combating Childhood Cancer Club')
              .start()
            }}
          />
        </div>
      </div>
      <div className="page">
        <CountDiv>
        </CountDiv>
      </div>

      <div className="page">
        About the Club
      </div>
      <div className="page">
        Values and Goals
      </div>
      <div className="page">
        Orgs we support
      </div>
      <div className="page">
        History
      </div>
      <div className="page">
        Team
      </div>
    </div>
  )
}
