import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sale01 from '../components/sale/Sale01';
import PageTitle from '../components/pagetitle';

SellCryptoDetails.propTypes = {
    
};

function SellCryptoDetails(props) {

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
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Select crypto
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Enter Amount
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Payment Details
                                        </h6>
                                        </li>
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main details center">
                                    <div className="heading">
                                        <h4>Success</h4>
                                        <div className="icon">
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            />
                                        </svg>
                                        </div>
                                    </div>
                                    <p>
                                        You successfully bought 1.356 <span>BTC</span> for Lyra CEX!
                                    </p>

                                    <ul className="status">
                                        <li className="top">
                                        <p className="desc">Status</p>
                                        <p className="text">Completed</p>
                                        </li>
                                        <li className="s-body">
                                        <p className="desc">Transaction ID</p>
                                        <p className="text">0msx836930...87r398 ID</p>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main payment">
                                    <h6 className="title">Payment Details</h6>

                                    <p className="top">Bank account</p>
                                    <ul className="status">
                                        <li>
                                        <p className="desc">Account name</p>
                                        <p className="text">
                                            Veum Cecilia<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Account number</p>
                                        <p className="text">
                                            548422222221<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Address</p>
                                        <p className="text">
                                            079 Dariana Knoll, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">SWIFT Code</p>
                                        <p className="text">
                                            UI8<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Bank Address</p>
                                        <p className="text">
                                            55416 Powlowski Spring, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                    </ul>

                                    <div className="code">
                                        <h6>Reference code</h6>
                                        <p className="mb-5">
                                        You MUST include the Reference Code in your deposit in
                                        order to credit your account!
                                        </p>
                                        <p>Reference Code:</p>
                                        <div className="code-text">BLUTUKHY34PB</div>
                                    </div>
                                    <div className="group-button">
                                        <button className="cancel btn-action-3">Tradel</button>
                                        <button className="submit btn-action">Wallet</button>
                                    </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="content-inner">
                                    <div className="top">
                                    <ul className="top-list">
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Select crypto
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Enter Amount
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Payment Details
                                        </h6>
                                        </li>
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main details center">
                                    <div className="heading">
                                        <h4>Success</h4>
                                        <div className="icon">
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            />
                                        </svg>
                                        </div>
                                    </div>
                                    <p>
                                        You successfully bought 1.356 <span>BTC</span> for Lyra CEX!
                                    </p>

                                    <ul className="status">
                                        <li className="top">
                                        <p className="desc">Status</p>
                                        <p className="text">Completed</p>
                                        </li>
                                        <li className="s-body">
                                        <p className="desc">Transaction ID</p>
                                        <p className="text">0msx836930...87r398 ID</p>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main payment">
                                    <h6 className="title">Payment Details</h6>

                                    <p className="top">Bank account</p>
                                    <ul className="status">
                                        <li>
                                        <p className="desc">Account name</p>
                                        <p className="text">
                                            Veum Cecilia<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Account number</p>
                                        <p className="text">
                                            548422222221<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Address</p>
                                        <p className="text">
                                            079 Dariana Knoll, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">SWIFT Code</p>
                                        <p className="text">
                                            UI8<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Bank Address</p>
                                        <p className="text">
                                            55416 Powlowski Spring, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                    </ul>

                                    <div className="code">
                                        <h6>Reference code</h6>
                                        <p className="mb-5">
                                        You MUST include the Reference Code in your deposit in
                                        order to credit your account!
                                        </p>
                                        <p>Reference Code:</p>
                                        <div className="code-text">BLUTUKHY34PB</div>
                                    </div>
                                    <div className="group-button">
                                        <button className="cancel btn-action-3">Tradel</button>
                                        <button className="submit btn-action">Wallet</button>
                                    </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="content-inner">
                                    <div className="top">
                                    <ul className="top-list">
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Select crypto
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Enter Amount
                                        </h6>
                                        </li>
                                        <li className="done">
                                        <h6>
                                            <span>
                                            <svg
                                                width="10"
                                                height="8"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                />
                                            </svg> </span
                                            >Payment Details
                                        </h6>
                                        </li>
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main details center">
                                    <div className="heading">
                                        <h4>Success</h4>
                                        <div className="icon">
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M1 3.99967L3.66667 6.66634L9 1.33301"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            />
                                        </svg>
                                        </div>
                                    </div>
                                    <p>
                                        You successfully bought 1.356 <span>BTC</span> for Lyra CEX!
                                    </p>

                                    <ul className="status">
                                        <li className="top">
                                        <p className="desc">Status</p>
                                        <p className="text">Completed</p>
                                        </li>
                                        <li className="s-body">
                                        <p className="desc">Transaction ID</p>
                                        <p className="text">0msx836930...87r398 ID</p>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main payment">
                                    <h6 className="title">Payment Details</h6>

                                    <p className="top">Bank account</p>
                                    <ul className="status">
                                        <li>
                                        <p className="desc">Account name</p>
                                        <p className="text">
                                            Veum Cecilia<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Account number</p>
                                        <p className="text">
                                            548422222221<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Address</p>
                                        <p className="text">
                                            079 Dariana Knoll, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">SWIFT Code</p>
                                        <p className="text">
                                            UI8<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                        <li>
                                        <p className="desc">Bank Address</p>
                                        <p className="text">
                                            55416 Powlowski Spring, CA<svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                                                fill="#777E90"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </p>
                                        </li>
                                    </ul>

                                    <div className="code">
                                        <h6>Reference code</h6>
                                        <p className="mb-5">
                                        You MUST include the Reference Code in your deposit in
                                        order to credit your account!
                                        </p>
                                        <p>Reference Code:</p>
                                        <div className="code-text">BLUTUKHY34PB</div>
                                    </div>
                                    <div className="group-button">
                                        <button className="cancel btn-action-3">Tradel</button>
                                        <button className="submit btn-action">Wallet</button>
                                    </div>
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

export default SellCryptoDetails;