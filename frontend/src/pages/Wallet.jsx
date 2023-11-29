import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { account, functions, ID } from '../lib/appwrite.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sale01 from '../components/sale/Sale01';
import PageTitle from '../components/pagetitle';

Wallet.propTypes = {
    
};

function Wallet(props) {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [walletsResponse, setWalletsResponse] = useState("{}");
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
     (async () => {
         console.log("Retrieving User ...");
         setLoggedInUser(await account.get());
         if (loggedInUser) {
           setLoggedin(true);
         }
         console.log("Got user " + loggedInUser);
         console.log("Retrieving Crypto Wallets ...");
 const resp = await functions.createExecution(
        'list_crypto_wallets',
        JSON.stringify({ 'foo': 'bar' }),
        false,
        `/?user_id=${loggedInUser?.$id}`,
        'GET',
        { 'X-Custom-Header': '123' }
    )
        setWalletsResponse(resp.responseBody);
     })();
    }, [loggedInUser]);

    const [dataCryptoTab] = useState([
        {
            id: 1,
            title: 'Overview',
        },
        {
            id: 2,
            title: 'Crypto',
        },
        {
            id: 3,
            title: 'Fiat',
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
                                    <form action="/wallet">
                                        <div className="form-group">
                                        <input type="text" placeholder="Search" />
                                        <svg
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                                            stroke="#B1B5C3"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            />
                                        </svg>
                                        <select className="" aria-label="USD">
                                            <option selected>USD</option>
                                            <option value="1">VND</option>
                                            <option value="2">USDT</option>
                                            <option value="3">USDC</option>
                                        </select>
                                        </div>
                                        <button type="submit" className="btn-action">
                                        Show balance
                                        </button>
                                    </form>
                                    </div>
                                </div>
                                </div>

                                <div>
                                <span>{walletsResponse}</span>
                                </div>

                                <div className="coin-list-wallet">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th className="center" scope="col">Asset</th>
                                        <th scope="col">Earn</th>
                                        <th scope="col">On Orders</th>
                                        <th scope="col">Available balance</th>
                                        <th scope="col">Total balance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="number">
                                        <span>1</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">USDT</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>2</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-eth"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Ethereum</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>3</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-bnb"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                            ><span className="path5"></span
                                            ><span className="path6"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Binance</span>
                                            <span className="unit">BNB</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>4</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-sol"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                            ><span className="path5"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Solana</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>5</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Solana</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>6</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">XRP</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>7</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-ada"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                            ><span className="path5"></span
                                            ><span className="path6"></span
                                            ><span className="path7"></span
                                            ><span className="path8"></span
                                            ><span className="path9"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Cardano</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>8</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-avax"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Avalanche</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>9</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-tether"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Tether</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>10</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">USDT</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>11</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">USDT</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>12</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-eth"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Ethereum</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>13</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-bnb"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                            ><span className="path5"></span
                                            ><span className="path6"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Binance</span>
                                            <span className="unit">BNB</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>14</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-sol"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                            ><span className="path3"></span
                                            ><span className="path4"></span
                                            ><span className="path5"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Solana</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>15</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">Solana</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="number">
                                        <span>16</span>
                                        </td>
                                        <td className="asset">
                                        <span className="icon-btc"
                                            ><span className="path1"></span
                                            ><span className="path2"></span
                                        ></span>
                                        <p>
                                            <span className="boild">XRP</span>
                                            <span className="unit">Tether USD</span>
                                        </p>
                                        </td>
                                        <td className="color-success">
                                        <span className="boild">7.46% APR</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                        <td>
                                        <span className="boild">0.2785689852 BTC</span>
                                        <span className="unit">$10,098.36</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </TabPanel>
  
                            

                    </Tabs> 

                    </div>
                </div>
            </section>

            <Sale01 />
            
        </div>
    );
}

export default Wallet;
