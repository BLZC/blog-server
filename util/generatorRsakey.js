const NodeRSA = require('node-rsa');
const newkey = new NodeRSA({ b: 1024 });  
      newkey.setOptions({encryptionScheme: 'pkcs1'});
let public_key = newkey.exportKey('pkcs8-public'), //公钥
    private_key = newkey.exportKey('pkcs8-private'); //私钥
let pubkey = new NodeRSA(public_key),
    prikey = new NodeRSA(private_key);
    pubkey.setOptions({encryptionScheme: 'pkcs1'});
    prikey.setOptions({ encryptionScheme: 'pkcs1' });
    

module.exports = {public_key , private_key, pubkey, prikey}