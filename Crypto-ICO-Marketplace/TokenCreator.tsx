'use client';
import { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { parseEther } from 'viem';

export default function TokenCreator() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [supply, setSupply] = useState('');

  const { writeContract } = useWriteContract();

  const createToken = () => {
    // Call your factory contract deploy function
    writeContract({
      address: 'YOUR_FACTORY_ADDRESS',
      abi: [/* ABI */],
      functionName: 'createToken',
      args: [name, symbol, BigInt(supply)],
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Token</h2>
      {/* Form inputs */}
      <button onClick={createToken} className="bg-blue-600 text-white px-6 py-3 rounded">
        Deploy Token
      </button>
    </div>
  );
}