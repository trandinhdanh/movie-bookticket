import React, { useEffect, useState } from "react";
import { Form, Input, Button, Tooltip, DatePicker, Switch } from "antd";
import "./EditMovie.scss";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { getInforMovieActionService } from "../../../Redux/Actions/movieAction";

import { useForm } from "antd/lib/form/Form";
const { TextArea } = Input;

function EditFilm() {
  const dispatch = useDispatch();
  const formatNumber = (value) => new Intl.NumberFormat().format(value);
  const [defaultValue, setDefaultValue] = useState({});
  const { movieInfor } = useSelector((state) => state.movieReducer);
  const [form] = Form.useForm();
  const dateFormat = "DD-MM-YYYY";
  const { movieID } = useParams();
  useEffect(() => {
    dispatch(getInforMovieActionService(movieID));
    setDefaultValue({
      maPhim: movieID,
      tenPhim: movieInfor?.tenPhim,
      biDanh: movieInfor?.biDanh,
      trailer: movieInfor?.trailer,
      maNhom: movieInfor?.maNhom,
      danhGia: movieInfor?.danhGia,
      ngayKhoiChieu: moment(movieInfor?.ngayKhoiChieu),
      moTa: movieInfor?.moTa,
      hinhAnh: null,
      sapChieu: movieInfor?.sapChieu,
      hot: movieInfor?.hot,
      dangChieu: movieInfor?.dangChieu,
    });
  }, [movieID]);
  useEffect(() => {
    form.setFieldsValue(defaultValue);
  }, [form, defaultValue]);

  // console.log(movieInfor);
  console.log("defaulte", defaultValue);
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
      "Nh???p ????nh gi??"
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
    const infor = { ...e, hinhAnh: file };
    console.log(e.maPhim);
    const formData = new FormData();
    for (let key in infor) {
      if (key !== "hinhAnh") {
        formData.append(key, e[key]);
      } else {
        if (e.hinhAnh !== null) {
          formData.append("hinhAnh", file);
        }
      }
    }
    console.log(formData);
    // dispatch(updateMovieActionService(formData));
  };
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      await setfile(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgSRC(e.target.result);
      };
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
            EDIT FILM
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
          initialValues={defaultValue}
        >
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p t??n phim" }]}
            name="maPhim"
            label="M?? phim"
          >
            <Input name="maPhim" onChange={(e) => e.target.value} disabled />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p t??n phim" }]}
            name="tenPhim"
            label="T??n film"
          >
            <Input name="tenPhim" onChange={(e) => e.target.value} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p b?? danh" }]}
            name="biDanh"
            label="B?? danh"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p trailer" }]}
            name="trailer"
            label="Trailer"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p m?? nh??m" }]}
            name="maNhom"
            label="M?? nh??m"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p ????nh g??a" }]}
            name="danhGia"
            label="????nh gi??"
            type="number"
          >
            <NumericInput
              style={{
                width: 120,
              }}
            />
          </Form.Item>
          <Form.Item
            // rules={[{ required: true, message: "Vui l??ng nh???p ng??y chi???u" }]}
            name="ngayKhoiChieu"
            label="Ng??y chi???u"
          >
            <DatePicker
              // value={moment(movieInfor.ngayKhoiChieu, "DD/MM/YYYY")}
              name="ngayKhoiChieu"
              format={dateFormat}
              defaultValue={moment(movieInfor.ngayKhoiChieu, dateFormat)}
            />
          </Form.Item>
          <Form.Item name="sapChieu" label="S???p chi???u" valuePropName="checked">
            <Switch name="sapChieu" />
          </Form.Item>

          <Form.Item name="hot" label="Hot" valuePropName="checked">
            <Switch name="hot" defaultChecked />
          </Form.Item>
          <Form.Item
            name="dangChieu"
            label="??ang chi???u"
            valuePropName="checked"
          >
            <Switch name="dangChieu" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p m?? t???" }]}
            name="moTa"
            label="M?? t???"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Vui l??ng nh???p h??nh ???nh" }]}
            label="Poster"
            valuePropName="hinhAnh"
          >
            <input
              type="file"
              onChange={handleChangeFile}
              accept="image/png,image/jpeg,image/jpg,image/gif"
            />
            <br></br>
            <img
              className="w-[150px]"
              src={imgSRC === "" ? movieInfor.hinhAnh : imgSRC}
              alt=""
            />
          </Form.Item>
          <Form.Item label="Th??m">
            <Button className="text-white" htmlType="submit">
              C???p nh???t
            </Button>
            <Button
              onClick={() => {
                navigation("/manager");
              }}
              className="border ml-2 back-btn bg-white"
              htmlType="submit"
            >
              Tr??? v???
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default EditFilm;
