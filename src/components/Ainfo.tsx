import React, { useState , useEffect} from 'react';
import axios from 'axios';
interface AccountData {
  name: string;
  address: string;
  email: string;
  accountType: string;
  balance: number;
}

const Portfolio = () => {
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [loading, setLoading] = useState(true);
 
   useEffect(() => {
    // Fetch the account details from the backend API
    axios.get('http://localhost:8080/account/info')
      .then((response) => {
        setAccountData(response.data);
        console.log(accountData); // Store the fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  
  return (
    <div>
      <h1>Account Information</h1>
      <p><strong>Name:</strong> {accountData?.name}</p>
      <p><strong>Address:</strong> {accountData?.address}</p>
      <p><strong>Email:</strong> {accountData?.email}</p>
      <p><strong>Account Type:</strong> {accountData?.accountType}</p>
      <p><strong>Balance:</strong> ${accountData?.balance}</p>
    </div>
  );
};

export default Portfolio;