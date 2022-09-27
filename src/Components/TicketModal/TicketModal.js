import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { movieService } from "../../Services/movie.service";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import "./TicketModal.modul.scss"
const { TabPane } = Tabs;

export default function TicketModal({ open, close, id }) {
  const onChange = (key) => {
    console.log(key);
  };
  const [theater, setTheater] = useState([]);
  useEffect(() => {
    movieService
      .getInfoShowTimes(id)
      .then((res) => {
        setTheater(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/90 ">
       
      <div className="pt-20 flex items-center justify-center ">
        <div className="p-8 bg-gray-800 rounded-xl" style={{ height: "500px", width: "600px" }}>
        <div  className="flex justify-end mb-3">
        <button className="" onClick={close}>
          <AiOutlineClose className="font-bold text-4xl transition duration-300 text-red-600 hover:rotate-180" />
        </button>
        </div>
          <div className="">
          <Tabs className="tab pr-5" tabPosition="left" defaultActiveKey="1" onChange={onChange} style={{height:"350px",overflowY:"scroll",}}>
            {theater.map((heThongRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={<img src={heThongRap.logo} className="w-12" />}
                >
                  {heThongRap.cumRapChieu?.map((cumRap,index) => { 
                    return <div key={index} className="">
                      <div className=" p-2 ">
                        <p className="text-green-600 font-bold text-base">{cumRap.tenCumRap}</p>
                        <p className="text-white  text-sm">{cumRap.diaChi}</p>
                      </div>
                      <div className="grid grid-cols-3">
                        {cumRap.lichChieuPhim.slice(0,12).map((lichChieu,index) => { 
                          return <NavLink to={`/booktickets/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu}>
                            <div className="col-span-1 m-1">
                            <p className="bg-gray-200 text-black rounded font-bold px-2 py-2">
                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm / ')}
                            <span className='text-red-500'> {moment(lichChieu.ngayChieuGioChieu).format("DD-MM")}</span>
                            </p>
                          </div>
                          </NavLink>
                         })}
                      </div>
                    </div>
                   })}
                  
                </TabPane>
              );
            })}
          </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
