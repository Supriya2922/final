require("@nomiclabs/hardhat-waffle");


const fs=require("fs") //allows us to read from local file system
const privateKey=fs.readFileSync(".secret").toString()
const projectId ="5hDSqTS6_nBHtaTjuxBT1gcr3J-6z3BS"



//https://jc2vzfqdxuwn.usemoralis.com:2053/server
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    //mumbai:{
    //  url:`https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
    //  accounts:[privateKey]
   // },
    

  },
  solidity: "0.8.4",
};

