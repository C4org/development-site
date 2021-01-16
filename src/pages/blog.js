/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import Index from "../components/Index"

export default function App() {
  return (
    <div className="container pt-nav mx-auto">
      <Navbar></Navbar>
      <div className="container pt-3">
        <div className="mx-auto text-4xl font-display text-bold text-center pb-2">
          Blog Posts
        </div>
        <div className="mx-auto text-base font-serif text-left">
          Find our Blog posts below
        </div>
        <Index />
      </div>
    </div>
  )
}
