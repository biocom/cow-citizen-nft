pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CowCitizen is ERC721A, Pausable, Ownable {
    constructor() ERC721A("Cow Citizen", "CIT") {}

    // Mint quantity to contract owner
    function mint(uint256 quantity) external onlyOwner {
        _safeMint(msg.sender, quantity);
    }

    // Mint quantity to recipient address
    function safeMint(address to, uint256 quantity) external onlyOwner {
        _safeMint(to, quantity);
    }
}
