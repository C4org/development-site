/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import StyledNavbar from "../components/styledNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.css"
import { Row, Col, Container, Button } from "react-bootstrap"

const FullpageWrapper = fullpageProps => (
  <Container>
    <StyledNavbar></StyledNavbar>
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state) // eslint-disable-line no-console

        if (state.callback === "onLeave") {
          if (state.direction === "down") {
            console.log("going down..." + state.origin.index)
          }
        }
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <h3>Section 1</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Move down
              </button>
            </div>
            <div className="section">
              
            </div>
            <div className="section">
              <h3>Section 3</h3>
            </div>
          </div>
        )
      }}
    />
  </Container>
)

export default FullpageWrapper
