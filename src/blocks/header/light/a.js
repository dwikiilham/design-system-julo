import React from "react";
import PropTypes from "prop-types";

function LightHeaderA(props) {
  return (
    <header className="fixed w-full z-999 flex justify-between transition-all duration-200 h-24 first-load text-black bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="https://www.julo.co.id/themes/julo/logo.svg"></img>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href className="mr-5 hover:text-gray-900">
            First Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Second Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Third Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Fourth Link
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

LightHeaderA.defaultProps = {
  theme: "indigo",
};

LightHeaderA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightHeaderA;
