import React from 'react'
import {AiFillStar,AiOutlinePlayCircle,AiOutlineSearch} from "react-icons/ai"


export default function MoveiItem({movie}) {
  return (
        <div className="movie-item" >
          <AiOutlinePlayCircle className="movie-play hover:text-white text-white bg-gradient-to-t from-black to-transparent"/>
          <img
              alt="example"
              src={movie.hinhAnh}
              style={{ height: "300px", borderRadius:"10px"}}
              className="img-movie object-cover transition duration-300"
            />
          <div className="item-content">
          <h1 className="item-title text-white font-bold text-base">{movie.tenPhim.length <20 ? movie.tenPhim : movie.tenPhim.slice(0,20) + "..."}</h1>
          <h1 className="item-rating text-yellow-500 font-bold text-xs flex items-center">Đánh Giá: {movie.danhGia} <AiFillStar/></h1>
          <button className="item-btn py-2 my-3 w-full text-white rounded font-bold transition ease-in-out delay-15  bg-red-600 duration-300 hover:text-white">Xem Chi Tiết</button>
          </div>
        </div>
  )
}
