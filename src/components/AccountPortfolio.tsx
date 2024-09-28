// src/components/AccountPortfolio.tsx

import React, { useState, useEffect } from 'react';
import { Account, Portfolio as PortfolioType } from '../interface'; // Importing the types
import axios from 'axios';
import AccountComponent from './Account'; // Import the Account component
import PortfolioComponent from './Portfolio'; // Import the Portfolio component
import Header from './Header'; // Import the Header component

const AccountPortfolio: React.FC = () => {
  const [account, setAccount] = useState<Account | null>(null); // Specify type for state
  const [portfolio, setPortfolio] = useState<PortfolioType | null>(null); // Specify type for state
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('portfolio'); // State to track active tab

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axios.get<Account>('http://localhost:8080/account/info'); // Specify expected response type
        setAccount(response.data);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };

    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get<PortfolioType>('http://localhost:8080/portfolio/details'); // Specify expected response type
        setPortfolio(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data", error);
      }
    };

    // Call both API functions
    Promise.all([fetchAccountData(), fetchPortfolioData()]).finally(() => {
      setLoading(false);
    });
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-gray-100 min-h-screen">
      <Header onTabClick={handleTabClick} /> {/* Pass the click handler to Header */}
      {activeTab === 'portfolio' && <PortfolioComponent portfolio={portfolio} />} {/* Render Portfolio component */}
      {activeTab === 'account' && <AccountComponent account={account} />} {/* Render Account component */}
    </div>
  );
};

export default AccountPortfolio;
