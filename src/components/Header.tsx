// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  onTabClick: (tab: string) => void; // Function prop to handle tab clicks
}

const Header: React.FC<HeaderProps> = ({ onTabClick }) => {
  return (
    <div className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          {/* Menu Icon */}
          <button className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Bank Title */}
        <h1 className="text-xl font-bold">XYZ BANK</h1>

        {/* Tabs with Icons */}
        <div className="flex space-x-6">
          {/* Portfolio Tab */}
          <button
            onClick={() => onTabClick('portfolio')}
            className="flex items-center hover:text-gray-200 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3h12a1 1 0 011 1v2H5V4a1 1 0 011-1zm1 14v5a1 1 0 001 1h8a1 1 0 001-1v-5m-9 0V8a1 1 0 011-1h8a1 1 0 011 1v9"
              />
            </svg>
            Portfolio
          </button>

          {/* Account Tab */}
          <button
            onClick={() => onTabClick('account')}
            className="flex items-center hover:text-gray-200 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A4.992 4.992 0 0112 15a4.992 4.992 0 016.879 2.804m-6.879 2.196h0a4.992 4.992 0 01-6.879-2.804m6.879 2.196a4.992 4.992 0 006.879-2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
