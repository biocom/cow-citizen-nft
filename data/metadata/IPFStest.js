// Query and test meta data URLs
import fetch from 'node-fetch'
const baseURI = 'https://cloudflare-ipfs.com/ipfs/QmWhopatpPGv6N7ytKCTirzbp9UWgpfSemXbwdAymuqPqm/'
const maxNFT = 5037
const links = [...Array(maxNFT).keys()];

links.map(async link => {
  // Prevent captcha
  // await new Promise(resolve => setTimeout(resolve, 10000));

  return fetch(`${baseURI}${link}/metadata.json`,{
    method: 'GET', headers: {'Content-Type': 'application/json'},
})
    .then((response) => response.json().then((res) => {
      console.log(`ID: ${res.id} - Header: ${response.status}`)
    }))
    .then((apiResponse) => {
      console.log(apiResponse)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})