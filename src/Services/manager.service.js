import { https } from "./configURL";

export let managerService = {
  getUserList: (account) => {
    return https.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00${
        account ? `&tuKhoa=${account}` : ""
      }`
    );
  },
  deleteUser: (account) => {
    return https.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
  },
  addUser: (inforUser) => {
    return https.post("api/QuanLyNguoiDung/DangKy", inforUser);
  },
  updateUser: (inforUser) => {
    return https.post("api/QuanLyNguoiDung/DangKy", inforUser);
  },
};
