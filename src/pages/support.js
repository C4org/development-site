/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/styles.css"
import SEO from "../components/seo"

export default function App() {
  return (
    <div className="container main-container min-h-screen mx-auto font-serif debug-screens">
      <SEO title="Support"></SEO>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage">
        <div>
          <div className="mx-auto text-4xl font-display text-bold text-center pt-6 pb-2">
            Support
        </div>
          <div className="mx-auto text-xl text-center font-serif">
            <p className="text-xl text-center font-serif">
              C4 wouldn't be possible without the help of some of the organizations below. Their work in fighting Childhood Cancer is inspiring!
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow-1 md:flex-row pt-12 pb-3">
          <div className='md:ml-5 md:mr-16 mt-8 mb-16 md:w-2/6 min-w-2/6 flex-shrink-0'>
            <div className='font-display text-2xl text-CGold bg-CBlue py-2 mx-auto rounded-lg text-center'>
              <p className='font-display px-2'>Organizations We Support</p>
            </div>
            <div className="w-full mt-2">
              <img className="lg:2/6 w-3/6 mx-auto" src='https://childrensnational.org/images/assets/logo-lg.svg' alt="Children's National" />
              <img className="lg:w-1/6 w-2/6 mx-auto" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22750%22%20height%3D%22750%22%3E%3Cpath%20fill%3D%22%23C10f3A%22%20stroke%3D%22%22%20stroke-width%3D%22%22%20d%3D%22M389.53%20436.478a2.526%202.526%200%200%201-2.074%201.64%2092.274%2092.274%200%200%200-67.675%2031.869s-2.047%201.987-7.216-2.075a5.434%205.434%200%200%201-2.504-6.347c7.047-17.748%2025.213-29.451%2053.94-34.764l.843-.123c5.88-.807%2019.561-2.697%2024.22%206.497a4.64%204.64%200%200%201%20.466%203.303m82.147%2087.968l-.165-.215a248.594%20248.594%200%200%201%2029.175-36.996c.355-.162.613-.268%201.008-.452a49.736%2049.736%200%200%200%2025.858-7.764%20166.71%20166.71%200%200%200%2012.616-11.647%20114.902%20114.902%200%200%200%207.544-15.484v-.014l-.195.356.706-1.641.115-.439%201.15-3.558a3.005%203.005%200%200%200-1.567-2.553%204.291%204.291%200%200%200-2.42-.263l.066-.215a10.178%2010.178%200%200%200%201.123-3.658v-.255a3.475%203.475%200%200%200-1.763-2.614%205.362%205.362%200%200%200-3.712-.21%205.896%205.896%200%200%200-1.634-1.527c-.289-.207-1.95-.798-5.01%201.057a13.567%2013.567%200%200%200-3.356%203.193l.23-1.881a3.293%203.293%200%200%200-2.064-2.233%205.739%205.739%200%200%200-5.058.974%2027.35%2027.35%200%200%200-5.28%206.615%2022.206%2022.206%200%200%200-4.747%205.408%2016.129%2016.129%200%200%201-9.294%201.009%2027.106%2027.106%200%200%200%206.665-4.909%2017.292%2017.292%200%200%200%204.587-10.26%208.34%208.34%200%200%200-.129-1.5%204.267%204.267%200%200%200-2.13-3.026c-2.966-1.478-6.51%201.522-7.19%202.145-.052.075-1.034%201.11-1.571%201.689a12.5%2012.5%200%200%200-5.018%202.346%2010.722%2010.722%200%200%201-3.908%201.904%2016.462%2016.462%200%200%200-5.906%203.04l-.155.119.142-.093c-.369.255-3.624%202.422-4.632%203.106a37.312%2037.312%200%200%200-9.813%207.523c-5.249%205.224-11.83%2011.695-41.311%2021.464-.253-10.8-6.91-39.813-8.255-50.915-2.723-19.609-25.445-46.6-41.787-63.676%2015.41%208.957%2024.033%2010.212%2032.515-1.347%202.238-3.5%205.772.277%208.97-.342%204.662-2.426%204.058-3.729%204.058-7.106%201.368-3.619%205.032-1.834%207.754-2.272%206.865-1.136%202.784-8.344%205.47-11.962%2030.183-1.803-3.85-29.566%2016.466-41.063a57.906%2057.906%200%200%200%2024.102-22.35c4.868-6.562%205.876-1.434%209.517-6.825%206.577-23.66-4.778-52.845-19.401-72.922-74.9-96.356-160.421-51.929-185.355%207.75-10.31%2015.165-7.127%2037.212-7.705%2055.346-1.94%206.308-5.724%206.133-11.163%202.409a13.732%2013.732%200%200%200%202.916%2010.77%2013.71%2013.71%200%200%200%209.948%205.043c.458%201.601%203.309%204.036%204.498%205.703a27.671%2027.671%200%200%201-14.72-2.567%209.877%209.877%200%200%200%202.513%207.752%2017.926%2017.926%200%200%200%2012.767%2014.69c12.016%204.878%206.377%2021.359%204.97%2028.127-.44%201.496-.898%202.987-1.293%204.413a32.199%2032.199%200%200%200-21.461%2023.345c-1.355%2025.302-14.397%2046.3-14.166%2072.484a40.114%2040.114%200%200%200%200%205.396c6.479%2028.324-1.798%2065.447-.43%2094.644A726.148%20726.148%200%200%200%200%20614.692a1009.198%201009.198%200%200%201%20375.005-69.677A1009.13%201009.13%200%200%201%20750%20614.691a731.796%20731.796%200%200%200-278.323-90.245%22%2F%3E%3C%2Fsvg%3E' alt="St. Jude's" />
              <img className="lg:w-2/6 w-3/6 mx-auto" src='https://www.nfcr.org/wp-content/uploads/2017/03/NFCR-logo-web-blue-61027-e1489677271529.png' alt="NFCR" />
            </div>
          </div>
          <div className=''>
            <div className="font-serif text-xl">
              <p>
                C4 donates to several organizations such as Children’s National Hospital, St. Judes Research Hospital, and the National Foundation for Cancer Research.
            </p>
              <br />
              <p>
                A big part of supporting our mission is supporting these organizations, which you can do by participating in our fundraisers throughout the year. Be on the lookout for upcoming fundraisers and make sure to come out and support!
            </p>
              <br />
              <p>
                You can also support these organizations individually as they are always open to monetary donations and some are open to other supplies and gifts as well.
              <br></br>
                <br />
              Some organizations:
            </p>
              <ul className="list-disc list-inside">
                <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://childrensnational.org/visit/resources-for-families/family-services/volunteer/donations">Children’s National Hospital</a></li>
                <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://www.stjude.org/donate/donate-to-st-jude.html">St. Judes Research Hospital</a></li>
                <li><a className="font-display font-medium text-CBlue hover:text-CGray" href="https://nfcr.org/ways-to-give">National Foundation for Cancer Research</a></li>
              </ul>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
