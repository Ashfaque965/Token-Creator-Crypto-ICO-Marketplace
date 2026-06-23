'use client';
import { useReadContract } from 'wagmi';
import { useEffect, useState } from 'react';

export default function SaleProgress({ icoAddress, abi }) {
  const [raised, setRaised] = useState(0);
  const [target] = useState(100); // Example: 100 ETH hard cap

  const { data: totalRaised } = useReadContract({
    address: icoAddress,
    abi,
    functionName: 'totalRaised',
  });

  useEffect(() => {
    if (totalRaised) setRaised(Number(totalRaised) / 1e18);
  }, [totalRaised]);

  const progress = Math.min((raised / target) * 100, 100);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-3xl text-white">
      <div className="flex justify-between mb-4">
        <h3 className="text-2xl font-bold">ICO Progress</h3>
        <span className="text-lg">{raised.toFixed(2)} / {target} ETH</span>
      </div>

      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-sm mt-3">
        <span>{progress.toFixed(1)}% Raised</span>
        <span>Hard Cap: {target} ETH</span>
      </div>
    </div>
  );
}