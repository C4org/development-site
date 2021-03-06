import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Navbar from './Navbar'
import Footer from './Footer'
import Title from './blogtitle'
import { Link } from "gatsby"
import "../styles/styles.css"
import SEO from "./seo"

const MyH2 = props => <h2 className="px-2 py-1 rounded-xl bg-CBlue text-CGold my-4" style={{ fontFamily: "Barlow", fontSize: "1.5rem", textAlign: "left" }} {...props} />
const MyH3 = props => <h3 className="px-2 py-1 rounded-xl bg-CBlue text-CGold my-2" style={{ fontFamily: "Barlow", fontSize: "1.25rem", textAlign: "left", width: "50%" }} {...props} />
const MyA = props => <a className="text-CGold font-display font-medium hover:text-CGray" {...props} />
const MyOl = props => <ol className="list-disc list-inside" {...props} />
const MyUl = props => <ul className="list-disc list-inside" {...props} />

const shortcodes = { 
  h2: MyH2,
  h3: MyH3,
  a: MyA,
  ol: MyOl,
  ul: MyUl,
 } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div className="max-w-screen min-h-screen" style={{ padding: 0 }}>
      <SEO title={mdx.frontmatter.title} article={true}></SEO>
      <Navbar></Navbar>
      <div className="container py-nav mx-auto">
        <Title title={mdx.frontmatter.title}></Title>
        <MDXProvider components={shortcodes}>
          <div className="container mb-3" style={{ position: "inherit" }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </MDXProvider>
      </div>
      <Footer></Footer>
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
