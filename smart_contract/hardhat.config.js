require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/gPRN-mLE6GPaul-ZAiEZ5dNIVLfKXcv9",
      accounts: [
        "ec3aa59f7f9d5570a8ec8df3b7faad5f875787910c05351a2205fda489ca4ff8",
      ],
    },
  },
};
