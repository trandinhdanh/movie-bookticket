import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../Services/movie.service";
import "./DetailPage.modul.scss";
import { AiFillStar } from "react-icons/ai";
import { Progress } from "antd";
import moment from "moment";
import TrailerModal from "../../Components/TrailerModal/TrailerModal";
import TicketModal from "../../Components/TicketModal/TicketModal";
export default function DetailPage() {
  let { id } = useParams();
  const [openTraiLer, setOpenTrailer] = useState(false);
  const [openTicket, setOpenTicket] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    movieService
      .getMoiveDetail(id)
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-main h-full py-10 mb-12 container mx-auto">
      <TrailerModal
        open={openTraiLer}
        close={() => {
          setOpenTrailer(false);
        }}
        movie={movie}
      />
      <TicketModal
        id={id}
        open={openTicket}
        close={() => {
          setOpenTicket(false);
        }}
      />
      <h1 className="text-white font-bold text-2xl m-10 ">Chi Tiết Phim</h1>
      <div className="detail-content mb:block sm:block lg:flex gap-10 mx-10">
        <img src={movie.hinhAnh} alt="" className="detail-img rounded-xl" />
        <div className="title p-5 mb:w-full lg:w-1/2">
          <h1 className="text-white font-bold text-xl uppercase">
            <span className="text-yellow-500">Tên Phim:</span> {movie.tenPhim}
          </h1>
          <h1 className="text-white my-3 font-bold">
            <span className="text-yellow-500">Ngày Chiếu:</span>{" "}
            {moment(movie.ngayKhoiChieu).format("hh:mm:ss / DD-MM-YYYY ")}
          </h1>
          <div className="rating  my-3">
            <h1 className="text-yellow-500 font-bold flex">Đánh Giá: <span className="text-yellow-500 ml-2 font-bold text-sm flex items-center">
                    {movie.danhGia} <AiFillStar />
                  </span> </h1>
            {/* <Progress
              strokeColor={{
                "0%": " rgb(220 38 38)",
                "100%": "rgb(234 179 8)",
              }}
              percent={movie.danhGia * 10}
              format={(number) => {
                return (
                  <span className="text-white text-yellow-500 font-bold text-sm flex items-center">
                    {number / 10} <AiFillStar />
                  </span>
                );
              }}
            /> */}
            
          </div>

          <p className="">{movie.moTa}</p>
          <button
            onClick={() => {
              setOpenTrailer(true);
            }}
            className="px-5 py-2 my-3 mr-3 bg-red-600 rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
          >
            Xem Trailer
          </button>
          <button
            onClick={() => {
              setOpenTicket(true);
            }}
            className="px-5 py-2 my-3 bg-red-600 rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
          >
            Mua Vé
          </button>
        </div>
      </div>
    </div>
  );
}
