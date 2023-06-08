import React from 'react'
import "./css/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <h1 className='title'>Estimator<span>Hero</span></h1>
        </div>
        <div>
            <button>Try now</button>
        </div>
    </div>
  )
}

export default Navbar