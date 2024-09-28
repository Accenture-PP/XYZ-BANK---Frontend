// src/components/Portfolio.tsx

import React from 'react';
import { Portfolio as PortfolioType } from '../interface'; // Adjust path as necessary

interface PortfolioProps {
  portfolio: PortfolioType | null;
}

const PortfolioComponent: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <div className="mt-10 max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Portfolio Information</h2>
      {portfolio ? (
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-semibold">{portfolio.name}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold">{portfolio.email}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-semibold">{portfolio.address}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Checking Account Name</p>
              <p className="text-lg font-semibold">{portfolio.checkingAccountName}</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Savings Balance</p>
            <p className="text-2xl font-bold text-green-600">${portfolio.savingsBalance.toFixed(2)}</p>
          </div>

          <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Bank Name</p>
            <p className="text-lg font-semibold">{portfolio.bankName}</p>
          </div>

          <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Investments</p>
            <p className="text-lg font-semibold">{portfolio.investments.join(', ')}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">No portfolio information available.</p>
      )}
    </div>
  );
};

export default PortfolioComponent;
