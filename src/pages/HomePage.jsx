import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <main>
    <div className="landing">
      <div className="des">

        <h1>SHREE BRAHMA RUPA SECONDARY SCHOOL</h1>
        <h4>Established - 1958 AD</h4>
        <h5>Pokhara - 32, Rajakochautara,kaski</h5>
      </div>
    </div>
    <div className="scroll">
      <div className="m1">
      <h2>
      We believe in Improving Student's outcomes, Quality teaching, Evidence based practice and coaching.
      </h2>
      <p>Brahma Rupa is a vital part of our institution's life and mission. We have students, faculty and staff from all over the country, but it originally established itself for the beniefit of local people to save their time, money and hard work.</p>
      </div>
      <div  className="m2">
        <div className="m3" title='Calander'><Link to={"/calander"}><img src="./calander1.jpg" alt="calander" /></Link>
        </div>
        <div className="m4" title='Gallery'><Link to={"/gallery"}><img src="./gall.jpg" alt="Gallert" /></Link>
        </div>
      </div>
      
    </div>
    <button className="getstart"><Link to={"/getstart"}>Admission Now</Link></button>
  </main>
  )
}

export default HomePage
