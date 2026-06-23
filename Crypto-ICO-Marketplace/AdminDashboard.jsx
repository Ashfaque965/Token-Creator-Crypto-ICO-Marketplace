'use client';
import { useState } from 'react';
import { useWriteContract, useReadContract, useAccount } from 'wagmi';

export default function AdminDashboard({ icoAddress, tokenAddress, abi }) {
  const { address } = useAccount();
  const [newRate, setNewRate] = useState('');
  const [saleStatus, setSaleStatus] = useState(true);

  const { writeContract } = useWriteContract();

  const updateRate = () => {
    writeContract({
      address: icoAddress,
      abi,
      functionName: 'setRate',
      args: [parseInt(newRate)],
    });
  };

  const toggleSale = () => {
    writeContract({
      address: icoAddress,
      abi,
      functionName: 'toggleSale',
      args: [!saleStatus],
    });
    setSaleStatus(!saleStatus);
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-3xl">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">Update Token Price</h3>
          <input
            type="number"
            placeholder="Tokens per ETH"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            className="w-full p-4 bg-gray-700 rounded-xl mb-4"
          />
          <button onClick={updateRate} className="w-full bg-yellow-500 py-4 rounded-xl font-bold">
            Update Rate
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">Sale Control</h3>
          <button
            onClick={toggleSale}
            className={`w-full py-4 rounded-xl font-bold text-lg ${saleStatus ? 'bg-red-600' : 'bg-green-600'}`}
          >
            {saleStatus ? 'Pause Sale' : 'Resume Sale'}
          </button>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-2xl">
        <button
          onClick={() => writeContract({ address: icoAddress, abi, functionName: 'withdraw' })}
          className="w-full bg-green-600 py-4 rounded-xl font-bold"
        >
          Withdraw Funds
        </button>
      </div>
    </div>
  );
}