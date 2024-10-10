import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import xyzb from "../assets/xyzb.jpg";
import smbc from "../assets/smbc.png";
import office from "../assets/smbank.png";
import finglobe from "../assets/finglobe.png";
import LoginCard from "../components/LoginCard";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual authentication logic
    navigate("/portfolio");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 flex justify-center items-center">
      {/* Setting up a responsive font and background color scheme using Tailwind */}
      <style>
        {`
        :root {
          --tw-font-inter: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          margin: 0;
          display: flex;
          place-items: center;
          min-width: 320px;
          min-height: 100vh;
        }
        a {
          font-weight: 500;
          color: #646cff;
        }
        a:hover {
          color: #535bf2;
        }
        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          cursor: pointer;
          transition: border-color 0.25s;
        }
        button:hover {
          border-color: #646cff;
        }
        `}
      </style>
      
      <div className="relative w-full max-w-5xl p-6">
        <div
          className="grid place-items-center items-start"
         
        >
          {/* Content Box */}
          <div
            className="relative text-center p-5 bg-white shadow-lg rounded-lg w-full max-w-[800px] h-[500px]"
            style={{
              backgroundImage: `url(${office})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Top Section with Logo */}
            <div className="flex justify-between items-start">
              <div className="w-[200px]">
                <img src={xyzb} alt="E-Moneyger Logo" className="mb-6" />
              </div>
              <div className="w-1/3">
                <img src={smbc} alt="SMBC Logo" className="w-[100px] h-[50px]" />
              </div>
            </div>
            {/* Form Login Section */}
            <div>
              <LoginCard handleLogin={handleLogin} />
            </div>

            {/* Bottom Section */}
            <div className="text-left text-gray-300 mt-12 font-bold text-[11px] flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 p-4">
              <div>
                <p>SMBC BANK INTERNATIONAL PLC</p>
                <p>Authorised by the Prudential Regulation Authority and regulated by</p>
                <p>the Financial Conduct Authority and the Prudential Regulation Authority</p>
              </div>
              <div className="text-center">
                <p>BANCO SUMITOMO</p>
                <p>MITSUI BRASILEIRO S.A.</p>
              </div>
              <div className="text-right">
                <p>| SUMITOMO MITSUI BANKING</p>
                <p>CORPORATION CANADA BRANCH</p>
              </div>
            </div>

            {/* Logo at the bottom */}
            <div className="mt-6 flex justify-start">
              <img src={finglobe} alt="FinGLOBE Logo" className="w-[150px] h-auto" />
            </div>

            {/* Legal Disclaimer */}
            <div className="mt-3 text-xs text-gray-300 text-center">
              <p>
                E-Moneyger<sup>®</sup> is restricted to authorized users only.
                Individuals attempting unauthorized access will be prosecuted.
                Any information obtained from monitoring activity within
                E-Moneyger<sup>®</sup> may be used to investigate and prosecute
                criminal or possible criminal activity.
              </p>
              <p className="mt-4">
                Learn more about{" "}
                <a href="#" className="text-yellow-400 hover:underline">
                  Security
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
