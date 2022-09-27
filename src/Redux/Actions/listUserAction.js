import { GET_USER_LIST } from "../constants/managerConstant";
import { managerService } from "../../Services/manager.service";

export const getUserListActionService = () => {
  return (dispatch) => {
    managerService
      .getUserList()
      .then((res) => {
        dispatch({
          type: GET_USER_LIST,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUserActionService = (id) => {
  return async (dispatch) => {
    try {
      let res = await managerService.deleteUser(id);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const addUserActionService = (infor) => {
  return async (dispatch) => {
    try {
      let res = await managerService.addUser(id);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const updateUserActionService = (infor) => {
  return async (dispatch) => {
    try {
      let res = await managerService.updaetUser(id);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};
