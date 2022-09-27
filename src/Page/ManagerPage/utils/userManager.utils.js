import { Tag } from "antd";

export const columns = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Loại khách hàng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text === "QuanTri") {
        return <Tag color={"red"}>Quản trị</Tag>;
      } else {
        return <Tag color={"blue"}>Khách hàng</Tag>;
      }
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "acion",
  },
];
