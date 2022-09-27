import { LOGIN } from "../constants/userConstant";

export let loginAction = (dataLogin) => {
  return {
    type: LOGIN,
    payload: dataLogin,
  };
};
