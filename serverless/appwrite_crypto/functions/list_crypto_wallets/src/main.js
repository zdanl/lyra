import { ID, Query, Client, Databases } from 'node-appwrite';

// This is the retrieval Appwrite function for crypto wallets
// It's executed each time a user visits the /wallet page
// or upon API request. It returns in JSON the addresses
// and balances.
// @zdanl

// @@TODO Security
// currently everybody who knows a users static internal id
// can retrieve his/her wallets. ideally one would need to be
// authenticated as that user

export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);
  const user_id = req.query.user_id;

  log(`Retrieving Crypto Wallets for User ${user_id}`);

  // see if there is a non-root way to deal with appwrite document ownership
  
  const docs = await databases.listDocuments('lyra', 'wallets', [
    Query.select(["eth_address", "btc_address", "eth_balance", "btc_balance"]),
    Query.equal("owner", [user_id])
  ]);

  var finalResponse = [];

  docs.documents.map(async (doc) => {
      log(`Currently iterating ${doc.address}`);
      finalResponse.push({
        'eth_address': doc.eth_address,
        'btc_address': doc.btc_address,
        'eth_balance': doc.eth_balance,
        'btc_balance': doc.btc_balance
      });
  });

  
  // for debugging
  //const docs = await databases.listDocuments('lyra', 'wallets');

  log("Final: " + JSON.stringify(finalResponse));

  // `res.json()` is a handy helper for sending JSON
  // you must iterate/map through this an filter privatekeys etc. 
  return res.json(finalResponse);
};
