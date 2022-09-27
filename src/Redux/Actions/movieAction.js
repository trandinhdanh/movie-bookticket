import { movieService } from "../../Services/movie.service";
import { GET_INFOR_MOVIE, SET_MOVIE_LIST } from "../constants/movieConstant";
import { message } from "antd";
export const getMovieListActionService = () => {
  return (dispatch) => {
    movieService
      .getMovieList()
      .then((res) => {
        dispatch({
          type: SET_MOVIE_LIST,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addMovieActionService = (formData) => {
  return async (dispatch) => {
    try {
      let res = await movieService.addMovie(formData);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const updateMovieActionService = (formData) => {
  return async (dispatch) => {
    try {
      let res = await movieService.updateMovie(formData);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const deleteMovieActionService = (id, handleOnSuccess) => {
  return async (dispatch) => {
    try {
      let res = await movieService.deleteMovie(id);
      message.success(res.data.message);
      handleOnSuccess();
    } catch (err) {
      message.error(err.response.data.content);
    }
  };
};

export const getInforMovieActionService = (id) => {
  return async (dispatch) => {
    try {
      let res = await movieService.getInforMovie(id);
      dispatch({
        type: GET_INFOR_MOVIE,
        payload: res.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
