import Link from "next/link";
import DarkModeToggleButton from "../home/dark-mode-toggle-button";

import Head from "next/head";

import { useState } from "react";

const Header = () => {
  // 상태 초기화
  const [isActive, setIsActive] = useState(false);

  // 햄버거 버튼 클릭 핸들러
  const handleBurgerClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="text-black dark:text-white body-font fixed top-0 w-full z-10">
        <div className="container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center sm:flex-row">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-4">
            <Link
              href="/"
              className="text-black css-selector-en dark:text-white body-font ml-3 text-xl hover:text-gray-400  dark:hover:text-gray-600"
            >
              Muricture
            </Link>
            <span className="grow h-14"></span>
            <button
              className={`menu-trigger  ${
                isActive ? "active-1" : ""
              } sm:flex md:hidden`}
              onClick={handleBurgerClick}
            >
              <span className="bg-black dark:bg-white"></span>
              <span className="bg-black dark:bg-white"></span>
              <span className="bg-black dark:bg-white"></span>
            </button>
          </div>
          <div
            className={`mobile_side_menu fixed top-0 left-0 w-full h-full bg-white z-10 flex justify-center items-center ${
              isActive ? "flex" : "hidden"
            } md:hidden`}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400"
              onClick={handleBurgerClick}
            >
              X
            </button>
            <ul className="flex flex-col dark:text-white justify-center items-center h-full space-y-4">
              <li>
                <Link
                  className="css-selector-en mr-5 dark:text-white hover:text-gray-400 dark:hover:text-gray-600 cursor-pointer"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="css-selector-en mr-5 hover:text-gray-400 dark:hover:text-gray-600 cursor-pointer"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <span
                  className="css-selector-en mr-5 hover:text-gray-400 dark:hover:text-gray-600 cursor-pointer"
                  onClick={showModal}
                >
                  Blog
                </span>
                {isModalOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-1">
                    <div className="bg-white p-4 rounded shadow-lg w-48 h-40 z-10 flex flex-col items-center justify-center">
                      <p className="css-selector-kr text-black mb-4">
                        준비중입니다.
                      </p>
                      <button
                        type="button"
                        className="css-selector-en dark:hover:text-gray-600 mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={hideModal}
                      >
                        Close
                      </button>
                    </div>
                    {/* 모달 배경을 클릭하면 모달을 닫습니다. */}
                    <div
                      className="top-0 left-0 w-full h-full bg-black opacity-50"
                      onClick={hideModal}
                    ></div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  className="css-selector-en mr-5 hover:text-gray-400 dark:hover:text-gray-600 cursor-pointer"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <DarkModeToggleButton className="z-20 relative" />
              </li>
            </ul>
          </div>

          <nav className="hidden sm:hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <Link
              href="/about"
              className="css-selector-en mr-5 hover:text-gray-400  dark:hover:text-gray-600"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="css-selector-en mr-5 hover:text-gray-400  dark:hover:text-gray-600"
            >
              Projects
            </Link>
            <div>
              <span
                className="css-selector-en mr-5 hover:text-gray-400 dark:hover:text-gray-600 cursor-pointer"
                onClick={showModal}
              >
                Blog
              </span>
              {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
                  <div className="bg-white p-4 rounded shadow-lg w-48 h-40 z-10 flex flex-col items-center justify-center">
                    <p className="css-selector-kr text-black mb-4">
                      준비중입니다.
                    </p>
                    <button
                      type="button"
                      className="css-selector-en dark:hover:text-gray-600 mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={hideModal}
                    >
                      Close
                    </button>
                  </div>
                  {/* 모달 배경을 클릭하면 모달을 닫습니다. */}
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                    onClick={hideModal}
                  ></div>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="css-selector-en mr-5 hover:text-gray-400  dark:hover:text-gray-600"
            >
              Contact Us
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
};

export default Header;
