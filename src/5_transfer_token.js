 
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-testnet-rpc.allthatnode.com:8545`)

const account1 = '0x74bC5640C7de5d5062C223F65447785a23b91CaB' // account address 1
const account2 = '0x8C3d8f7151571F4c7f427EF09ee2c5F0Ec357620' // account address 2

const privateKey1 = '0xa8801c423ac9881c076d12702849cbfc6d45ce643a77c8d99a0f78f39f723efd' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x5BF5241f5Ac7077aF27Da56b44d4C7876B960654'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nContract Address: ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, ethers.utils.parseEther("5000"))
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`sender DMN: ${balanceOfSender}`)
    console.log(`reciever DMN: ${balanceOfReciever}\n`)
}

main()