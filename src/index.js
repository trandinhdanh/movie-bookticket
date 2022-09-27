import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'; 
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import {rootReducer} from "./Redux/Reducer/rootReducer"
import thunk from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store = {store}>
    <App/>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

