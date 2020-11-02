/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Link } from "gatsby"
import StyledNavbar from "../components/styledNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollSnap from "scroll-snap"
import "../styles/styles.css"

function callback() {
  console.log("snapped")
}

class App extends React.Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "92vh",
      threshold: 0.01,
      timeout: 0,
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div>
        <StyledNavbar></StyledNavbar>
        <div id="container" ref={this.container}>
          <div className="page first-page">
            <div>I</div>
            <div className="hint">scroll down</div>
          </div>
          <div className="page second-page">
            <div>II</div>
          </div>
          <div className="page third-page">
            <div>III</div>
          </div>
          <div className="page fourth-page">
            <div>IV</div>
            <div className="hint">scroll up</div>
          </div>
          <div className="page fifth-page">
            <div>V</div>
            <div className="hint">scroll up</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
