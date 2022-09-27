import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListActionService } from "../../Redux/Actions/movieAction";
import "./ListMovie.modul.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import MoveiItem from "../../Components/MoveiItem/MoveiItem";
import { useState } from "react";


export default function ListMovie() {
  let dispatch = useDispatch();
  let { movieList } = useSelector((state) => {
    return state.movieReducer;
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getMovieListActionService());
  }, []);
  const renderListMovie = () => {
    return movieList
      .filter((item) =>
        item.tenPhim.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => item.hinhAnh !== null)
      .map((item, index) => {
        return (
          <NavLink to={`detail/${item.maPhim}`} key={index}>
            <MoveiItem movie={item} />
          </NavLink>
        );
      });
  };
  return (
    <div className="container mx-auto my-7 ">
      <div className="search mb-5 mx-20 space-x-2 flex items-center justify-end">
        <input
          className="movie-search py-2 px-5 rounded border-none  text-black"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm Kiếm..."
        />
        <button className="py-2 px-5 rounded transition ease-in-out delay-15 hover:scale-110 bg-red-600 duration-300 ">
          <AiOutlineSearch className="font-bold text-2xl" />
        </button>
      </div>
      <div className="grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb:mx-10 md:mx-10 lg:mx-20">
        {renderListMovie()}
      </div>
    </div>
  );
}
