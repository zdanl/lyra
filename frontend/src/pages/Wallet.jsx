import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useUser } from "../lib/context/user";
import { account, functions, ID } from '../lib/appwrite.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../components/header/styles.scss';
import 'react-tabs/style/react-tabs.css';
import Sale01 from '../components/sale/Sale01';
import PageTitle from '../components/pagetitle';
import transak from '../assets/images/transak.png';

Wallet.propTypes = {
    
};

function Wallet(props) {
    const user = useUser();

    const [walletsResponse, setWalletsResponse] = useState("[]");
   
    async function get_wallets() {
      console.log(`Retrieving Crypto Wallets for ${user.current.$id} ...`);
         const resp = await functions.createExecution(
            'list_crypto_wallets',
            JSON.stringify({ 'foo': 'bar' }),
            false,
            `/?user_id=${user.current.$id}`,
            'GET',
            { 'X-Custom-Header': '123' }
        )
        setWalletsResponse(resp.responseBody);

    }
 
    async function create_wallet() {
      console.log(`Creating Crypto Wallet for ${user.current.$id} ...`);
         const resp = await functions.createExecution(
            'generate_ethereum_wallet',
            JSON.stringify({ 'foo': 'bar' }),
            false,
            `/?user_id=${user.current.$id}`,
            'GET',
            { 'X-Custom-Header': '123' }
        )
        setWalletsResponse(resp.responseBody);

    }


    useEffect(() => {
        setTimeout(() => {
         console.log(`Retrieving Crypto Wallets for ${user.current.$id} ...`);
         (async () => {
          try {
         const resp = await functions.createExecution(
            'list_crypto_wallets',
            JSON.stringify({ 'foo': 'bar' }),
            false,
            `/?user_id=${user.current.$id}`,
            'GET',
            { 'X-Custom-Header': '123' }
        )
        setWalletsResponse(resp.responseBody);
          } catch (err) {
          console.log("Initial fetch failed, try again...");
          }
        })();
    }, 2000);}, []);

    get_wallets();

    const [dataCryptoTab] = useState([
        {
            id: 1,
            title: 'Overview',
        },
        {
            id: 2,
            title: 'Deposit Crypto',
        },
        {
            id: 3,
            title: 'Deposit Fiat',
        },
    ])
    return (
        <div>
            <PageTitle heading='Wallet' title='Wallet' />
            <section className="wallet buy-crypto flat-tabs">
                <div className="container">
                    <div className="row">
                    <Tabs>
                            <TabList>

                                {
                                    dataCryptoTab.map(idx => (
                                        <Tab key={idx.id}>{idx.title}</Tab>
                                    ))
                                }

                            </TabList>

                            <TabPanel>
                            <div className="content-inner">
                                <div className="wallet-main">
                                <h4 className="heading">Overview</h4>

                                <div className="wallet-body">
                                    <div className="left">
                                    <p>Total Balance</p>

                                    <div className="price">
                                        <h6>0.79253864</h6>
                                        <div className="sale success">BTC</div>
                                    </div>
                                    <p>$12,068.83</p>
                                    </div>
                                    <div className="right">
                                    <form onSubmit={(e) => { e.preventDefault(); get_wallets() }}>
                                        

                                        <button onClick={(e) => { e.preventDefault(); create_wallet() }} type="submit" className="btn-action">
                                        Create Wallet
                                        </button>
                                        <br />
                                        <button onClick={(e) => { e.preventDefault(); get_wallets() }} type="submit" className="btn-action">
                                        Show balance
                                        </button>
                                    </form>
                                    </div>
                                </div>
                                </div>

                                <div className="coin-list-wallet">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th className="center" scope="col">Network</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Total Balance</th>
                                        <th scope="col">Available balance</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {JSON.parse(walletsResponse).map((wallet) => (
                                    <tr>
                                        <td className="number">
                                        <span>1</span>
                                        </td>
                                        <td className="asset">
                                        <span className={wallet.network === "Bitcoin" ? "icon-btc" : "icon-eth"}
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">{wallet.network}</span>
                                            <span className="unit">{wallet.network}</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">{wallet.address}</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.00</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.00</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild"><div class="wallet"><a href="#">Withdraw</a></div></span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                  ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            Very soon
                            <img src={transak} />
                            </TabPanel>
                            <TabPanel>
                            Test2
                            </TabPanel>
  
                            

                    </Tabs> 

                    </div>
                </div>
            </section>

        </div>
    );
}

export default Wallet;
