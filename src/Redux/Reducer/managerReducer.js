import { GET_USER_LIST } from "../constants/managerConstant";

const initialState = {
  userList: [{}],
};

export const managerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST: {
      state.userList = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
