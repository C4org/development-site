import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import StyledNavbar from "./styledNavbar"
import "../styles/styles.css"
import { MDXProvider, MDXRenderer } from "@mdx-js/react"
import Title from "./blogtitle.js"

const shortcodes = { Row, Col, Container }

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function BaseLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter
  return (
    <Container className="" style={{ padding: 0 }}>
      <StyledNavbar></StyledNavbar>
      <MDXProvider components={shortcodes}></MDXProvider>
      <Container>
        <Title>{title}</Title>
        <Container style={{ position: "inherit" }}>{children}</Container>
      </Container>
    </Container>
  )
}
