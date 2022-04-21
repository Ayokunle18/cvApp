import React from 'react'
import Education from '../CV/Education'
import Experience from '../CV/Experience'
import Profile from '../CV/Profile'
import Reference from '../CV/Reference'
import './Home.css'



function Home() {
  return (
    <div>
        <div className='nameSection'>
            <h1>Ajala Ayokunle Moralayo</h1>
            <p>Lagos, Nigeria , +2348122655622, ayokunz@gmail.com</p>
        </div>
        <Profile/>
        <Education/>
        <Experience/>
        <Reference/>
       
    </div>
  )
}

export default Home


  