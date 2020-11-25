import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CountUp from "react-countup"

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
    <div className="flex flex-col align-self-center align-middle">
      <div className="flex flex-row" id="countUp1">
        <p>
          <CountUp
            end={data.site.siteMetadata.numberOfChapters}
            duration={3}
            delay={delay}
          />
          {" "}Chapters
        </p>
      </div>
      <div className="flex flex-row" id="countUp2">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfMembers} duration={3} delay={delay} /> Members
        </p>
      </div>
      <div className="flex flex-row" id="countUp3">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfYears} duration={3} delay={delay} /> Years
        </p>
      </div>
      <div className="flex flex-row" id="countUp4">
        <p>
          <CountUp end={data.site.siteMetadata.numberOfDollars} delay={delay} prefix="$" /> Raised
        </p>
      </div>
    </div>
  )
}
