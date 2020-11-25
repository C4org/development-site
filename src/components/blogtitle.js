import React from "react"
import { Link } from "gatsby"
import "../styles/styles.css"

export default function Title({ children }, props) {
  return (
    <div className="container">
      <div className="inline">
        <hr></hr>
      </div>
      <div className="inline">{children}</div>
      <div className="inline">
        <hr></hr>
      </div>
    </div>
  )
}
