import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <h1> My Name Is  Kiishii</h1>
        <h3> This is my Counter App</h3>
      
    <Link className='linkss' to='/counter'> Use Counter</Link>
  
    </div>
  )
}

export default Home