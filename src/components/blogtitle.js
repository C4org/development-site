import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import "../styles/styles.css"

export default function Title({ children }, props) {
  return (
    <Row>
      <Col>
        <hr></hr>
      </Col>
      <Col md="auto">{children}</Col>
      <Col>
        <hr></hr>
      </Col>
    </Row>
  )
}
