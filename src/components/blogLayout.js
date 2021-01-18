import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Navbar from './Navbar'
import Title from './blogtitle'
import { Link } from "gatsby"
import "../styles/styles.css"
import style from "../styles/blogs.module.css"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div className="max-w-screen" style={{ padding: 0 }}>
      <Navbar></Navbar>
      <div className="container pt-nav mx-auto">
        <Title title={mdx.frontmatter.title}></Title>
        <MDXProvider components={shortcodes}>
          <div className="container" style={{ position: "inherit" }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </MDXProvider>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date
      }
    }
  }
`
