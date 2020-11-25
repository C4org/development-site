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
      <div className="page first-page cover">
        <div className="align-self-center alsign-middle">
          <p>
            Combating Childhood Cancer Club
            <br></br> est. September 2018
          </p>
        </div>
        <div className="justify-content-center">
          <CountDiv></CountDiv>
        </div>
      </div>
      <div className="page">
        <div >
          <p className="align-self-center">
            Our mission is to support young cancer patients and boost their
            morale through their battle against cancer.
          </p>
        </div>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-duration="800"
        >
          <p> Image placeholder</p>
          <AniLink cover direction="right" to="/about/club" bg="#12447D">
            Learn more about C4 here
          </AniLink>
        </div>
      </div>

      <div className="page">
        <div >
          <p className="align-self-center">Instagram</p>
        </div>
        <div id="instafeed">
        </div>
      </div>
    </div>
  )
}
