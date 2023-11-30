import { ID, Client, Databases } from 'node-appwrite';
import Web3 from 'web3';

const eth_api_url = "https://mainnet.infura.io/v3/";
const btc_api_url = `https://blockchain.info/address/`;


// This is the hydrate_crypto_wallets Appwrite function
// It's executed every 10 minutes and sets correct 
// balances. This is just for the client to display,
// we do not operate security critical operations based on
// this information.
// @zdanl


/* ************** Ethereum ************** */
const retrieve_eth_balance = async (wallet_address, infura_api_key) => {
	try {
    var web3Provider = new Web3.providers.HttpProvider(`${eth_api_url}/${infura_api_key}`);
    var web3 = new Web3(web3Provider);

		web3.eth.getBalance(wallet_address, (err, balance) => {
			if (err === null)
				return web3.utils.fromWei(balance, 'ether');
			else throw {success: false, error: {message: "Unable to fetch ETH Balance", stack: err}}
		});
	} catch (ex) {
		console.log(ex);
		throw ex;
	}
};

/* ************** Bitcoin ************** */
const retrieve_btc_balance = async (wallet_address) => {
  try {
    const response = await fetch(`${btc_api_url}/${wallet_address}?format=json`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.final_balance;

  } catch (error) {
    error('Error fetching BTC data:', error);
  }
};



export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  const infura_api_key = process.env.INFURA_API_KEY;
  const databases = new Databases(client);
  const timestamp = new Date().getTime();
  
  const resp = await databases.listDocuments('lyra', 'wallets');
  
  // do not by mistake transfer a new balance to a wrong wallet after exception
  let eth_balance = 0;
  let btc_balance = 0;
  let hydration_count = 0;

  log(`Hydrating ${resp.total} wallets ...`);

  for (const doc in resp.documents) {
    eth_balance = 0;
    btc_balance = 0;
    console.log(`Retrieving ETH balance for ${doc.eth_address}`);
    eth_balance = await retrieve_eth_balance(doc.eth_address, infura_api_key);
    console.log(`Amount: ${eth_balance}`);
    
    console.log(`Retrieving BTC balance for ${doc.btc_address}`);
    btc_balance = await retrieve_btc_balance(doc.btc_address);
    console.log(`Amount: ${btc_balance}`);

    if (eth_balance !== doc.eth_balance || btc_balance !== doc.btc_balance) {
      hydration_count++;
    }

    /************ Write to DB **********/
    console.log(`Hydrating document ${doc.$id}`);
    await databases.updateDocument('lyra', 'wallets', doc.$id, {
      eth_balance: eth_balance,
      btc_balance: btc_balance,
      last_hydrate: timestamp
    });

  }
  
  log(`All done. Hydrated ${hydration_count} wallets.`);

  /************ Write to DB **********/

  // `res.json()` is a handy helper for sending JSON
  return res.json({'status': true});
};
