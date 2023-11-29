import { ID, Client, Databases } from 'node-appwrite';
import { ethers } from 'ethers';

// This is the Ethers.js Appwrite function
// It's executed each time a user is created or upon request
// It returns the wallet address and timestamp of creation
// The new wallet is stored in the Lyra database 
// wallets collection
// @zdanl

export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  log('Creating Ethereum Wallet for User ...');
  const wallet = ethers.Wallet.createRandom();
  // Get the private key and mnemonic (seed phrase)
  const privateKey = wallet.privateKey;
  const mnemonic = wallet.mnemonic.phrase;
  log(`Created Wallet ${wallet.address}`);

  const timestamp = new Date().getTime();

  await databases.createDocument('lyra', 'wallets', ID.unique(), {
    address: wallet.address,
    timestamp: timestamp,
    private_key: privateKey,
    seedphrase: mnemonic,
    network: 'Ethereum',
    is_locked: true,
    owner: '6567788da1bb6fa49de6'
  });

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    address: wallet.address,
    timestamp: timestamp
  });
};
