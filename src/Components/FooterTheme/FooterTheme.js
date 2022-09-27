import React, { useEffect, useState } from "react";
import { movieService } from "../../Services/movie.service";
import "./FooterTheme.modul.scss";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

export default function FooterTheme() {
  const [theater, setTheater] = useState([]);
  useEffect(() => {
    movieService
      .getTheaterInfo()
      .then((res) => {
        setTheater(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderTheater = () => {
    return theater.map((item, index) => {
      return <img key={index} src={item.logo} className="w-10" alt="" />;
    });
  };
  return (
    <div style={{ backgroundColor: "#151515" }}>
      <ScrollToTop smooth top={200} height={20} width={40} className="animate-bounce" />
      <div
        style={{ borderBottom: "1px solid #666" }}
        className="grid mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto px-10 py-10 "
      >
        <div className="col">
          <h1 className="text-white font-bold text-base">Quy Định</h1>
          <div className="my-3">
            <h1 className="text-white ">Thỏa thuận sử dụng</h1>
            <h1 className="text-white ">Chính sách bảo mật</h1>
          </div>
        </div>

        <div className="col">
          <h1 className="text-white font-bold text-base">Đối Tác</h1>
          <div className="flex gap-10 flex-wrap my-3">{renderTheater()}</div>
        </div>

        <div className="col">
          <h1 className="text-white font-bold text-base">Ứng dụng</h1>
          <div className="my-3 flex items-center ">
            <AiFillAndroid className="text-3xl hover:text-red-600 transition duration-300" />
            <AiFillApple className="text-3xl hover:text-red-600 transition duration-300" />
          </div>
        </div>

        <div className="col">
          <h1 className="text-white font-bold text-base">Mạng xã hội</h1>
          <div className="my-3 flex items-center gap-5">
            <BsFacebook className="text-2xl hover:text-red-600 transition duration-300" />
            <BsInstagram className="text-2xl hover:text-red-600 transition duration-300" />
          </div>
        </div>
      </div>
      <h1 className="text-white font-bold text-center py-5">
        Designed by TRAN DINH DANH
      </h1>
    </div>
  );
}
