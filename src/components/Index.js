import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Index() {
  const pageQuery = useStaticQuery(graphql`
    query blogIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges: posts } = pageQuery.allMdx
  return (
    <div>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

