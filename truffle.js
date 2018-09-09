require('dotenv').config();

//HD Wallet for keyless servers (infura)
const HDWalletProvider = require("truffle-hdwallet-provider");
const TestRPC = require("ganache-cli");

let provider

function getProvider(rpcUrl) {
  if (!provider) {
    provider = new HDWalletProvider(process.env.KOVAN_MNEMONIC, rpcUrl + process.env.INFURA_API_KEY)
    // provider = new HDWalletProvider(process.env.MNEMONIC, rpcUrl + process.env.INFURA_API_KEY)
  }
  return provider
}


module.exports = {
  networks: {
    development: {
      get provider() {
        if (!provider) {
          provider = TestRPC.provider({total_accounts: 25})
        }
        return provider
      },
      network_id: "*"
    },
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      get provider() {
        return getProvider("https://ropsten.infura.io/")
      },
      gas: 4004580,
      network_id: 3
    },
    rinkeby: {
      get provider() {
        return getProvider("https://rinkeby.infura.io/")
      },
      network_id: 4
    },
    infuranet: {
      get provider() {
        return getProvider("https://infuranet.infura.io/")
      },
      network_id: "*"
    },
    kovan: {
      get provider() {
        return getProvider("https://kovan.infura.io/")
      },
      // gas: 4004580,
      network_id: 42
    },
    mainnet: {
      get provider() {
        return getProvider("https://mainnet.infura.io/")
      },
      gas: 1704580,
      gasPrice: 1000000000,
      network_id: 1
    }
  }
};
