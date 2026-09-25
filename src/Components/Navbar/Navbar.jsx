import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
  
      <nav className="bg-black/98 fixed w-full z-20 top-0 start-0 border-b border-gray-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse gap-3 "
          >
            <img src={logo} className="h-11 w-11" alt="Flowbite Logo" />
            <div>
              <span className="self-center text-white text-xl text-heading font-semibold whitespace-nowrap">
                عدسة
              </span>
              <p className="my-0 text-sm text-orange-400">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4 cursor-pointer ">
            <IoMdSearch
              className=" text-2xl text-gray-500
            "
            />

            <button
              type="button"
              className="text-white bg-orange-600 hover:bg-brand-strong box-border border border-transparent  shadow-xs font-medium leading-5 rounded-base text-sm px-7 py-4  rounded-full cursor-pointer"
            >
              ابدأ القراءة
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-3  mt-4 font-medium rounded-base bg-gray-400/10 rtl:space-x-reverse md:flex-row md:mt-0 py-1 rounded-full   border border-gray-500 px-0.5 ">
              <li>
                <NavLink
                  to=""
                  className="block py-2 px-4 text-gray-400/40 bg-brand rounded-sm md:bg-transparent md:text-fg-brand hover:text-white duration-500"
                  aria-current="page"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  className="block py-2 px-4 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand  md:dark:hover:bg-transparent  text-gray-400/40 hover:text-white duration-500"
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="block py-2 px-4 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:dark:hover:bg-transparent  text-gray-400/40 hover:text-white duration-500 "
                >
                  من نحن
                </NavLink>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    
  );
}
