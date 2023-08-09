import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();



  return (
    <div>   <div>
    <nav className="navbar navbar-expand-lg navbar-dark   " style={{backgroundColor: "black"}}>
      <div className="container-fluid">

        
        <img src="https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png " width="50px" height="50px" alt="" className="src me-3" />
        
        <Link className="navbar-brand fs-1 fst-italic" to="/" style={{fontFamily: "Friz Quadrata W04 Bold",color:"#EA002A"}}>
          KFC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active my-1 fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
            <li>
                {isAuthenticated && <p>{user.name}</p>}
            </li>
            {/* CONDITION........ */}

              {isAuthenticated ?(
              <li className="nav-item">
              <Link className="nav-link" to="/logout">
               <button 
               onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
               </button>
              </Link>
            </li>
            
              ):( 
              <li className="nav-item my-1"  >
              <Link className="nav-link" to="/login">
              <button className='btn1 d-flex  ' onClick={() => loginWithRedirect()}>Login  </button>
              </Link>
            </li>
            )}
             
             <li className="nav-item my-1 "  >
              <Link className="nav-link" >
              <button className='btn1 d-flex  ' >Dilivery
              <img src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png" width={20} height={20} alt="" className="src mx-2" />
              </button>
              </Link>
              </li>

              <li className="nav-item my-1 "   >
              <Link className="nav-link" >
              <button className='btn1 d-flex  ' >PickUp
              <img src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png" width={20} height={20} alt="" className="src mx-2" />
              
              </button>
              </Link>
              </li>
          </ul>
          
          
        </div>
      </div>
      
    </nav>
  </div>
  </div>
  )
}

export default Navbar