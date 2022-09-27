import { Tag } from "antd";
export const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (text, record) => {
      return <img className="" src={record.hinhAnh} />;
    },
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
  },
  {
    title: "Bí danh",
    dataIndex: "biDanh",
    key: "biDanh",
  },
  {
    title: "Trailer",
    dataIndex: "trailer",
    key: "trailer",
  },
  {
    title: "Ngày chiếu",
    dataIndex: "ngayKhoiChieu",
    key: "ngayKhoiChieu",
  },
  {
    title: "Sắp chiếu",
    dataIndex: "sapChieu",
    key: "sapChieu",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
  },
  {
    title: "Đang chiếu",
    dataIndex: "dangChieu",
    key: "dangChieu",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
  },
  {
    title: "Hot",
    dataIndex: "hot",
    key: "hot",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
  },
  {
    title: "Đánh giá",
    dataIndex: "danhGia",
    key: "danhGia",
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "acion",
  },
];
