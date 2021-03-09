/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import EventIndex from "../components/EventIndex"
import "../styles/styles.css"
import SEO from "../components/seo"

export default function App() {
  return (
    <div className="container main-container min-h-screen mx-auto font-serif debug-screens">
      <SEO title="Events"></SEO>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage">
        <div className="mx-auto text-4xl font-display text-bold text-center pt-6 pb-2">
          Events
        </div>
        <div className="mx-auto text-xl text-center font-serif">
          <p className="text-xl text-center font-serif">
            C4 loves hosting events to fundraise, show our support, and help people learn about combating childhood cancer. You can find a list of our events below!
            </p>
        </div>
        <EventIndex/>
      </div>
      <Footer></Footer>
    </div>
  )
}
