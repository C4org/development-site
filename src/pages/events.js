/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/styles.css"

export default function App() {
  return (
    <div className="container main-container h-screen mx-auto font-serif debug-screens">
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage pb-nav md:flex-row">
        
      </div>
      <Footer></Footer>
    </div>
  )
}
