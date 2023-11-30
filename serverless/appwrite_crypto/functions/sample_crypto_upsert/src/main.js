import { ID, Client, Databases } from 'node-appwrite';

// This is the sample_crypto_upser Appwrite serverless function
// Only use this if you need it
// @zdanl

export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);
  const userId = req.headers['x-appwrite-user-id'];
  const desc = req.params.rounds || 128;

  const timestamp = new Date().getTime();
  
  /************ Write to DB **********/

  let eth_balance = 0.00;
  let btc_balance = 0.00;

  for (let i; i<=128; i++) {
    /************ Ethereum ************/
    log('Creating Ethereum Wallet for User ...');
    const eth_wallet = ethers.Wallet.createRandom();
    // Get the private key and mnemonic (seed phrase)
    const privateKey = eth_wallet.privateKey;
    const mnemonic = eth_wallet.mnemonic.phrase;
    log(`Created Ethereum Wallet ${eth_wallet.address}`);
  
    /************ Bitcoin ************/
    log(`Creating Bitcoin Wallet for User ${userId}`);
    const btc_wallet = new CoinKey.createRandom();
    const btc_privkey = btc_wallet.privateKey.toString('hex');
    const btc_address = btc_wallet.publicAddress;
    log(`Created Bitcoin Wallet for User ${btc_address}`);

    btc_balance = (Math.random() * (0.444 - 4.8134) + 4.8134).toFixed(4);
    eth_balance = (Math.random() * (0.044 - 24.9432) + 24.9432).toFixed(4);
    log(`Upserting wallet BTC ${btc_balance} // ETH ${eth_balance} ...`);
    await databases.createDocument('lyra', 'wallets', ID.unique(), {
      etc_address: eth_wallet.address,
      timestamp: timestamp,
      eth_private_key: privateKey,
      eth_seedphrase: mnemonic,
      btc_address: btc_address,
      btc_private_key: btc_privkey,
      btc_balance: btc_balance,
      eth_balance: eth_balance,
      description: `sample wallet ${new Date().getTime()}`,
      tags: ['sample1', 'dodge', 'stablecoin'],
      is_deleted: false,
      can_withdraw: false,
      owner: `sample_${timestamp}`
    });
    log(`Next.`);
  }

  const entries = databases.listDocuments('lyra', 'wallets', [
    Query.select(['eth_address', 'btc_address', 'eth_balance', 'btc_balance']),
    Query.equal('owner', `sample_${timestamp}`)
  ]);

  // `res.json()` is a handy helper for sending JSON
  return res.json({'status': 'ok', 'count': entries.total, 'wallets': entries.documents});
};
