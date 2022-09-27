import React, { useState } from "react";
import { Form, Input, Button, Tooltip, DatePicker, Switch } from "antd";
import "./AddMovie.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addMovieActionService } from "../../../Redux/Actions/movieAction";
const { TextArea } = Input;

function AddMovie() {
  const dispatch = useDispatch();
  const formatNumber = (value) => new Intl.NumberFormat().format(value);
  const NumericInput = (props) => {
    const { value, onChange } = props;

    const handleChange = (e) => {
      const { value: inputValue } = e.target;
      const reg = /^-?\d*(\.\d*)?$/;

      if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
        onChange(inputValue);
      }
    }; // '.' at the end or only '-' in the input box.

    const handleBlur = () => {
      let valueTemp = value;

      if (value.charAt(value.length - 1) === "." || value === "-") {
        valueTemp = value.slice(0, -1);
      }

      onChange(valueTemp.replace(/0*(\d+)/, "$1"));
    };

    const title = value ? (
      <span className="numeric-input-title">
        {value !== "-" ? formatNumber(Number(value)) : "-"}
      </span>
    ) : (
      "Nhập đánh giá"
    );
    return (
      <Tooltip
        trigger={["focus"]}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Input a number"
          maxLength={25}
        />
      </Tooltip>
    );
  };

  const [imgSRC, setimgSRC] = useState("");
  const [file, setfile] = useState({});
  const onFinish = (e) => {
    let ngayChieu = moment(e.ngayChieu).format("dd / mm / yyyy");
    const infor = { ...e, ngayChieu: ngayChieu, hinhAnh: file };

    const formData = new FormData();
    for (let key in infor) {
      if (key !== "hinhAnh") {
        formData.append(key, e[key]);
      } else {
        formData.append("hinhAnh", file);
      }
    }
    dispatch(addMovieActionService(formData));
  };
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgSRC(e.target.result);
      };
      setfile(file);
    }
  };
  //

  const navigation = useNavigate();
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-[40px] pb-10 pt-4">
        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="mx-2 text-red-600"
            height="5rem"
            width="5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-3.999 8zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </g>
          </svg>

          <h1 className="text-black text-center font-black text-[5rem]">
            ADD FILM
          </h1>
        </div>

        <Form
          id="myForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            sapChieu: false,
            hot: false,
            dangChieu: false,
          }}
        >
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập tên phim" }]}
            name="tenPhim"
            label="Tên film"
          >
            <Input name="tenPhim" onChange={(e) => e.target.value} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập bí danh" }]}
            name="biDanh"
            label="Bí danh"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập trailer" }]}
            name="trailer"
            label="Trailer"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập mã nhóm" }]}
            name="maNhom"
            label="Mã nhóm"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập đánh gía" }]}
            name="danhGia"
            label="Đánh giá"
            type="number"
          >
            <NumericInput
              style={{
                width: 120,
              }}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập ngày chiếu" }]}
            name="ngayChieu"
            label="Ngày chiếu"
          >
            <DatePicker name="ngayChieu" format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item name="sapChieu" label="Sắp chiếu" valuePropName="checked">
            <Switch name="sapChieu" />
          </Form.Item>

          <Form.Item name="hot" label="Hot" valuePropName="checked">
            <Switch value="false" name="hot" defaultChecked />
          </Form.Item>
          <Form.Item name="hot" label="Đang chiếu" valuePropName="checked">
            <Switch value="false" name="hot" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
            name="moTa"
            label="Mô tả"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập hình ảnh" }]}
            label="Poster"
            valuePropName="hinhAnh"
          >
            <input
              type="file"
              onChange={handleChangeFile}
              accept="image/png,image/jpeg,image/jpg,image/gif"
            />
            <br></br>
            <img className="w-[150px]" src={imgSRC} alt="" />
          </Form.Item>
          <Form.Item label="Thêm">
            <Button className="text-white" htmlType="submit">
              Thêm
            </Button>
            <Button
              onClick={() => {
                navigation("/manager");
              }}
              className="border ml-2 back-btn bg-white"
              htmlType="submit"
            >
              Trở về
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddMovie;
