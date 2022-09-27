import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "../../Services/movie.service";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import ItemTabMovie from "./ItemTabMovie";
import "./TabMovie.modul.scss"
const { TabPane } = Tabs;

export default function TabMovie() {
  const onChange = (key) => {
  };
  const [dataMovie, setDataMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    movieService
      .getShowtimeInfoByTheater()
      .then((res) => {
        setIsLoading(false)
        setDataMovie(res.data.content)
      })
      .catch((err) => {
      setIsLoading(false)
      });
  }, []);
  const renderContent = () => { 
    return dataMovie.map((heThongRap,index) => { 
    return <TabPane tab={<img src={heThongRap.logo} className="w-12" />} key={index}>
           <Tabs  style={{height:"500px"}} tabPosition="left" defaultActiveKey="1" onChange={onChange} size="small">
                {heThongRap.lstCumRap.map((cumRap,index) => { 
                     return <TabPane tab={renderTenCumRap(cumRap)} key={cumRap.maCumRap}>
                              <div className="tab" style={{height:"500px",overflowY:"scroll"}}>
                                    {cumRap.danhSachPhim.map((phim) => { 
                                      return <ItemTabMovie phim={phim} key={phim.maPhim}/>;
                                     })}
                              </div>
                            </TabPane>
                 })}
          </Tabs>
       </TabPane>
     })
   }
   const renderTenCumRap = (cumRap) => { 
    return <div className="text-left">
      <p className="text-green-600 font-bold truncate text-base">{cumRap.tenCumRap}</p>
      <p className="text-white my-1 text-sm">{cumRap.diaChi.length < 40 ? cumRap.diaChi : cumRap.diaChi.slice(0,40) + "..."}</p>             
      {/* <button className="py-2 px-5 bg-red-600 text-white font-bold rounded">Xem chi tiết</button> */}
    </div>


    }
  return (
    <div className="container mx-20 p-10  w-10/12">
      {/* {isLoading ? <SpinnerComponent/> : ""}   */}
      <Tabs tabPosition="left" defaultActiveKey="1" onChange={onChange}>
          {renderContent()}
      </Tabs>
    </div>
  );
}
