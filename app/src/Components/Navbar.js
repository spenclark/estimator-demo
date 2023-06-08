import React from 'react'
import "./css/navbar.css"

function Navbar() {

  function ifInApp() { return (window.location.href != `http://${window.location.host}/estimator` ? <a href="/estimator">
  <button>Try now</button></a> : null )

}
  return (
    <div className='navbar'>
        <a href='/'>
            <h1 className='title'>Estimator<span>Hero</span></h1>
        </a>
       {ifInApp()}
    </div>
  )
}

export default Navbar