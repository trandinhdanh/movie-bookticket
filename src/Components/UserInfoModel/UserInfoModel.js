import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { userService } from "../../Services/user.service";
import "./UserInfo.modul.scss"
import moment from "moment";
export default function UserInfoModel({ open, close }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    userService
      .userInFo()
      .then((res) => {
        setInfo(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!open) return null;
  console.log(info);
  const getIdSeat = (danhSachGhe) => {
    return danhSachGhe
      .reduce((listSeat, seat) => {
        return [...listSeat, seat.tenGhe];
      }, [])
      .join(", ");
  };
  const renderTable = () => { 
   return info.thongTinDatVe?.map((ticket,index) => { 
      return <tr className="" key={ticket.maVe}>
        <td className="text-white"><span>{moment(ticket.ngayDat).format('hh:mm A/DD-MM')}</span></td>
        <td className="text-white"><span className="font-bold">{ticket.tenPhim}</span></td>
        <td className="text-white"><span className="">{ticket.giaVe.toLocaleString()} VND</span></td>
        <td className="text-white">{ticket.danhSachGhe[0].tenHeThongRap}</td>
        <td className="text-white">{getIdSeat(ticket.danhSachGhe)}</td>
        <td className="text-white">{(ticket.giaVe * ticket.danhSachGhe.length).toLocaleString()} VND</td>
      </tr>
     })
   }
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/90">
      <div className="pt-10 flex items-center justify-center ">
        <div
          className="p-8 bg-gray-800 rounded-xl"
          style={{ height: "100%", width: "80%" }}
        >
          <div className="flex justify-end">
            <button className="" onClick={close}>
              <AiOutlineClose className="font-bold text-4xl transition duration-300 text-red-600 hover:rotate-180" />
            </button>
          </div>
          <div className="">
            <h1 className="text-center text-2xl font-bold text-white">
              Th??ng Tin T??i Kho???n
            </h1>
            <div className="p-5 grid grid-cols-12">
              <div className="col-span-6 space-y-2">
                <h1 className="userInfo-text">
                  T??n Kh??ch H??ng:{" "}
                  <span className="text-white">{info.hoTen}</span>
                </h1>
                <h1 className="userInfo-text">
                  Email: <span className="text-white">{info.email}</span>
                </h1>
                <h1 className="userInfo-text">
                  S??? ??i???n Tho???i:{" "}
                  <span className="text-white">{info.soDT}</span>
                </h1>
              </div>
              <div className="col-span-6 space-y-2">
                <h1 className="userInfo-text">
                  Lo???i Ng?????i D??ng: <span className="text-white">
                    {info.maLoaiNguoiDung === "KhachHang" ? "Kh??ch H??ng" : "Qu???n Tr???"}
                  </span>
                </h1>
                <h1 className="userInfo-text">
                  T??i Kho???n:{" "}
                  <span className="text-white">{info.taiKhoan}</span>
                </h1>
                <h1 className="userInfo-text">
                  M?? Nh??m: <span className="text-white">{info.maNhom}</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="tab px-5" style={{overflowY:"scroll",height :"300px"}}>
          <table className="table-auto w-full" >
            <thead className="">
              <tr className="text-green-600 text-left">
                <th>Ng??y ?????t</th>
                <th>T??n Phim</th>
                <th>Gi?? V??</th>
                <th>T??n R???p</th>
                <th>Gh???</th>
                <th>T???ng Ti???n</th>
              </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
