export default function TokenCard({ token }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all">
      <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-6xl font-bold text-white/90">{token.symbol}</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-1">{token.name}</h3>
        <p className="text-blue-400 text-xl mb-6">{token.symbol}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Price</span>
            <span className="font-medium">{token.price} ETH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Raised</span>
            <span className="font-medium">{token.raised} ETH</span>
          </div>
        </div>

        <button className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
          View & Buy
        </button>
      </div>
    </div>
  );
}