import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFoundPage.modul.scss";
export default function NotFoundPage() {
  return (
    <div className="pageNotFoundMain bg-red-800">
      <div className="pageNotFound">
        <div className="box">
          <div className="box__ghost">
            <div className="symbol" />
            <div className="symbol" />
            <div className="symbol" />
            <div className="symbol" />
            <div className="symbol" />
            <div className="symbol" />
            <div className="box__ghost-container">
              <div className="box__ghost-eyes">
                <div className="box__eye-left" />
                <div className="box__eye-right" />
              </div>
              <div className="box__ghost-bottom">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="box__ghost-shadow" />
          </div>
          <div className="box__description">
            <div className="box__description-container">
              <div className="box__description-title">Whoops!</div>
              <div className="box__description-text">
                It seems like we couldn't find the page you were looking for
              </div>
            </div>
            <NavLink to="/">
              {" "}
              <button className="box__button">Go Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
