import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/images/coin/btc.png'
import img2 from '../../assets/images/coin/eth.png'
import img3 from '../../assets/images/coin/tet.png'
import img4 from '../../assets/images/coin/bnb.png'

import './styles.scss';

import {Link} from 'react-router-dom';

Crypto01.propTypes = {
    
};

function Crypto01(props) {

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
            active: '',
            icon: img1,
            name: 'Bitcoin',
            unit: 'BTC/USD',
            price: 'USD 46,168.95',
            pricesale: '36,641.20',
            sale:'-0.79%',
            class: 'critical'
        },
        {
            id: 2,
            active: 'active',
            icon: img2,
            name: 'Ethereum',
            unit: 'ETH/USD',
            price: 'USD $3,480.04',
            pricesale: '36,641.20',
            sale:'+10.55%',
            class: 'success'
        },
        {
            id: 3,
            icon: img3,
            name: 'Tether',
            unit: 'USDT/USD',
            price: 'USD 1.00',
            pricesale: '36,641.20',
            sale:'-0.01%',
            class: 'critical'
        },
        {
            id: 4,
            icon: img4,
            name: 'BNB',
            unit: 'BNB/USD',
            price: 'USD 443.56',
            pricesale: '36,641.20',
            sale:'-1.24%',
            class: 'critical'
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
                                dataCrytoTab.map(data => (
                                    <TabPanel key={data.id}>
                                        <div className="content-inner">
                                            {
                                                dataCrytoContent.map(data => (
                                                    <div key={data.id} className={`crypto-box ${data.active}`}>
                                                        <div className="top">
                                                            <Link to="#">
                                                            <img src={data.icon} alt="rockie" />
                                                            <span>{data.name}</span>
                                                            <span className="unit">{data.unit}</span></Link>
                                                        </div>
                                                        <h6 className="price">{data.price}</h6>
                                                        <div className="bottom">
                                                            <p>{data.pricesale}</p>
                                                            <p className={`sale ${data.class}`}>{data.sale}</p>
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

export default Crypto01;