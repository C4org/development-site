import React from "react"

export default function Title(props) {
  return (
    <div className="flex flex-col pt-6 pb-4">
      <div className="container flex flex-row">
        <div className="flex flex-row flex-grow inline">
          <hr className="my-auto border-CBlue border-1 w-full"></hr>
        </div>
        <div className="flex flex-row flex-grow-0 inline font-display text-3xl px-4">
          {props.title}
        </div>
        <div className="flex flex-row flex-grow inline">
          <hr className="my-auto border-CBlue border-1 w-full"></hr>
        </div>
      </div>
    </div>
  )
}
