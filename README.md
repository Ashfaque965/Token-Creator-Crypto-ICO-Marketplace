
# 🪙 Token Creator & ICO Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**A modern decentralized platform to create custom ERC-20 tokens and launch your own ICO/Presale campaigns on Ethereum & Polygon.**

---

## Overview

**Token Creator & ICO Marketplace** is a complete full-stack DApp that allows anyone to:
- Deploy their own ERC-20 tokens instantly
- Launch professional ICO/Presale campaigns
- Manage sales with powerful admin controls

Built for developers, entrepreneurs, and blockchain enthusiasts who want to launch tokens and raise funds efficiently.

---

## ✨ Key Features

- **One-Click Token Creation** with custom name, symbol, and supply
- **Fully Functional ICO Contract** with rate control, limits, and pause functionality
- **Beautiful & Responsive UI** powered by Next.js + Tailwind CSS
- **Secure Wallet Integration** (MetaMask & WalletConnect)
- **Live Sale Progress** with real-time stats
- **Admin Dashboard** – Update rates, pause/resume sale, withdraw funds
- **Ready-to-Use Contracts**: Token Factory, Vesting, Referral System
- **Multi-Chain Ready** (Polygon, Ethereum, Base, etc.)

---

## 🖼 Screenshots

*(Add your project screenshots here)*

<div align="center">
  <img src="https://via.placeholder.com/800x450/1E3A8A/60A5FA?text=Token+Creator" alt="Token Creator" width="400">
  <img src="https://via.placeholder.com/800x450/312E81/818CF8?text=ICO+Marketplace" alt="ICO Page" width="400">
  <img src="https://via.placeholder.com/800x450/0F172A/64748B?text=Admin+Dashboard" alt="Admin Dashboard" width="400">
</div>

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Web3 Library**: wagmi + viem + RainbowKit
- **Smart Contracts**: Solidity v0.8.20 + OpenZeppelin
- **Development**: Hardhat / Remix IDE
- **Styling**: Tailwind CSS

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/Ashfaque965/Token-Creator-Crypto-ICO-Marketplace.git
cd Token-Creator-Crypto-ICO-Marketplace
npm install
```

### 2. Setup Environment

Create `.env.local` file:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS=0x...
NEXT_PUBLIC_ICO_ADDRESS=0x...
```

### 3. Run Locally

```bash
npm run dev
```

Visit → `http://localhost:3000`

---

## Smart Contract Deployment

**Recommended Networks**: Polygon Amoy or Sepolia

### Using Remix (Beginner Friendly)
- Deploy `TokenFactory.sol`
- Create tokens using the factory
- Deploy `ICO.sol` with token address

### Using Hardhat (Recommended)

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygonAmoy
```

---

## Project Structure

```bash
├── contracts/           # All Solidity contracts
├── components/          # Reusable React components
├── app/ or pages/       # Next.js pages & routing
├── utils/               # ABIs and helper functions
├── scripts/             # Deployment scripts
├── public/              # Static assets
└── hardhat.config.js
```

---

## Roadmap

- [x] Token Factory & ICO Core
- [x] Admin Dashboard
- [x] Sale Progress UI
- [ ] Auto Liquidity Pool Integration
- [ ] User Investment Dashboard
- [ ] Vesting & Cliff System
- [ ] Multi-token Payments (USDT/USDC)
- [ ] Full TypeScript Migration

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Author

**Ashfaque Quraishi**

- GitHub: [@Ashfaque965](https://github.com/Ashfaque965)

---

⭐ **If you found this project helpful, please give it a star!**

---

**Ready to launch your next big token? Start building now!** 🚀
