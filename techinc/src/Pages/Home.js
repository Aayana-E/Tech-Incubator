import React from 'react'
import { Navbar } from '../Components/Navbar'
import "../Style/Home.css"

function Home() {
  return (
    <div classname= "home-container">
        {/*<Navbar/>*/}
        <div className="content-container">
          <h1 className="welcome-heading">Welcome to the Tech Incubator</h1>
        </div>
    </div>
  )
}

export default Home