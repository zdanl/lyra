import { ID, Client, Databases } from 'node-appwrite';

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
  const docId = req.params.docId;
  const desc = req.params.desc;
  const tags = JSON.parse(req.params.tags);

  const timestamp = new Date().getTime();
  
  /************ Write to DB **********/
  await databases.updateDocument('lyra', 'wallets', docId, {
    description: desc,
    tags: tags,
    last_change: timestamp
  });

  // `res.json()` is a handy helper for sending JSON
  return res.json({'status': true});
};
