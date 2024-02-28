import React from 'react'

import { useState } from 'react';

const AuthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => {
    // Handle the selected action (Sign In, Sign Up User, or Sign Up Admin)
    console.log(`Clicked ${action}`);
    // You can perform further actions here, like showing the corresponding form.
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Sign In / Sign Up
        {/* Arrow */}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 19a1 1 0 01-.707-.293l-9-9a1 1 0 010-1.414l9-9a1 1 0 111.414 1.414L3.414 10l7.293 7.293a1 1 0 01-.707 1.707z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Sign In */}
            <button
              onClick={() => handleItemClick('Sign In')}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Sign In
            </button>
            {/* Sign Up User */}
            <button
              onClick={() => handleItemClick('Sign Up User')}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Sign Up User
            </button>
            {/* Sign Up Admin */}
            <button
              onClick={() => handleItemClick('Sign Up Admin')}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
              role="menuitem"
            >
              Sign Up Admin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthDropdown;


