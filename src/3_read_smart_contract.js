const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://polygon-testnet-rpc.allthatnode.com:8545");

const ERC20_ABI = [
  "function name() view returns (string)",
  "function owner() view returns (address)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x5BF5241f5Ac7077aF27Da56b44d4C7876B960654"; // Address Contract (Testnet)
const contract = new ethers.Contract(address, ERC20_ABI, provider);


const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    const owner = await contract.owner();
    const decimal = await contract.decimals();

    const addressWallet = "0x74bC5640C7de5d5062C223F65447785a23b91CaB";
    const balance = await contract.balanceOf(addressWallet);

    console.log(`Read from contract address: ${address} \n`);
    console.log(`Name: ${name}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`TotalSupply: ${totalSupply}  Wei \n`);

    console.log(`Balance Return: ${balance} Wei`);
    console.log(`Balance Format: ${ethers.utils.formatEther(balance)} DMN \n`);

    console.log(`Owner: ${owner}`);
    console.log(`Decimal: ${decimal}`);

}

main();