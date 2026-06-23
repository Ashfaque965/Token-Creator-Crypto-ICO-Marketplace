// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ICO is Ownable, ReentrancyGuard {
    IERC20 public token;
    uint256 public rate; // tokens per ETH
    uint256 public minPurchase;
    uint256 public maxPurchase;
    uint256 public totalRaised;
    bool public saleActive;

    mapping(address => uint256) public contributions;

    event TokensPurchased(address buyer, uint256 amountETH, uint256 tokens);

    constructor(address _token, uint256 _rate, uint256 _min, uint256 _max) {
        token = IERC20(_token);
        rate = _rate;
        minPurchase = _min;
        maxPurchase = _max;
        saleActive = true;
    }

    function buyTokens() external payable nonReentrant {
        require(saleActive, "Sale not active");
        require(msg.value >= minPurchase, "Below min purchase");
        uint256 tokens = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokens, "Insufficient tokens");

        contributions[msg.sender] += msg.value;
        totalRaised += msg.value;

        token.transfer(msg.sender, tokens);
        emit TokensPurchased(msg.sender, msg.value, tokens);
    }

    function setRate(uint256 _newRate) external onlyOwner {
        rate = _newRate;
    }

    function toggleSale(bool _status) external onlyOwner {
        saleActive = _status;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Add more: vesting, whitelisting, etc.
}