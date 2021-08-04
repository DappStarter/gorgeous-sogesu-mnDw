require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind hospital guess clog tail genuine'; 
let testAccounts = [
"0xe2576802856032b94bec2a702c45005e7f76fa229a056cb9b6c6153a31ce7b60",
"0x2c13d2d91f9b79eac487d682df6a65f7d44402fd084828805aac0974ca517054",
"0x7ef50dcf67df084f699702665d495a5be6c4638657c5fb76d7d405ea8ec0a430",
"0x69e4a8cad1a4347071be38b74bb7a86dc1be79d689925ab133786b3ed79b6220",
"0x4a4a6bd44f37584365441d16543b2f9aa6bf3969288b0bae0326f5865a8081d1",
"0x324b57892ef90b70901fa9120270a953acb51aebf6687463859c427c91fb6730",
"0x90995fc6fd985a320cc7d5ae5f415ede75475b5dfc0ce361d31c6df0d74ec36f",
"0x2260fc66b5bb34edc179972889641324ea0d7a9f471811d00a31e8b3f6627ba8",
"0x6eb0c187845c0ce16b7743cf7d26790896820337e8edd3755df3f5531ad4360b",
"0xdee1b115cb66fcf7eed290e6337b7329e15b06a8bad80111fe81e4816537886a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

