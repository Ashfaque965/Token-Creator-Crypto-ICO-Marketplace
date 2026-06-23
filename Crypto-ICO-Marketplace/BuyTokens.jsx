'use client';
import { useState } from 'react';
import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { parseEther } from 'viem';

export default function BuyTokens({ icoAddress, abi }) {
  const { address } = useAccount();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const { writeContract } = useWriteContract();

  const buy = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      writeContract({
        address: icoAddress,
        abi,
        functionName: 'buyTokens',
        value: parseEther(amount),
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-2xl text-white">
      <h2 className="text-2xl font-bold mb-4">Buy Tokens</h2>
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 bg-gray-800 rounded-lg mb-4"
      />
      <button
        onClick={buy}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
}