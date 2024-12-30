module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost for Ganache
      port: 7545,            // Ganache's default port
      network_id: "*",       // Match any network ID
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./build/contracts/",
  compilers: {
    solc: {
      version: "0.8.0",       // Match your Solidity version
    },
  },
};
