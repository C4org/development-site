import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogCard from "./BlogCard"

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
    <div className="flex flex-col pt-nav">
        {posts.map(({ node: post }) => (
          <BlogCard postId={post.id} postSlug={post.fields.slug} postTitle={post.frontmatter.title} postExcerpt={post.excerpt} author={"Kandasamy Chokkalingam"} category={"Testing"}/>
        ))}
    </div>
  )
}

