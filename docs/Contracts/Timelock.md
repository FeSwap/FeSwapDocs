---
id: Timelock
title: FeSwap TimeLock Contract
hide_title: true
sidebar_label: TimeLock
hide_table_of_contents: true
---

<div  className="title">
  <h1> FeSwap TimeLock Contract </h1>
</div>

_______________________

FeSwap `TimeLock` contract is the contract used to finally execute the proposals that win the voting successfully. Only the [`FeswGovernor`](FeswGovernor.md) contract can call `TimeLock` to queue/excute the proposal. 

### <span className="title"> Timelock Address </span>

| ETH NetWork | FESW Token Address |
| :---------: | :----------------: |
| ETH Mainnet |  [0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1](https://etherscan.io/address/0xd24347c40f4ed36f326f82e3befffaf3b8d436a1)  |
| ETH Testnet Ropsten | [0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB](https://ropsten.etherscan.io/address/0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB) |
| ETH Testnet Rinkeby | [0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB](https://rinkeby.etherscan.io/address/0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB)|
| ETH Testnet Goerli | [0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB](https://goerli.etherscan.io/address/0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB)|
| ETH Testnet Kovan | [0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB](https://kovan.etherscan.io/address/0xFA2Dbaa137b3Bd13d8f1758311Ae909397EC18AB) |

### <span className="title"> Timelock Deployments Parameters </span>

- ** constructor(address admin\_, uint delay\_) **

| Parameters | Value  |  information |
| :--------- | :---------------- | :-------- |
| admin\_ |  [0x77F98c147a37564c32E48054Bff7692A1F97f343](https://etherscan.io/address/0x77F98c147a37564c32E48054Bff7692A1F97f343) | This is the address of [FeSwap Governance](../Contracts/FeswGovernor) contract, which is the only entity that can operate Timelock contract. |
| delay\_ | 0x2a300 | This is the minimum duration the proposal must wait after it has been queued to be executed. This measure is for security considerraions. <br/> 0x2a300 means 172800 seconds, ie. 2 days |

*** Parameters on ETH Chain *

### <span className="title"> Timelock Contract Code </span>

FeSwap `Timelock` code is open-sourced at [Github FeSwapCore Project](https://github.com/FeSwap/Governance/blob/main/contracts/Timelock.sol) 

Following is the code deployed:

```sol title="Timelock.sol"
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

import "./utils/SafeMath.sol";

contract Timelock {
    using SafeMath for uint;

    event NewAdmin(address indexed newAdmin);
    event NewPendingAdmin(address indexed newPendingAdmin);
    event NewDelay(uint indexed newDelay);
    event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint eta);
    event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint eta);
    event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint eta);

    uint public constant GRACE_PERIOD = 14 days;
    uint public constant MINIMUM_DELAY = 2 days;
//  uint public constant MINIMUM_DELAY = 10 minutes;        // for on-chain test
    uint public constant MAXIMUM_DELAY = 30 days;

    address public admin;
    address public pendingAdmin;
    uint public delay;

    mapping (bytes32 => bool) public queuedTransactions;

    constructor(address admin_, uint delay_) {
        require(delay_ >= MINIMUM_DELAY, "Timelock::constructor: Delay must exceed minimum delay.");
        require(delay_ <= MAXIMUM_DELAY, "Timelock::setDelay: Delay must not exceed maximum delay.");

        admin = admin_;
        delay = delay_;
    }

    receive() external payable { }  

    function setDelay(uint delay_) public {
        require(msg.sender == address(this), "Timelock::setDelay: Call must come from Timelock.");
        require(delay_ >= MINIMUM_DELAY, "Timelock::setDelay: Delay must exceed minimum delay.");
        require(delay_ <= MAXIMUM_DELAY, "Timelock::setDelay: Delay must not exceed maximum delay.");
        delay = delay_;

        emit NewDelay(delay);
    }

    function acceptAdmin() public {
        require(msg.sender == pendingAdmin, "Timelock::acceptAdmin: Call must come from pendingAdmin.");
        admin = msg.sender;
        pendingAdmin = address(0);

        emit NewAdmin(admin);
    }

    function setPendingAdmin(address pendingAdmin_) public {
        require(msg.sender == address(this), "Timelock::setPendingAdmin: Call must come from Timelock.");
        pendingAdmin = pendingAdmin_;

        emit NewPendingAdmin(pendingAdmin);
    }

    function queueTransaction(address target, uint value, string memory signature, bytes memory data, uint eta) public returns (bytes32) {
        require(msg.sender == admin, "Timelock::queueTransaction: Call must come from admin.");
       
        require(eta >= getBlockTimestamp().add(delay), "Timelock::queueTransaction: Estimated execution block must satisfy delay.");

        bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
        queuedTransactions[txHash] = true;

        emit QueueTransaction(txHash, target, value, signature, data, eta);
        return txHash;
    }

    function cancelTransaction(address target, uint value, string memory signature, bytes memory data, uint eta) public {
        require(msg.sender == admin, "Timelock::cancelTransaction: Call must come from admin.");

        bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
        queuedTransactions[txHash] = false;

        emit CancelTransaction(txHash, target, value, signature, data, eta);
    }

    function executeTransaction(address target, uint value, string memory signature, bytes memory data, uint eta) public payable returns (bytes memory) {
        require(msg.sender == admin, "Timelock::executeTransaction: Call must come from admin.");

        bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));
        require(queuedTransactions[txHash], "Timelock::executeTransaction: Transaction hasn't been queued.");
        require(getBlockTimestamp() >= eta, "Timelock::executeTransaction: Transaction hasn't surpassed time lock.");
        require(getBlockTimestamp() <= eta.add(GRACE_PERIOD), "Timelock::executeTransaction: Transaction is stale.");

        queuedTransactions[txHash] = false;

        bytes memory callData;

        if (bytes(signature).length == 0) {
            callData = data;
        } else {
            callData = abi.encodePacked(bytes4(keccak256(bytes(signature))), data);
        }

        // solium-disable-next-line security/no-call-value
        (bool success, bytes memory returnData) = target.call{value:value}(callData);
        require(success, "Timelock::executeTransaction: Transaction execution reverted.");

        emit ExecuteTransaction(txHash, target, value, signature, data, eta);

        return returnData;
    }

    function getBlockTimestamp() internal view returns (uint) {
        // solium-disable-next-line security/no-block-members
        return block.timestamp;
    }
}
```