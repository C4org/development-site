import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnimatedCount from "./animatedCount"

export default function CountDiv() {
  const delay = 1
  const data = useStaticQuery(graphql`
    query countQuery {
      site {
        siteMetadata {
          numberOfChapters
          numberOfMembers
          numberOfYears
          numberOfDollars
        }
      }
    }
  `)
  return (
    <div data-sal="slide-left" data-sal-delay="300" data-sal-duration="800" className="flex flex-col align-self-center align-middle">
      <AnimatedCount
        countEnd={data.site.siteMetadata.numberOfChapters}
        countDuration={3}
        countDelay={delay}
        prefix={""}
        unit={"Chapters"}
      />
      <AnimatedCount
        countEnd={data.site.siteMetadata.numberOfMembers}
        countDuration={3}
        countDelay={delay}
        prefix={""}
        unit={"Members"}
      />
      <AnimatedCount
        countEnd={data.site.siteMetadata.numberOfYears}
        countDuration={3}
        countDelay={delay}
        prefix={""}
        unit={"Years"}
      />
      <AnimatedCount
        countEnd={data.site.siteMetadata.numberOfDollars}
        countDuration={3}
        countDelay={delay}
        prefix={"$"}
        unit={"Raised"}
      />
    </div>
  )
}
