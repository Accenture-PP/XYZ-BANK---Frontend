// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; 2024 XYZ Bank. All rights reserved.</p>
          <p className="text-sm">For inquiries, email: <a href="mailto:info@xyzbank.com" className="underline">info@xyzbank.com</a></p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          <a href="#privacy" className="text-sm hover:text-gray-200 transition duration-300">Privacy Policy</a>
          <a href="#terms" className="text-sm hover:text-gray-200 transition duration-300">Terms of Service</a>
          <a href="#contact" className="text-sm hover:text-gray-200 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
