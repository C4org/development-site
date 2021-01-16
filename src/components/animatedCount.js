import React from "react"
import { useEffect } from "react"
import { useCountUp } from "react-countup"

export default function AnimatedCount(props) {
  const { countUp, start } = useCountUp({
    start: 0,
    end: props.countEnd,
    delay: 100000000,
    duration: props.countDuration,
  })
  useEffect(() => {
    // Update the document title using the browser API
    document.addEventListener("sal:in", ({ detail }) => {
      console.log("exiting", detail.target)
      setTimeout(() => {start()},800+400)
    })
  })
  return <p>{props.prefix}{countUp}{" "}{props.unit}</p>
}
