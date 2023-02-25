const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');

const accountWallet = "0x8C3d8f7151571F4c7f427EF09ee2c5F0Ec357620";

const privateKey = "0xa8801c423ac9881c076d12702849cbfc6d45ce643a77c8d99a0f78f39f723efd"; // private key account 1
const wallet = new ethers.Wallet(privateKey, provider)

const ERC20_ABI = [
  "function transfer(address to, uint amount) view returns (bool)",
  "function balanceOf(address) view returns (uint)",
]

const address = "0x5BF5241f5Ac7077aF27Da56b44d4C7876B960654"; // Address Contract (Testnet)
const contract = new ethers.Contract(address, ERC20_ABI, wallet);

const main = async () => {


  const tx = await contract.transfer(accountWallet, ethers.utils.parseEther("10"));

  console.log(tx);

}

main()  