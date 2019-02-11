Project overview
Build additional functionality with your smart contract and deploy it on the public testnet to create a DApp.

Project specification
https://review.udacity.com/#!/rubrics/2297/view

Specify the Truffle version and OpenZeppelin version used in the project.
ERC-721 Token Name - "Santhosh Notary Star Token"
ERC-721 Token Symbol - "SNST"
“Token Address” on the Rinkeby Network - 0x4863554315F3c505a1520eb7206a934e9b2041d2

Command used to deploy to Rinkeby truffle migrate --reset --network rinkeby

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xb68c886ac4c2a9d484c3838d61d4c9c7955fa15050fc18c388bb9cc93c0fa5c2
  Migrations: 0x8cdaf0cd259887258bc13a92c0a6da92698644c0
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying StarNotary...
  ... 0x8c484cca95b1d3c41b0a2674fbc2777b2936440114447ab26847c77b80fa3eab
  StarNotary: 0xf12b5dd4ead5f743c6baa640b0216200e89b60da
Saving artifacts...

contract address
0x4863554315F3c505a1520eb7206a934e9b2041d2 https://rinkeby.etherscan.io/address/0x4863554315f3c505a1520eb7206a934e9b2041d2

star tokenId
1
star Name
Test

Once installed, go into your cloned directory, and run:
npm install

For starting the development console, run:
truffle develop

For compiling the contract, inside the development console, run:
compile

For running unit tests the contract, inside the development console, run:
test

For migrating the contract to the locally running ethereum network, inside the development console, run:
migrate --reset

For running the Front End of the DAPP, open another terminal window and go inside the project directory, and run:
npm run dev

Open the DAPP in Browser http://localhost:8080/


Udacity honor code
Giving credits for places that helped me to do this project

Udacity concepts section
Udacity Decentralized Star Notary Project