import React from "react";
import algosdk from 'algosdk';
import CryptoJS from "crypto-js";
import { Button } from 'react-bootstrap';



const EncryptMnemonicKey = ({ keys }) => {
  const [mnemonic, setMnemonic] = React.useState(null);

  const handleClick = () => {
    // Generate a new Algorand mnemonic key
    const account = algosdk.generateAccount();
    console.log(account)
    setAlgoKey(account)
    setMnemonic(account.mnemonic);
  };
  const [algoKey, setAlgoKey] = React.useState("")
  const [encryptedKey, setEncryptedKey] = React.useState("");
  const [decryptedKey, setDecryptedKey] = React.useState("");

  // Generate a new mnemonic key


  const handleEncryptKey = () => {
    // Generate a new mnemonic key
    const account = algosdk.generateAccount();
    const key = account.mnemonic.toString();
    let mnemonic;
try {
  const account = algosdk.generateAccount();
  mnemonic = account.mnemonic;
} catch (error) {
  console.error(error);
  mnemonic = null;
}

if (mnemonic) {
  // Use the mnemonic key
  console.log(mnemonic);
} else {
  // Handle the case where the mnemonic key is undefined
  console.error('Unable to generate Algorand mnemonic key');
}

    // Divide the key into shards
    const shards = shardKey(key, 8);

    // Generate a random key for each shard
    const keys = shards.map(() => generateRandomKey());

    // Encrypt each shard using AES-256
    const encryptedShards = shards.map((shard, i) =>
      encryptAES256(shard, keys[i])
    );

    // Concatenate the encrypted shards
    const encrypted = encryptedShards.join("");
    setEncryptedKey(encrypted);
  };

  const handleDecryptKey = () => {
    // Split the encrypted key into shards
    const encryptedShards = splitKey(encryptedKey, 8);

    // Decrypt each shard using AES-256
    const decryptedShards = encryptedShards.map((shard, i) =>
      decryptAES256(shard, keys[i])
    );

    // Concatenate the decrypted shards
    const decrypted = decryptedShards.join("");
    setDecryptedKey(decrypted);
  };

  // Function to divide a key into equal-length shards
  const shardKey = (key, length) => {
    return key.match(new RegExp(`.{1,${length}}`, "g"));
  };

  // Function to split an encrypted key into equal-length shards
  const splitKey = (key, length) => {
    const regex = new RegExp(`.{1,${length}}`, "g");
    return key.split(regex);
  };

  // Function to generate a random key
  const generateRandomKey = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

    return (
      <div>
            <button onClick={handleClick}>
      Generate Algorand Mnemonic Key FOREALZ
    </button>

        <button onClick={handleEncryptKey}>
          Generate and Encrypt Mnemonic Key
        </button>
      
        <button onClick={handleDecryptKey}>Decrypt Mnemonic Key</button>

        <p>Encrypted Key: {encryptedKey}</p>
        <p>Decrypted Key: {decryptedKey}</p>
      </div>
    );
  };

  // AES-256 encryption function
  const encryptAES256 = (data, key) => {
    const encrypted = CryptoJS.AES.encrypt(data, key);
    return encrypted.toString();
  };

  // AES-256 decryption function
  const decryptAES256 = (data, key) => {
    const decrypted = CryptoJS.AES.decrypt(data, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  };

export default EncryptMnemonicKey;
