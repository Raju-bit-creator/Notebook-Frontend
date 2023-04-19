import React from "react";
import B1 from "../images/b1.jpg"
import { Link } from "react-router-dom";
import B2 from "../images/b2.jpg"


export default function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={B2} className="d-block w-100" alt="Notebook" />
          <div className="banner-content"  >
            <h5 className="banner-bold">Cut Down A Tree, Make Paper And Write <br></br> <span>Save The Trees</span> On It</h5>
            <p className="banner-para">"Now I have the ability to digitally store my notes in "the cloud" and have my notes accessible to me wherever I go."</p>
            <Link className="button1" to="/" role="button">Learn More</Link>
          </div>
        </div>
        {/* <div className="carousel-item">
          <img src={B2} className="d-block w-100" alt="Biskun.com" />
          <div className="banner-content" >
            <h5 className="banner-bold">Second slide label</h5>
            <p className="banner-para">Some representative placeholder content for the second slide.</p>
          </div>
        </div> */}
        
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>

  )
}