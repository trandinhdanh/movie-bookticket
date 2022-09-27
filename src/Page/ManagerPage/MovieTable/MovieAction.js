import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import "./MovieAction.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovieActionService } from "../../../Redux/Actions/movieAction";

export default function MovieAction({ movieID, handleOnSuccess }) {
  const dispatch = useDispatch();
  let handleUserDelete = () => {
    dispatch(deleteMovieActionService(movieID, handleOnSuccess));

    Modal.destroyAll();
  };

  const confirm = () => {
    Modal.confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc muốn xoá phim này",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: handleUserDelete,
    });
  };
  return (
    <div className="space-x-5 flex">
      <Link
        to={`/manager/editfilm/${movieID}`}
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
