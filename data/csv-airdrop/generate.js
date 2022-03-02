import fs from 'fs-extra'

const CITIZENS = fs.readJsonSync('../src/citizens.json')
const tokenType = 'ERC721'
const tokenContract = '0x00000000000000000000000000'
const quantity = '1'


let RECIPIENTS = ""

CITIZENS.map(({wallet, tokenID}) => {
  RECIPIENTS += `${tokenType},${tokenContract},${wallet},${quantity},${tokenID}\n`
})

fs.outputFileSync("./output/NFT-CSV-AIRDROP.txt", RECIPIENTS);