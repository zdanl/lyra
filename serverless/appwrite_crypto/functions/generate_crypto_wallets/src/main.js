import { ID, Client, Databases } from 'node-appwrite';
import { ethers } from 'ethers';

// Bitcoin @TODO security review
// coinkey?
import CoinKey from 'coinkey';

// This is the generate_crypto_wallets Appwrite function
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
  const userId = req.headers['x-appwrite-user-id'];
  const desc = req.params.desc;
  const tags = JSON.parse(req.params.tags);

  /************ Ethereum ************/
  log('Creating Ethereum Wallet for User ...');
  const eth_wallet = ethers.Wallet.createRandom();
  // Get the private key and mnemonic (seed phrase)
  const privateKey = eth_wallet.privateKey;
  const mnemonic = eth_wallet.mnemonic.phrase;
  log(`Created Ethereum Wallet ${eth_wallet.address}`);
  
  /************ Ethereum ************/
  log(`Creating Bitcoin Wallet for User ${userId}`);
  const btc_wallet = new CoinKey.createRandom();
  const btc_privkey = btc_wallet.privateKey.toString('hex');
  const btc_address = btc_wallet.publicAddress;
  log(`Created Bitcoin Wallet for User ${btc_address}`);

  const timestamp = new Date().getTime();
  
  /************ Write to DB **********/
  await databases.createDocument('lyra', 'wallets', ID.unique(), {
    eth_address: eth_wallet.address,
    timestamp: timestamp,
    eth_private_key: privateKey,
    eth_seedphrase: mnemonic,
    btc_address: btc_address,
    btc_private_key: btc_privkey,
    description: desc,
    tags: tags,
    is_deleted: false,
    can_withdraw: false,
    owner: userId || 'unknown'
  });

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    btc_address: btc_address,
    eth_address: eth_address,
    timestamp: timestamp
  });
};
