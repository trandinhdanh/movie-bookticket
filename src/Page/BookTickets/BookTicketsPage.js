import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListChair";
import BookTicketDetail from "./BookTicketDetail";
import { useDispatch, useSelector } from "react-redux";
import { getRoomTicketDetailActionService } from "../../Redux/Actions/roomTicketDetailAction";

export default function BookTicketsPage() {
  let { id } = useParams();

  const { roomTicketDetail } = useSelector(
    (state) => state.roomTicketDetailReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRoomTicketDetailActionService(id));
  }, []);

  const { danhSachGhe, thongTinPhim } = roomTicketDetail;
  let history = useNavigate();
  if (!localStorage.getItem("USER")) {
    message.error("Vui lòng đăng nhập để đặt vé");
    return setTimeout(() => {
      history("/login");
    }, 2000);
  }
  return (
    <div className="container mx-auto px-10 pt-24">
      <h1 className="text-center font-bold text-white text-3xl uppercase">
        Thông Tin Chi Tiết
      </h1>
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-7 p-5">
          <div className="w-full h-2 bg-white mb-12 rounded"></div>
          <ListChair danhSachGhe={danhSachGhe} />
        </div>
        <div className="col-span-5 p-5">
          <BookTicketDetail thongTinPhim={thongTinPhim} />
        </div>
      </div>
    </div>
  );
}
