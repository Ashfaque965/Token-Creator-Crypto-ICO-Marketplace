// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenVesting is Ownable {
    IERC20 public token;
    
    struct VestingSchedule {
        uint256 totalAmount;
        uint256 released;
        uint256 startTime;
        uint256 cliffTime;
        uint256 duration;
    }

    mapping(address => VestingSchedule) public vestingSchedules;

    event TokensVested(address beneficiary, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function createVestingSchedule(
        address beneficiary,
        uint256 totalAmount,
        uint256 cliffSeconds,
        uint256 durationSeconds
    ) external onlyOwner {
        vestingSchedules[beneficiary] = VestingSchedule({
            totalAmount: totalAmount,
            released: 0,
            startTime: block.timestamp,
            cliffTime: block.timestamp + cliffSeconds,
            duration: durationSeconds
        });
    }

    function release() external {
        VestingSchedule storage vesting = vestingSchedules[msg.sender];
        require(vesting.totalAmount > 0, "No vesting schedule");

        uint256 vested = _vestedAmount(vesting);
        uint256 unreleased = vested - vesting.released;

        require(unreleased > 0, "Nothing to release");

        vesting.released += unreleased;
        token.transfer(msg.sender, unreleased);

        emit TokensVested(msg.sender, unreleased);
    }

    function _vestedAmount(VestingSchedule memory vesting) internal view returns (uint256) {
        if (block.timestamp < vesting.cliffTime) return 0;
        if (block.timestamp >= vesting.startTime + vesting.duration) {
            return vesting.totalAmount;
        }
        uint256 timePassed = block.timestamp - vesting.startTime;
        return (vesting.totalAmount * timePassed) / vesting.duration;
    }
}