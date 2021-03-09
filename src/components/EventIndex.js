import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import EventCard from "./EventCard"

export default function EventIndex() {
  const pageQuery = useStaticQuery(graphql`
    query eventIndex {
      allMdx(filter: {fields: {type: {eq: "events"}}}) {
        edges {
          node {
            id
            frontmatter {
              name
              time
              date
              host
              description
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
    <div className="flex w-full flex-row flex-wrap justify-center pt-10 ">
        {posts.map(({ node: event }) => (
          <EventCard eventId={event.id} eventSlug={event.fields.slug} eventName={event.frontmatter.name} date={event.frontmatter.date} time={event.frontmatter.time} host={event.frontmatter.host} description={event.frontmatter.description}/>
        ))}
    </div>
  )
}

