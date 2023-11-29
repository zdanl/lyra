import { ID, Client, Databases } from 'node-appwrite';

// This is the retrieval Appwrite function for crypto wallets
// It's executed each time a user visits the /wallet page
// or upon API request. It returns in JSON the addresses
// and balances, network
// @zdanl

export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  log('Retrieving Crypto Wallets for User ...');

  // see if there is a non-root way to deal with appwrite document ownership
  const docs = await databases.listDocuments('lyra', 'wallets', [
    owner: '6567788da1bb6fa49de6'
  ]);

  log(docs);

  // `res.json()` is a handy helper for sending JSON
  // you must iterate/map through this an filter privatekeys etc. 
  return res.json(docs);
};
