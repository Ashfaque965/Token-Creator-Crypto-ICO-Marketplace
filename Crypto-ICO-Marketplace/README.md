
# 🪙 Token Creator & ICO Marketplace

![Banner](https://via.placeholder.com/1280x400/0A2540/00D4FF?text=Token+Creator+%26+ICO+Marketplace)

**A Full-Stack Decentralized Platform to Create ERC-20 Tokens and Launch Your Own ICO / Presale**

---

## ✨ Features

- ✅ **Dynamic Token Creator** – Deploy custom ERC-20 tokens instantly
- ✅ **ICO / Presale Smart Contract** – With full admin controls
- ✅ **Modern & Responsive UI** built with Next.js
- ✅ **Wallet Integration** – MetaMask & WalletConnect
- ✅ **Real-time Sale Progress** with live raised amount
- ✅ **Admin Dashboard** – Manage rate, pause/resume sale, withdraw funds
- ✅ **Referral System** (Ready)
- ✅ **Token Vesting** (Ready)
- ✅ **Multi-Chain Support** (Ethereum, Polygon, BSC, etc.)

---

## 🎥 Demo & Setup Video

**Watch Full Setup & Demo** → [Click Here](https://youtu.be/) <!-- Add your video link -->

---

## 🛠 Tech Stack

| Layer           | Technology                          |
|----------------|-------------------------------------|
| Frontend       | Next.js, React, Tailwind CSS        |
| Web3           | wagmi, viem, RainbowKit             |
| Smart Contracts| Solidity 0.8.20, OpenZeppelin      |
| Development    | Hardhat / Remix IDE                 |
| Network        | Polygon Amoy / Sepolia / Ethereum   |

---

## 📸 Screenshots

*(Add your actual screenshots here)*

![Token Creator Page](https://via.placeholder.com/800x450/1E3A8A/60A5FA?text=Token+Creator)
![ICO Marketplace](https://via.placeholder.com/800x450/312E81/818CF8?text=ICO+Marketplace)
![Admin Dashboard](https://via.placeholder.com/800x450/0F172A/64748B?text=Admin+Dashboard)

---

## Prerequisites

- Node.js **v18+**
- NPM or Yarn
- MetaMask Wallet
- Testnet Funds (Polygon Amoy recommended)

---

## Installation & Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ashfaque965/Token-Creator-Crypto-ICO-Marketplace.git
cd Token-Creator-Crypto-ICO-Marketplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create `.env.local` in the root folder:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# Contract Addresses (Update after deployment)
NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS=0x...
NEXT_PUBLIC_ICO_ADDRESS=0x...

NEXT_PUBLIC_RPC_URL=https://rpc-amoy.polygon.technology
```

### 4. Run the Project

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Smart Contract Deployment

### Option 1: Using Remix IDE (Easiest)

1. Deploy `TokenFactory.sol`
2. Use Factory to create new tokens
3. Deploy `ICO.sol` with your token address
4. Copy ABI and deployed addresses

### Option 2: Using Hardhat (Recommended for Production)

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygonAmoy
```

---

## Project Structure

```bash
├── contracts/
│   ├── CustomToken.sol
│   ├── TokenFactory.sol
│   ├── ICO.sol
│   └── TokenVesting.sol
├── components/
│   ├── TokenCreator.jsx
│   ├── BuyTokens.jsx
│   ├── AdminDashboard.jsx
│   ├── SaleProgress.jsx
│   └── TokenCard.jsx
├── pages/ or app/
├── utils/
│   └── abis.js
├── scripts/
│   └── deploy.js
├── hardhat.config.js
└── README.md
```

---

## Key Smart Contracts

- **CustomToken** – Standard + mintable ERC-20
- **TokenFactory** – One-click token deployment
- **ICO** – Presale with admin controls
- **TokenVesting** – Cliff + linear vesting

---

## Future Roadmap

- [ ] Auto Liquidity Pool (Uniswap / PancakeSwap)
- [ ] Full TypeScript Conversion
- [ ] User Portfolio Dashboard
- [ ] KYC / Whitelist Module
- [ ] Multi-token Payment (USDT, USDC)
- [ ] Airdrop & Staking
- [ ] Analytics & Charts

---

## Contributing

Pull requests are welcome! Feel free to fork and improve the project.

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Ashfaque Quraishi**

- GitHub: [Ashfaque965](https://github.com/Ashfaque965)

---

## ⭐ Support the Project

If this project helped you, please give it a **STAR** ⭐ and share it with the community!

---

**Built with ❤️ for Blockchain Developers & Entrepreneurs**

---

**Ready to launch your own ICO? Start building today!**
```

---

**How to use:**
1. Go to your GitHub repository
2. Click on `README.md`
3. Click the edit button (pencil icon)
4. Delete everything and paste the above content
5. Click **Commit changes**

Would you like me to add badges, more sections, or make it more marketing-oriented?
