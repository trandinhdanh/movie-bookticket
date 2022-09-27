import React, { useEffect, useState } from "react";
import { movieService } from "../../Services/movie.service";

import Slider from "react-slick";
import "./Banner.modul.scss";

export default function Banner() {
    let [banner,setBanner] = useState([])
  useEffect(() => {
    movieService
      .getMovieBanner()
      .then((res) => {
        setBanner(res.data.content)
    })
      .catch((err) => {
      });
  },[]);
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed:1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    row: 0
  };
  const renderContent = () => { 
       return banner.map((item,index) => {
        return  <div key={index} className=""><img className=" object-cover"style={{width:"100vw",height:"100%"}}  src={item.hinhAnh} key={index} alt="" /></div>
          })
    }
  return <div >
    <Slider {...settings} className="text-white bg-white relative">
      {renderContent()}
    </Slider>
  </div>;
}
