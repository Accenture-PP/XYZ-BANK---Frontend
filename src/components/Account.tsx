// src/components/Account.tsx

import React from 'react';
import { Account } from '../interface'; // Adjust path as necessary

interface AccountProps {
  account: Account | null;
}

const AccountComponent: React.FC<AccountProps> = ({ account }) => {
  return (
    <div className="mt-10 max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Account Information</h2>
      {account ? (
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Account Holder</p>
              <p className="text-lg font-semibold">{account.name}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold">{account.email}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-semibold">{account.address}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Account Type</p>
              <p className="text-lg font-semibold">{account.accountType}</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gray-100 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Balance</p>
            <p className="text-2xl font-bold text-green-600">${account.balance.toFixed(2)}</p>
          </div>

          {/* Boxes for Transactions, Deposit, and Withdrawal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-blue-100 rounded-md shadow-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-700 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m7 7l-7-7 7-7"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-700">Transactions</p>
            </div>

            <div className="p-6 bg-green-100 rounded-md shadow-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-700 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-700">Deposit</p>
            </div>

            <div className="p-6 bg-red-100 rounded-md shadow-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-700 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4m16 0l-8-8m8 8l-8 8"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-700">Withdrawal</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">No account information available.</p>
      )}
    </div>
  );
};

export default AccountComponent;
