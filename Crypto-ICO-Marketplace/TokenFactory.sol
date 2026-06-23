// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CustomToken.sol";

contract TokenFactory {
    event TokenCreated(address tokenAddress, string name, string symbol, address owner);

    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) external returns (address) {
        CustomToken newToken = new CustomToken(name, symbol, initialSupply, msg.sender);
        
        emit TokenCreated(address(newToken), name, symbol, msg.sender);
        return address(newToken);
    }
}