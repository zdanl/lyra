import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/images/coin/btc-2.png'
import img2 from '../../assets/images/coin/eth-2.png'
import img3 from '../../assets/images/coin/tet-2.png'
import img4 from '../../assets/images/coin/bnb-2.png'

import chart1 from '../../assets/images/icon/chart-up-2.png';
import chart2 from '../../assets/images/icon/chart-down-2.png';

import './styles.scss';

import {Link} from 'react-router-dom';

Crypto03.propTypes = {
    
};

function Crypto03(props) {

    const [dataCrytoTab] = useState([
        {
            id: 1,
            title: 'Crypto',
        },
        {
            id: 2,
            title: 'DeFi',
        },
        {
            id: 3,
            title: 'BSC',
        },
        {
            id: 4,
            title: 'NFT',
        },
        {
            id: 5,
            title: 'Metaverse',
        },
        {
            id: 6,
            title: 'Polkadot',
        },
        {
            id: 7,
            title: 'Solana',
        },
        {
            id: 8,
            title: 'Opensea',
        },
        {
            id: 9,
            title: 'Makersplace',
        },
    ])
    const [dataCrytoContent] = useState([
        {
            id: 1,
            icon: img1,
            chart: chart1,
            name: 'Bitcoin',
            unit: 'BTC',
            price: 'USD 53,260.20',

            sale:'7.2%',
            class: 'success'
        },
        {
            id: 2,
            icon: img2,
            chart: chart2,
            name: 'Bitcoin',
            unit: 'ETH',
            price: 'USD 53,260.20',
            sale:'1.8%',
            class: 'critical'
        },
        {
            id: 3,
            icon: img3,
            chart: chart1,
            name: 'Tether',
            unit: 'USDT',
            price: 'USD 53,260.20',
            sale:'3.54%',
            class: 'success'
        },
        {
            id: 4,
            icon: img4,
            chart: chart1,
            name: 'BNB',
            unit: 'BNB',
            price: 'USD 53,260.20',
            sale:'3.24%',
            class: 'success'
        },
    ])
    return (
        <section className="crypto" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="crypto__main">
                        <Tabs>
                            <TabList>
                                {
                                    dataCrytoTab.map(idx => (
                                        <Tab key={idx.id}>{idx.title}</Tab>
                                    ))
                                }

                            </TabList>

                            
                            {
                                dataCrytoTab.map(idx => (
                                    <TabPanel key={idx.id}>
                                        <div className="content-inner">
                                            {
                                                dataCrytoContent.map(idx => (
                                                    <div key={idx.id} className="crypto-box">
                                                        <div className="left">
                                                        <img src={idx.icon} alt="Lyra Swap" />
                                                        <h6> {idx.name}</h6>
                                                        <h6 className="price">{idx.price}</h6>
                                                        </div>

                                                        <div className="right">
                                                        <img src={idx.chart} alt="Lyra Swap" />
                                                        <p className={`sale ${idx.class}`}>
                                                            <svg
                                                            width="8"
                                                            height="12"
                                                            viewBox="0 0 8 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <path
                                                                d="M0.393244 5.90568C0.477403 6.06168 0.637433 6.15893 0.811488 6.15893H3.52179V11.5105C3.52179 11.7807 3.73601 12 3.99996 12C4.26392 12 4.47814 11.7807 4.47814 11.5105V6.15893H7.18844C7.36313 6.15893 7.52316 6.06168 7.60668 5.90568C7.69148 5.74969 7.68574 5.5591 7.59329 5.40832L4.40482 0.228447C4.31683 0.0861572 4.16445 0 3.99996 0C3.83547 0 3.68309 0.0861572 3.59511 0.228447L0.406633 5.40832C0.358178 5.48795 0.333313 5.57868 0.333313 5.6694C0.333313 5.75034 0.353715 5.83193 0.393244 5.90568Z"
                                                                fill="white"
                                                            />
                                                            </svg>
                                                            7.2%
                                                        </p>
                                                        <p className="unit">{idx.unit}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </TabPanel>
                                ))
                            }
                            

                        </Tabs> 
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Crypto03;