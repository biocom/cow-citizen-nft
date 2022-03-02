import fs from 'fs-extra'
import { Citizens } from './citizens.js'

let RECIPIENTS = ""

Citizens.map(({wallet, tokenID}) => {
  // RECIPIENTS += `_safeMint(${wallet}, 1);\n`
  // RECIPIENTS += `${wallet},''\n`
  // RECIPIENTS += `${wallet}\n`
  RECIPIENTS += `ERC721,0x015780415e2FFdB7480D82e1ac8BD03EDDCec607,${wallet},1,${tokenID}\n`
})

fs.outputFileSync("./output.txt", RECIPIENTS);