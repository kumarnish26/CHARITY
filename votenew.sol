// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GasEfficientCharityVoting is ERC20, Ownable {
    struct Charity {
        address payable wallet;  
        uint96 votes;          
        uint96 totalFunds;      
        bool approved;
    }
    
    uint256 public constant MIN_DONATION = 1 wei;
    
    Charity[] public charities;
    string[] private _charityNames;

    event DonationReceived(address indexed donor, uint256 amount);
    event Voted(address indexed voter, uint256 charityId, uint256 amount);
    event FundsReleased(uint256 indexed charityId, uint256 amount);
    event CharityAdded(uint256 indexed charityId, address wallet);
    event CharityApproved(uint256 indexed charityId);

    constructor() ERC20("Charity Voting Token", "CVT") Ownable(msg.sender) {}

    function donate() external payable {
        assembly {
            if lt(callvalue(), MIN_DONATION) {
                mstore(0x00, 0x08c379a0) 
                mstore(0x04, 0x20)        
                mstore(0x24, 15)         
                mstore(0x44, "Minimum donation")
                revert(0x00, 0x64)
            }
        }
        
        _mint(msg.sender, msg.value);
        emit DonationReceived(msg.sender, msg.value);
    }
    
    function vote(uint256 charityId, uint256 amount) external {
        require(charityId < charities.length, "Invalid charity");
        Charity storage charity = charities[charityId];
        require(charity.approved, "Charity not approved");
        
        _burn(msg.sender, amount);
        unchecked {
            charity.votes += uint96(amount);
        }
        
        emit Voted(msg.sender, charityId, amount);
    }
    
    function releaseFunds(uint256 charityId) external onlyOwner {
        Charity storage charity = charities[charityId];
        require(charity.approved, "Charity not approved");
        
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to release");
        
        uint256 amount = balance >> 1;
        unchecked {
            charity.totalFunds += uint96(amount);
        }
        
        (bool success, ) = charity.wallet.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit FundsReleased(charityId, amount);
    }
    
 function addCharity(address payable wallet, string memory name) external onlyOwner {
    uint256 index = charities.length; 

   
    Charity storage newCharity = charities.push();
    newCharity.wallet = wallet;
    newCharity.votes = 0;
    newCharity.totalFunds = 0;
    newCharity.approved = false;

    _charityNames.push(name);

    emit CharityAdded(index, wallet);
}

    
    function approveCharity(uint256 charityId) external onlyOwner {
        require(charityId < charities.length, "Invalid charity");
        charities[charityId].approved = true;
        
        emit CharityApproved(charityId);
    }
    
    function getCharitiesCount() external view returns (uint256) {
        return charities.length;
    }
    
    function getCharityInfo(uint256 charityId) external view returns (
        address wallet,
        uint256 votes,
        uint256 totalFunds,
        bool approved,
        string memory name
    ) {
        Charity storage charity = charities[charityId];
        return (
            charity.wallet,
            charity.votes,
            charity.totalFunds,
            charity.approved,
            _charityNames[charityId]
        );
    }
}