import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"
import CountUp from "react-countup"

export default function CountDiv() {
  const delay = 1
  const data = useStaticQuery(graphql`
    query countQuery {
      site {
        siteMetadata {
          numberOfChapters
          numberOfMembers
          numberOfYears
          numberOfDollars
        }
      }
    }
  `)
  console.log(data)
  return (
    <Col className="align-self-center align-middle">
      <Row id="countUp1">
        <p>
          <CountUp
            end={data.site.siteMetadata.numberOfChapters}
            duration={3}
            delay={delay}
          />
          {" "}Chapters
        </p>
      </Row>
      <Row id="countUp2">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfMembers} duration={3} delay={delay} /> Members
        </p>
      </Row>
      <Row id="countUp3">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfYears} duration={3} delay={delay} /> Years
        </p>
      </Row>
      <Row id="countUp4">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfDollars} delay={delay} prefix="$" /> Raised
        </p>
      </Row>
    </Col>
  )
}
