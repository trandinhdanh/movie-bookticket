import React from "react";
import { Form, Input, message } from "antd";
import "./style.modul.scss";
import LoginAnimate from "./LoginAnimate";
import { userService } from "../../Services/user.service";
import { localStorageService } from "../../Services/localStorageService";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Actions/userAction";
export default function LoginPage() {
  let history = useNavigate();
  let dispatch = useDispatch()
  const onFinish = (values) => {
    userService
      .postLogin(values)
      .then((res) => {
        message.success("Đăng Nhập Thành Công!!!")
        //dispatch Action Redux
        dispatch(loginAction(res.data.content))
        localStorageService.user.set(res.data.content)
        
        // Chuyển trang load lại trang
        // window.location.href = "/"

       setTimeout(() => {
        history("/")
       }, 1000);

      })
      .catch((err) => {
        message.error(err?.response?.data.content)
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen p-10  page w-screen  ">
      <div className="content container mx-auto mt-10 p-10 rounded-xl ">
        <div className="animate">
          <LoginAnimate />
        </div>
        <div className="form p-5 ">
          <h1 className="text-center text-3xl my-5 font-bold text-red-600">
            Đăng Nhập
          </h1>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
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

            <div className="flex justify-center ">
              <button className="rounded px-5 py-2 text-white bg-red-600 font-bold hover:bg-red-700 transition-all">
                Đăng Nhập
              </button>
            </div>
            <p className="text-right text-white mt-7">
              Bạn chưa có tài khoản?{" "}
              <NavLink to="/register"><a className="font-bold text-red-600" href="">
                Đăng kí
              </a></NavLink>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
