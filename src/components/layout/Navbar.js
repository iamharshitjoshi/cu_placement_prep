import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <>
  
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full flex flex-wrap items-center justify-between p-4">

        <Link
          to="https://cuchd.in/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp"
            className="h-8"
            alt="cu logo"
          />
        </Link>
        
        <div className="flex flex-row space-x-3  md:order-2  rtl:space-x-reverse">
          <Link to='/signUp'
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SignUp
          </Link>


      <div className={`lg:flex lg:items-center lg:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            onClick={toggleDropdown}
            className="mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >

          <div className="flex flex-row ">
            Login
            <svg className="flex items-center mt-2 w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </div>
          
            
          </button>

          {/* Dropdown menu */}
          <div id="dropdownHover" className={`absolute mr-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Student</Link>
              </li>
              <li>
                <a href="/admin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
              </li>
            
            </ul>
          </div>

        </div>
      </div>
    

    

{/* end */}
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >

          <ul className="text-2xl flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <Link
                to="/companies"
                className="block py-3 px-4 text-white bg-blue-700 rounded hover:bg-white hover:text-blue   hover:rounded-lg hover:px-2  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                
              </Link>
            </li>

            <li>
              <Link
                to="/home"
                className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-white hover:text-blue   hover:rounded-lg hover:px-2  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/placed_student"
                className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-white hover:text-blue   hover:rounded-lg hover:px-2  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Placed Student
              </Link>
            </li>

            <li>
              <Link
                to="/preparation"
                className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-white hover:text-blue   hover:rounded-lg hover:px-2  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Preparation
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
