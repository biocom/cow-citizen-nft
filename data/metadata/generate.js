import fs from 'fs-extra'

const nftJSON = fs.readJsonSync('../src/nfts.json')
const nftExternalURL = 'https://cow.fi/'
const nftImageBaseURI = 'https://cloudflare-ipfs.com/ipfs/QmZZHeQVcguGx2GM5DFcTSq9AcGfacmjUoKBPN16kdnNam/'

function sanitizeFileName (name) {
  // Remove white spaces + uppercase
  return name.replace(/\s+/g, '').toUpperCase()
} 

async function generateNFTS() {
  const totalNFTS = nftJSON.length

  console.log(`
      ======= Generating CoW Citizen NFT's ========
      Total unique NFTs: ${totalNFTS}
    `)

  // Make sure the /output/ folder is empty to start
  fs.emptyDirSync('./output/')

  // Collect individual NFT data to then output to /output/
  nftJSON.map(({id, attributes }) => {
    const citizenID = attributes[0].value
    const investmentToken = attributes[1].value
    const investmentNetwork = attributes[2].value

    // generate investor NFT JSON file
    const JSONFile = {
      id: id,
      description: `CoW Citizen - Early investor in the CoW Protocol with ${investmentToken} on ${investmentNetwork}`,
      external_url: `${nftExternalURL}?cowCitizen=${id}`,
      image: `${nftImageBaseURI}${sanitizeFileName(investmentToken)}-${sanitizeFileName(investmentNetwork)}.gif`,
      name: "CoW Citizen - Early Investor",
      attributes: [
        {
          trait_type: "Cow Citizen ID",
          value: citizenID
        },
        {
          trait_type: "Investment token",
          value: investmentToken
        },
        {
          trait_type: "Investment network",
          value: investmentNetwork
        }
      ]
    }

    // Output JSON file
    const outputPath = `./output/${id}/metadata.json`
    console.log(`Writing file ${outputPath} - CoW Citizen: ${citizenID} | ${investmentToken} | ${investmentNetwork}`)
    fs.outputJsonSync(outputPath, JSONFile);
  })

  // Copy static image assets to the /output/images/ folder
  // fs.copySync('../assets', './output/images')
  // console.log(`Successfully copied image assets to /output/images/`)

  // Finished
  console.log(`Finished generating ${totalNFTS} folders to /output/`)
}

generateNFTS()