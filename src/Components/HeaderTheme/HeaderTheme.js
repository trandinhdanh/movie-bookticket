import React, { useState } from "react";
import UserNav from "./UserNav";
import { RiMovie2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function HeaderTheme() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let handleIsOpenMenu = () => {
    setIsOpenMenu((current) => !current);
  };

  return (
    <div className="nav__wrapped w-full relative container ">
      <nav
        id="nav"
        className="flex bg-[#000000ab] fixed z-10 w-full items-center justify-between flex-wrap mb:px-8 sm:px-8 md:px-16 top-0 py-4"
      >
        <div className="block lg:hidden sm:block mb:block">
          <button
            onClick={() => {
              handleIsOpenMenu();
            }}
            className="btn__nav flex items-center rounded text-white border-ehite hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
          <NavLink to="/">
            {" "}
            <div className="flex items-center text-3xl font-bold hover:text-red-600 transition duration-300">
              {" "}
              <RiMovie2Fill className="mx-2 text-red-600" /> MOVIE
            </div>
          </NavLink>
        </div>
        <div
          className={`nav__menu w-full block overflow-hidden flex-grow lg:flex lg:items-center lg:w-auto text-white mb:order-1 sm:order-1 md:order-1 lg:order-none ${
            isOpenMenu ? "mb:h-0 sm:h-full" : "mb:h-0 sm:h-0"
          } transition-all lg:h-full lg:opacity-100 text-center`}
        >
          <div className=" justify-center font-bold nav__links text-sm lg:flex-grow mb:mr-0 sm:mr-0 lg:mr-5 lg:flex">
            <a
              className="hover:text-red-500 block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href=""
            >
              Cụm Rạp
            </a>
            <a
              className="hover:text-red-500 block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href=""
            >
              Lịch Chiếu
            </a>
            <a
              className="hover:text-red-500 block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href=""
            >
              Giới Thiệu
            </a>
          </div>
        </div>
        <div>
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
