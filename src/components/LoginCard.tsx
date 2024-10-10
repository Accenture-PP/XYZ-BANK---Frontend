import React from 'react';

interface LoginCardProps {
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void; // Adjust the type based on your handleLogin function signature
}

const LoginCard: React.FC<LoginCardProps> = ({ handleLogin }) => {
  return (
    <div className="mt-8 flex justify-end">
      <div className="bg-gray-800 bg-opacity-70 p-2 rounded-md shadow-lg w-[300px]">
        <h2 className="text-xs text-left text-white font-bold mb-2 bg-gray-700 p-2 rounded-md">
          Please log in.
        </h2>
        <form onSubmit={handleLogin}>
          <div className="flex items-center space-x-2 p-4">
            <label className="text-white text-xs" htmlFor="username">
              UserName:
            </label>
            <input
              type="text"
              name="username"
              className="w-[100px] h-[30px] text-black p-2 border rounded-md focus:outline-none focus:ring-2 focus:border-blue-500"
              placeholder="Enter"
            />
            <button
              type="submit"
              className="bg-green-500 h-[30px] text-white rounded hover:bg-blue-600 transition flex items-center justify-center"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
