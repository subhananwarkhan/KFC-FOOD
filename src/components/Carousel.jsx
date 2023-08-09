import React from 'react'

export const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>

     <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{zIndex:"10"}}>
        <form className="d-flex" role="search">
      <input className="form-control me-2 bg-transparent  text-white" type="search" placeholder="Search Your Food" aria-label="Search" />
      <button className="btn btn-outline-danger text-white "  type="submit">Search</button>
      </form>
        </div>


      <div className="carousel-item active">
        <img src="https://www.kfcpakistan.com/images/c7dfa7d0-f483-11ed-a370-c701cfd1fb3c-1920-x-420banner_desktop_image-2023-05-17072354.jpg" className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
      </div>
      {/* <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500x200/?burger" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500x200/?food" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
      </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

   </div>
   </div>
  )
}

export default Carousel