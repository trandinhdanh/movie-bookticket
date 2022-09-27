import axios from "axios";
import {
  offLoadingAction,
  onLoadingAction,
} from "../Redux/Actions/spinnerAction";
import { store } from "../index";
import { localStorageService } from "./localStorageService";

export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzExMDQwMDAwMCIsIm5iZiI6MTY0ODQwMDQwMCwiZXhwIjoxNjc3MjU4MDAwfQ.0byoDjBIIS6877xg7NwEnO16v5HOltI9AatD9OLB0Ys"
export const https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: "Bearer " + localStorageService.user.get()?.accessToken,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(onLoadingAction());
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(offLoadingAction());
    return response;
  },
  function (error) {
    store.dispatch(offLoadingAction());
    return Promise.reject(error);
  }
);
