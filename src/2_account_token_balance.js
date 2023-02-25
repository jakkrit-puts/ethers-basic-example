const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet-rpc.allthatnode.com:8545");

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
];

const address = "0x5BF5241f5Ac7077aF27Da56b44d4C7876B960654"; // Address Contract (Testnet)
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () =>  {

    const addressWallet = "0x74bC5640C7de5d5062C223F65447785a23b91CaB"; 
  
    const balance = await contract.balanceOf(addressWallet);
    console.log("DMN Balance:", ethers.utils.formatEther(balance)); // DOMINO Token
    
}

main()