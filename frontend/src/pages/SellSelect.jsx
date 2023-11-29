import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sale01 from '../components/sale/Sale01';
import PageTitle from '../components/pagetitle';
import {Link} from 'react-router-dom'

SellCrypto.propTypes = {
    
};

function SellCrypto(props) {

    const [dataCryptoTab] = useState([
        {
            id: 1,
            title: 'Overview',
        },
        {
            id: 2,
            title: 'Buy Crypto',
        },
        {
            id: 3,
            title: 'Sell Crypto',
        },
    ])
    return (
        <div>
            <PageTitle heading='Sell Crypto' title='Sell Crypto' />

            <section className="wallet sell buy-crypto flat-tabs">
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
                                    <div className="top">
                                    <ul className="top-list">
                                        <li className="active">
                                        <h6><span></span>Select crypto</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Confirm Payment</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="wallet-main">
                                    <div className="wallet-body">
                                        <div className="left">
                                        <h6 className="heading">Select Crypto</h6>
                                        <p>Which Crypto do you want to search?</p>
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
                                            <button type="submit" className="btn-action">Search</button>
                                        </form>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="coin-list-wallet">
                                    <h6 className="heading">Select Crypto</h6>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th className="left" scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">24%</th>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-5.03%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>3</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>4</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>5</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-0.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>6</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>7</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-6.09%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>8</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>9</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+8.09%</span>
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
                                                <span className="boild">XRP</span>
                                                <span className="unit">Tether USD</span>
                                            </p>
                                            </td>

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>

                                    <div className="button">
                                    <Link to="/sell-crypto-amount" className="btn-action"
                                        >Continue</Link
                                    >
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="content-inner">
                                    <div className="top">
                                    <ul className="top-list">
                                        <li className="active">
                                        <h6><span></span>Select crypto</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Confirm Payment</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="wallet-main">
                                    <div className="wallet-body">
                                        <div className="left">
                                        <h6 className="heading">Select Crypto</h6>
                                        <p>Which Crypto do you want to search?</p>
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
                                            <button type="submit" className="btn-action">Search</button>
                                        </form>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="coin-list-wallet">
                                    <h6 className="heading">Select Crypto</h6>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th className="left" scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">24%</th>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-5.03%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>3</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>4</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>5</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-0.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>6</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>7</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-6.09%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>8</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>9</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+8.09%</span>
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
                                                <span className="boild">XRP</span>
                                                <span className="unit">Tether USD</span>
                                            </p>
                                            </td>

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>

                                    <div className="button">
                                    <Link to="/sell-crypto-amount" className="btn-action"
                                        >Continue</Link
                                    >
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="content-inner">
                                    <div className="top">
                                    <ul className="top-list">
                                        <li className="active">
                                        <h6><span></span>Select crypto</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Confirm Payment</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="wallet-main">
                                    <div className="wallet-body">
                                        <div className="left">
                                        <h6 className="heading">Select Crypto</h6>
                                        <p>Which Crypto do you want to search?</p>
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
                                            <button type="submit" className="btn-action">Search</button>
                                        </form>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="coin-list-wallet">
                                    <h6 className="heading">Select Crypto</h6>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th className="left" scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">24%</th>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-5.03%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>3</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>4</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>5</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-0.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>6</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>7</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-critical">
                                            <span className="boild">-6.09%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>8</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="number">
                                            <span>9</span>
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

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+8.09%</span>
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
                                                <span className="boild">XRP</span>
                                                <span className="unit">Tether USD</span>
                                            </p>
                                            </td>

                                            <td>
                                            <span className="boild">$2,605.95</span>
                                            </td>

                                            <td className="color-success">
                                            <span className="boild">+6.04%</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>

                                    <div className="button">
                                    <Link to="/sell-crypto-amount" className="btn-action"
                                        >Continue</Link
                                    >
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

export default SellCrypto;