import fs from 'fs-extra'

const CITIZENS = fs.readJsonSync('../src/mainnet-gc-EOA-citizens.json')
const tokenType = 'ERC721'
const tokenContract = '0x62108E1AC36a163A68B869d096cb14CE690ca30b' // CITIZEN on Gnosis Chain
const quantity = '1'
let RECIPIENTS = ""

CITIZENS.map(({wallet, tokenID}) => {
  RECIPIENTS += `${tokenType},${tokenContract},${wallet},${quantity},${tokenID}\n`
})

fs.outputFileSync("./output/NFT-CSV-AIRDROP.txt", RECIPIENTS);