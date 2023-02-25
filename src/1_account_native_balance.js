const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet-rpc.allthatnode.com:8545");  // polygon testnet

const main = async () =>  {

    const addressWallet = "0x74bC5640C7de5d5062C223F65447785a23b91CaB";
  
    const balance = await provider.getBalance(addressWallet);
    console.log("MATIC Balance:", ethers.utils.formatEther(balance));
    
}

main()