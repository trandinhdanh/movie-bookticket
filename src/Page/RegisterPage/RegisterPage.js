import React from "react";
import { Form, Input, message } from "antd";
import "./RegisterPage.modul.scss";
import LoginAnimate from "../LoginPage/LoginAnimate";
import { NavLink, useNavigate } from "react-router-dom";
import { userService } from "../../Services/user.service";
export default function RegisterPage() {
  let history = useNavigate();
  const onFinish = (values) => {
    userService
      .postRegister(values)
      .then((res) => {
        history("/login");
        message.success("Đăng ký thành công!");
      })
      .catch((err) => {
        message.error(err?.response?.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-full p-10  pageRegister w-full">
      <div className="content container mx-auto mt-10 p-10 rounded-xl ">
        <div className="animate ">
          <LoginAnimate />
        </div>
        <div className="form p-5 ">
          <h1 className="text-center text-3xl my-5 font-bold text-red-600">
            Đăng Ký
          </h1>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 22,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<p className="text-white font-bold">Tài Khoản</p>}
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<p className="text-white font-bold">Mật Khẩu</p>}
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label={<p className="text-white font-bold">Email</p>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<p className="text-white font-bold">Số điện thoại</p>}
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<p className="text-white font-bold">Mã Nhóm</p>}
              name="maNhom"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mã Nhóm!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<p className="text-white font-bold">Họ Và Tên</p>}
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <div className="flex justify-center mt-5">
              <button className="rounded px-5 py-2 text-white bg-red-600 font-bold hover:bg-red-700 transition-all">
                Đăng Ký
              </button>
            </div>
            <p className="text-white mt-5 flex items-center justify-end">
              Bạn đã có tài khoản?
              <NavLink to="/login" className="ml-2">
                <div className="font-bold text-red-600" href="">
                  Đăng nhập
                </div>
              </NavLink>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
