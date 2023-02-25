const { ethers } = require('ethers')
const fs = require('fs');

const main = async () => {

    const wallet = ethers.Wallet.createRandom();

    console.log("Wallet Address: ", wallet.address)
    console.log("Mnemonic (phrase): ", wallet.mnemonic.phrase)
    console.log("PrivateKey: ", wallet.privateKey)


    const content = `
wallet_address: ${wallet.address},
phrase: ${wallet.mnemonic.phrase},
privatekey: ${wallet.privateKey}
`

    try {
      fs.writeFileSync('./wallet.txt', content);
      console.log('--  write file success. --');
    } catch (err) {
      console.error(err);
    }
  
}

main()
