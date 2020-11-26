import React from "react"

export default function Title({ children }, props) {
  return (
    <div className="container flex flex-row pt-3 pb-2">
      <div className="flex flex-row flex-grow inline">
        <hr className="my-auto border-CBlue border-1 w-full"></hr>
      </div>
      <div className="flex flex-row flex-grow-0 inline font-sans text-3xl px-4">
        {children}
      </div>
      <div className="flex flex-row flex-grow inline">
        <hr className="my-auto border-CBlue border-1 w-full"></hr>
      </div>
    </div>
  )
}
