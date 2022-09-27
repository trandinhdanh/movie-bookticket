import { SET_MOVIE_LIST, GET_INFOR_MOVIE } from "../constants/movieConstant";

const initialState = {
  movieList: [],
  movieInfor: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE_LIST: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_INFOR_MOVIE: {
      state.movieInfor = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
