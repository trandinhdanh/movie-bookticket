import React, { Fragment } from "react";
import "./ListChair.modul.scss";
import { useDispatch, useSelector } from "react-redux";
import { DAT_VE } from "../../Redux/constants/bookTicketConstant";
export default function ListChair({ danhSachGhe }) {
  const dispatch = useDispatch();
  const { danhSachGheDangDat } = useSelector(
    (state) => state.bookTicketReducer
  );
  const { userInfo } = useSelector((state) => state.userReducer);
  const renderChair = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDD = "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classGheDD = "gheDangDat";
      }
      let classGheDuocMinhDat = "";
      if (userInfo.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDuocMinhDat = "gheDuocMinhDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDD} ${classGheDuocMinhDat}`}
          >
            {ghe.daDat ? <span className="font-bold">X</span> : <span className="">{ghe.stt}</span>}
            
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div>
      {renderChair()}
      <div className="grid grid-cols-2 mt-5 ">
          <h1 className="text-white flex items-center font-bold"><button className="ghe "></button> : Ghế Chưa Đặt </h1>
          <h1 className="text-white flex items-center font-bold"><button className="ghe gheDaDat"></button> : Ghế đã đặt </h1>
          <h1 className="text-white flex items-center font-bold"><button className="ghe gheDangDat"></button> : Ghế đang được chọn </h1>
          <h1 className="text-white flex items-center font-bold"><button className="ghe gheDuocMinhDat"></button> : Ghế bạn đã đặt </h1>
          <h1 className="text-white flex items-center font-bold"><button className="ghe gheVip"></button> : Ghế Vip </h1>
      </div>
    </div>
  );
}
