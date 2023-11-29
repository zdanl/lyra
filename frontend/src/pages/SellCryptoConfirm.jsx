import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sale01 from '../components/sale/Sale01';
import PageTitle from '../components/pagetitle';

SellCryptoConfirm.propTypes = {
    
};

function SellCryptoConfirm(props) {

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
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main info">
                                    <h6>Confirm Information</h6>
                                    <p className="desc">
                                        You are about to Receive 1.356 BTC for Bitcloud bank
                                    </p>

                                    <ul className="list">
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Pay</p>
                                            <h6 className="price">3.000.000 VND</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Get</p>
                                            <h6 className="price">0.00207026 BTC</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="24"
                                            height="18"
                                            viewBox="0 0 24 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.5763 17.0837C20.1786 17.0837 23.9096 13.3527 23.9096 8.75032C23.9096 4.14795 20.1786 0.416992 15.5763 0.416992C12.0556 0.416992 9.04483 2.60027 7.82408 5.68678C7.23371 5.48653 6.60104 5.37793 5.943 5.37793C2.71059 5.37793 0.09021 7.99831 0.09021 11.2307C0.09021 14.4631 2.71059 17.0835 5.943 17.0835L5.94287 17.0837H14.7016C14.7958 17.0837 14.8892 17.0766 14.9811 17.0627C15.1777 17.0766 15.3761 17.0837 15.5763 17.0837ZM10.2874 15.1905C10.2808 15.1851 10.2743 15.1797 10.2677 15.1743C10.2551 15.1882 10.2424 15.202 10.2297 15.2157L10.2874 15.1905Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>For</p>
                                            <h6 className="price">Lyra CEX</h6>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main details">
                                    <h6>Payment Details</h6>
                                    <form action="/sell-crypto-details">
                                        <p className="desc">Bank account</p>

                                        <div className="form-group">
                                        <label>Account name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="Veum Cecilia"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Account number</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="V548422222221"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="079 Dariana Knoll, CA"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>SWIFT Code</label>
                                        <input className="form-control" type="text" value="UI8" />
                                        </div>
                                        <div className="form-group">
                                        <label>Bank Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="55416 Powlowski Spring, CA"
                                        />
                                        </div>

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
                                        <button className="cancel btn-action-3">Cancel</button>
                                        <button className="submit btn-action">Let’s move on!</button>
                                        </div>
                                    </form>
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
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main info">
                                    <h6>Confirm Information</h6>
                                    <p className="desc">
                                        You are about to Receive 1.356 BTC for Bitcloud bank
                                    </p>

                                    <ul className="list">
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Pay</p>
                                            <h6 className="price">3.000.000 VND</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Get</p>
                                            <h6 className="price">0.00207026 BTC</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="24"
                                            height="18"
                                            viewBox="0 0 24 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.5763 17.0837C20.1786 17.0837 23.9096 13.3527 23.9096 8.75032C23.9096 4.14795 20.1786 0.416992 15.5763 0.416992C12.0556 0.416992 9.04483 2.60027 7.82408 5.68678C7.23371 5.48653 6.60104 5.37793 5.943 5.37793C2.71059 5.37793 0.09021 7.99831 0.09021 11.2307C0.09021 14.4631 2.71059 17.0835 5.943 17.0835L5.94287 17.0837H14.7016C14.7958 17.0837 14.8892 17.0766 14.9811 17.0627C15.1777 17.0766 15.3761 17.0837 15.5763 17.0837ZM10.2874 15.1905C10.2808 15.1851 10.2743 15.1797 10.2677 15.1743C10.2551 15.1882 10.2424 15.202 10.2297 15.2157L10.2874 15.1905Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>For</p>
                                            <h6 className="price">Lyra CEX</h6>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main details">
                                    <h6>Payment Details</h6>
                                    <form action="/sell-crypto-details">
                                        <p className="desc">Bank account</p>

                                        <div className="form-group">
                                        <label>Account name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="Veum Cecilia"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Account number</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="V548422222221"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="079 Dariana Knoll, CA"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>SWIFT Code</label>
                                        <input className="form-control" type="text" value="UI8" />
                                        </div>
                                        <div className="form-group">
                                        <label>Bank Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="55416 Powlowski Spring, CA"
                                        />
                                        </div>

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
                                        <button className="cancel btn-action-3">Cancel</button>
                                        <button className="submit btn-action">Let’s move on!</button>
                                        </div>
                                    </form>
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
                                        <li className="active">
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                        <li>
                                        <h6><span></span>Payment Details</h6>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="main info">
                                    <h6>Confirm Information</h6>
                                    <p className="desc">
                                        You are about to Receive 1.356 BTC for Bitcloud bank
                                    </p>

                                    <ul className="list">
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Pay</p>
                                            <h6 className="price">3.000.000 VND</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z"
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>Get</p>
                                            <h6 className="price">0.00207026 BTC</h6>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="icon">
                                            <svg
                                            width="24"
                                            height="18"
                                            viewBox="0 0 24 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.5763 17.0837C20.1786 17.0837 23.9096 13.3527 23.9096 8.75032C23.9096 4.14795 20.1786 0.416992 15.5763 0.416992C12.0556 0.416992 9.04483 2.60027 7.82408 5.68678C7.23371 5.48653 6.60104 5.37793 5.943 5.37793C2.71059 5.37793 0.09021 7.99831 0.09021 11.2307C0.09021 14.4631 2.71059 17.0835 5.943 17.0835L5.94287 17.0837H14.7016C14.7958 17.0837 14.8892 17.0766 14.9811 17.0627C15.1777 17.0766 15.3761 17.0837 15.5763 17.0837ZM10.2874 15.1905C10.2808 15.1851 10.2743 15.1797 10.2677 15.1743C10.2551 15.1882 10.2424 15.202 10.2297 15.2157L10.2874 15.1905Z"
                                                fill="white"
                                            />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p>For</p>
                                            <h6 className="price">Lyra CEX</h6>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="main details">
                                    <h6>Payment Details</h6>
                                    <form action="/sell-crypto-details">
                                        <p className="desc">Bank account</p>

                                        <div className="form-group">
                                        <label>Account name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="Veum Cecilia"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Account number</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="V548422222221"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="079 Dariana Knoll, CA"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label>SWIFT Code</label>
                                        <input className="form-control" type="text" value="UI8" />
                                        </div>
                                        <div className="form-group">
                                        <label>Bank Address</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value="55416 Powlowski Spring, CA"
                                        />
                                        </div>

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
                                        <button className="cancel btn-action-3">Cancel</button>
                                        <button className="submit btn-action">Let’s move on!</button>
                                        </div>
                                    </form>
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

export default SellCryptoConfirm;