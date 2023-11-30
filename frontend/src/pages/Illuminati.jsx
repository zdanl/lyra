import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Crypto03 from '../components/crypto/Crypto03';
import Blog from '../components/blog/Blog';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import img from '../assets/images/layout/banner-04.png'
import dataBlog from '../assets/fake-data/data-blog';

import dataCoin2 from '../assets/fake-data/data-coin-2';

Illuminati.propTypes = {
    
};

function Illuminati(props) {

    const [dataBlock] = useState(
        {
            heading: 'Illuminati Mode',
            desc : 'Pirate Exchange',
        }
    );


    const [dataCoinTab] = useState([
        {
            id: 1,
            title: 'Hot',
        },
        {
            id: 2,
            title: 'New',
        },
        {
            id: 3,
            title: 'DeFi',
        },
        {
            id: 4,
            title: 'Spot',
        },

    ]);
    return (
        <div className='markets home-2'>

            <section className="banner">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__content">
                        <h2 className="title">Illuminati Mode</h2>
                        <p className="fs-24 desc">
                            This page can only be seen and used for Illuminati. Pirate <span>$1.86T</span><br />
                            <input type="text" placeholder="Search email, address, ..." />
                        </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__image">
                        <img src={img} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Crypto03 />

            
            <section className="coin-list">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="flat-tabs1">
                        <ul className="menu-tab1">
                            <li><h6 className="fs-16">Favorites</h6></li>
                            <li className="active"><h6 className="fs-16">Derivatives</h6></li>
                            <li><h6 className="fs-16">Spot</h6></li>
                        </ul>
                        <div className="content-tab1">
                            <div className="content-inner">
                            <div className="flat-tabs2">
                                <ul className="menu-tab2">
                                <li className="active"><h6 className="fs-16">All</h6></li>
                                <li><h6 className="fs-16">Inverse Perpetual</h6></li>
                                <li><h6 className="fs-16">USDT Perpetual</h6></li>
                                <li><h6 className="fs-16">Inserve Futures</h6></li>
                                </ul>
                                <div className="content-tab2">
                                <div className="content-inner">
                                    <div className="coin-list__main">
                                    <div className="flat-tabs">
                                    <Tabs>
                                        <TabList>
                                            {
                                                dataCoinTab.map(idx => (
                                                    <Tab key={idx.id}>{idx.title}</Tab>
                                                ))
                                            }

                                        </TabList>

                                        {
                                            dataCoinTab.map(data => (
                                                <TabPanel key={data.id}>
                                                    <div className="content-inner">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col">Asset</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col">Balance</th>
                                                                <th scope="col">User Email</th>
                                                                <th scope="col">Chart</th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {
                                                                dataCoin2.map(idx => (
                                                                    <tr key={idx.id}>
                                                                        <th scope="row">
                                                                            <span className="icon-star"></span>
                                                                        </th>
                                                                        <td>
                                                                            <Link to="#"
                                                                            >
                                                                            <img src={idx.icon} alt="" />
                                                                            <span>{idx.name}</span>
                                                                            <span className="unit">{idx.unit}</span></Link>
                                                                        </td>
                                                                        <td className="boild">{idx.trader}</td>
                                                                        <td className="up">{idx.change}</td>
                                                                        <td className="boild">{idx.hight}</td>
                                                                        <td className="boild">{idx.low}</td>
                                                                        <td>
                                                                            <img src={idx.chart} alt="" />
                                                                        </td>
                                                                        <td><Link to="#" className="btn">Withdraw</Link></td>
                                                                        <td><Link to="#" className="btn">Deposit</Link></td>
                                                                        <td><Link to="#" className="btn">Lock</Link></td>
                                                                        <td><Link to="#" className="btn">Semi-Delete</Link></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                            
                                                        </tbody>
                                                        </table>
                                                    </div>
                                                </TabPanel>
                                            ))
                                        }
                                        

                                    </Tabs> 

                                    </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Illuminati;
