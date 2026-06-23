// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ICO.sol";

contract ReferralICO is ICO {
    mapping(address => address) public referrers;
    mapping(address => uint256) public referralRewards;
    uint256 public referralPercent = 5; // 5%

    event ReferralBonus(address referrer, address referee, uint256 amount);

    function registerReferral(address referrer) external {
        require(referrer != msg.sender, "Cannot refer yourself");
        referrers[msg.sender] = referrer;
    }

    function buyTokens() external payable override {
        super.buyTokens();

        address referrer = referrers[msg.sender];
        if (referrer != address(0)) {
            uint256 bonus = (msg.value * referralPercent) / 100;
            referralRewards[referrer] += bonus;
            payable(referrer).transfer(bonus);
            emit ReferralBonus(referrer, msg.sender, bonus);
        }
    }

    function claimReferralReward() external {
        uint256 reward = referralRewards[msg.sender];
        require(reward > 0, "No reward");
        referralRewards[msg.sender] = 0;
        payable(msg.sender).transfer(reward);
    }
}