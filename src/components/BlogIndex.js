import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
              date
              author
              category
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
    <div className="flex flex-col-reverse pt-10">
        {posts.map(({ node: post }) => (
          <BlogCard postId={post.id} postSlug={post.fields.slug} postTitle={post.frontmatter.title} postDate={post.frontmatter.date} excerpt={post.excerpt} author={post.frontmatter.author} category={post.frontmatter.category}/>
        ))}
    </div>
  )
}

