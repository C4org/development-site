/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import StyledNavbar from "../components/styledNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.css"
import { Row, Col, Container, Button } from "react-bootstrap"
import ReactFullpage from "@fullpage/react-fullpage"
import CountDiv from "../components/countDiv.js"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SEL = "custom-section"
const SECTION_SEL = `.${SEL}`
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      fullpages: [
        {
          text: (
            <Row className="page first-page cover">
              <Col md="9" className="align-self-center alsign-middle">
                <p>
                  Combating Childhood Cancer Club
                  <br></br> est. September 2018
                </p>
              </Col>
              <Col md="3" className="justify-content-center">
                <CountDiv></CountDiv>
              </Col>
            </Row>
          ),
        },
        {
          text: (
            <Row className="page">
              <Col md="6">
                <p className="align-self-center">
                  Our mission is to support young cancer patients and boost
                  their morale through their battle against cancer.
                </p>
              </Col>
              <Col
                md="6"
                data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="800"
              >
                <p> Image placeholder</p>
                <AniLink cover direction="right" to="/about/club" bg="#12447D">Learn more about C4 here</AniLink>
              </Col>
            </Row>
          ),
        },
        {
          text: (
            <Row className="page">
                <Col md="6">
                <p className="align-self-center">
                  Instagram
                </p>
              </Col>
              <Col
                md="6"
                id="instafeed"
              >
                <Button onClick={this.handleClick}>Hi</Button>
              </Col>
            </Row>
          ),
        },
      ],
    }
  }

  handleClick(){
    alert("Hello")
  }

  render() {
    const { fullpages } = this.state

    if (!fullpages.length) {
      return null
    }

    return (
      <div className="App">
        <StyledNavbar></StyledNavbar>
        <ReactFullpage
          /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["cover", "mission", "thirdPage"]}
          sectionSelector={SECTION_SEL}
          sectionsColor={this.state.sectionsColor}
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <Container>{text}</Container>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    )
  }
}

export default App
