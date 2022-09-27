import React, { useState, useEffect } from "react";
import { managerService } from "../../../Services/manager.service";
import { columns } from "../utils/userManager.utils";
import UserAction from "./UserAction";
import { Table } from "antd";
function UserTable({ search }) {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    let fetchListUser = (search) => {
      managerService
        .getUserList(search)
        .then((res) => {
          let userList = res.data.content.map((user, index) => {
            return {
              key: index,
              ...user,
              action: (
                <UserAction
                  key={index}
                  account={user.taiKhoan}
                  handleOnSuccess={fetchListUser}
                />
              ),
            };
          });
          setDataUser(userList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser(search);
  }, [search]);

  return <Table columns={columns} dataSource={dataUser} />;
}

export default UserTable;
