/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import CountDiv from "../components/countDiv.js"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typist from "react-typist"



export default function App() {
  
  return (
    <div className="container main-container pt-0 mx-auto font-serif">
      <Navbar></Navbar>
      <div className="page first-page cover">
        <div className="align-self-center align-middle w-128">
          <Typist className="text-xl font-serif" cursor={{show:false}}>
            Combatting Childhood Cancer Club
          </Typist>
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
