var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = "cliff coach wine shift foil icon clap push online disease baby thumb";
const infura = 'https://rinkeby.infura.io/v3/8cf6c3c75c7a49c69a48b06383e0eb95'

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas : 6700000,
      gasPrice : 10000000000
    },
  }
};