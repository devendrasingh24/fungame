import React from 'react'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar  fixed-top navbar-dark bg-dark" style={{color:"white",width:"100vw"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="../images/prcimg.jpg" alt="" width="60" height="60" className="d-inline-block align-text-top" />
      Rock-Paper-Scissors
    </a>
  </div>
</nav>
    </div>
  )
}
