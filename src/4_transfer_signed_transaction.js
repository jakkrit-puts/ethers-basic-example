const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-testnet-rpc.allthatnode.com:8545`)

const privateKey = '0xa8801c423ac9881c076d12702849cbfc6d45ce643a77c8d99a0f78f39f723efd' // private key of account 1
const wallet = new ethers.Wallet(privateKey, provider)

const address = "0x8C3d8f7151571F4c7f427EF09ee2c5F0Ec357620"  // account 2

const main = async () => {

    const tx = await wallet.sendTransaction({
        to: address,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait()
    console.log(`Transaction Hash: ${tx.hash}`)

    const balance = await provider.getBalance(address);
    console.log(`MATIC Balance Address ${address} :`, ethers.utils.formatEther(balance));

}

main()