import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"
import "../styles/styles.css"
import Title from "./blogtitle.js"


export default function BaseLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter
  return (
    <div className="container" style={{ padding: 0 }}>
      <Navbar></Navbar>
      <div className="container">
        <Title>{title}</Title>
        <div className="container" style={{ position: "inherit" }}>{children}</div>
      </div>
    </div>
  )
}
