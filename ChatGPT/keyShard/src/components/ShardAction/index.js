import React from 'react';
import { Mnemonic } from 'algorand-sdk';

const EncryptMnemonicKey = () => {
  const [encryptedKey, setEncryptedKey] = React.useState('');
  const [decryptedKey, setDecryptedKey] = React.useState('');

  const handleEncryptKey = () => {
    // Generate a new mnemonic key
    const mnemonic = new Mnemonic();
    const key = mnemonic.toString();

    // Divide the key into shards
    const shards = shardKey(key, 8);

    // Generate a random key for each shard
    const keys = shards.map(() => generateRandomKey());

    // Encrypt each shard
    const encryptedShards = shards.map((shard, i) => encrypt(shard, keys[i]));

    // Concatenate the encrypted shards
    const encrypted = encryptedShards.join('');
    setEncryptedKey(encrypted);
  };

  const handleDecryptKey = () => {
    // Split the encrypted key into shards
    const encryptedShards = splitKey(encryptedKey, 8);

    // Decrypt each shard
    const decryptedShards = encryptedShards.map((shard, i) => decrypt(shard, keys[i]));

    // Concatenate the decrypted shards
    const decrypted = decryptedShards.join('');
    setDecryptedKey(decrypted);
  };

  return (
    <div>
      <button onClick={handleEncryptKey}>Generate and Encrypt Mnemonic Key</button>
      <button onClick={handleDecryptKey}>Decrypt Mnemonic Key</button>
      <p>Encrypted Key: {encryptedKey}</p>
      <p>Decrypted Key: {decryptedKey}</p>
    </div>
  );
};

export default EncryptMnemonicKey;