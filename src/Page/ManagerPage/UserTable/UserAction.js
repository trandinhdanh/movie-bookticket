import { message, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { managerService } from "../../../Services/manager.service";

export default function UserAction({ account, handleOnSuccess }) {
  const navigation = useNavigate();
  let handleUserDelete = () => {
    managerService
      .deleteUser(account)
      .then((res) => {
        message.success("Xoá thành công");
        handleOnSuccess();
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  const confirm = () => {
    Modal.confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc muốn tài khoản này",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: handleUserDelete,
    });
  };

  return (
    <div className="space-x-5 flex">
      <Link
        to={`/manager/edituser/${account}`}
        className="bg-blue-500 rounded text-white px-5 py-3"
      >
        Update
      </Link>
      <button
        className="bg-red-500 rounded text-white px-5 py-3"
        onClick={confirm}
      >
        Delete
      </button>
    </div>
  );
}
