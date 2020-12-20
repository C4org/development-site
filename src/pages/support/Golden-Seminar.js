/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../../components/Navbar"
import "../../styles/styles.css"

export default function App() {
  return (
    <div className="container main-container pt-0 mx-auto font-serif debug-screens">
      <Navbar></Navbar>
      <div className="width-100 page">
        <div className='w-2/6 mx-5'>
          <div className='w-full font-display text-2xl text-CGold bg-CBlue py-2 mx-auto rounded-lg text-center'>
            <p className='font-display px-2'>Organizations We Support</p>
          </div>
        </div>
        <div className='w-4/6'>
          <div className="font-serif text-xl">
            <p>
              C4 donates to several organizations such as Children’s National Hospital, St. Judes Research Hospital, and the National Foundation for Cancer Research.
            </p>
            <br />
            <p>
              A big part of supporting our mission is supporting these organizations, which you can do by participating in our fundraisers throughout the year. Be on the lookout for upcoming fundraisers and make sure to come out and support!
            </p>
            <br/>
            <p>
              You can also support these organizations individually as they are always open to monetary donations and some are open to other supplies and gifts as well.
              <br></br>
              <br/>
              Some organizations:
            </p>
            <ul className="list-disc list-inside">
              <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://childrensnational.org/visit/resources-for-families/family-services/volunteer/donations">Children’s National Hospital</a></li>
              <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://www.stjude.org/donate/donate-to-st-jude.html">St. Judes Research Hospital</a></li>
              <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://nfcr.org/ways-to-give">National Foundation for Cancer Research</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
