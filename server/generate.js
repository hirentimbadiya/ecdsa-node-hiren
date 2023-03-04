const secp = require('ethereum-cryptography/secp256k1');
const {toHex} = require('ethereum-cryptography/utils')
const {keccak256} = require('ethereum-cryptography/keccak');

const privateKey = secp.utils.randomPrivateKey();

console.log("privateKey : " , toHex(privateKey));

// get the public key
const publicKey = secp.getPublicKey(privateKey);
// get the final public key by using keccak hash to make it shorter
const finalPublicKey = keccak256(publicKey.slice(1)).slice(-20);

console.log("publicKey : " , toHex(finalPublicKey));