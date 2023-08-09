import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
     
     <footer className="bg-dark text-center text-white ">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-facebook-f"></i></Link>

      {/* <!-- Twitter --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-twitter"></i></Link>

      {/* <!-- Google --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-google"></i></Link>

      {/* <!-- Instagram --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-instagram"></i></Link>

      {/* <!-- Linkedin --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></Link>

      {/* <!-- Github --> */}
      <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i className="fab fa-github"></i></Link>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{ backgroundColor: "#808080" }}>
    © 2022:
    <Link className="text-white" to="https://mdbootstrap.com/">BellaFood.com, Inc</Link><br></br>
    <Link className="text-white" to="https://mdbootstrap.com/">Designed By Subhan Anwar Khan</Link>

  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}

export default Footer
