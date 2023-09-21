import React from 'react'
import BackImage from '../assets/pizza.jpeg'
import "../Styles/Home.css"
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BackImage})`}}>
      
      <div className='headerContainer' >
        <h1>Chandra's Pizza hut</h1>
        <p>First Chill then Hustle</p>
        <Link to="/menu">
            <button > Order now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
