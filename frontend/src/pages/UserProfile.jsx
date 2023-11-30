import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Sale01 from '../components/sale/Sale01';
import { account, ID } from '../lib/appwrite.js';
import { useUser } from "../lib/context/user";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageTitle from '../components/pagetitle';
import {Link} from 'react-router-dom';
import img from '../assets/images/avt/avt.png'

UserProfile.propTypes = {
    
};

function UserProfile(props) {

    const [dataCoinTab] = useState([
        {
            id: 1,
            title: 'User Profile',
            icon: 'fa-user'
        },
        {
            id: 2,
            title: 'Referrals',
            icon: 'fa-share-nodes'
        },
        {
            id: 3,
            title: 'API keys',
            icon: 'fa-gear'
        },
        {
            id: 4,
            title: '2FA',
            icon: 'fa-barcode'
        },
        {
            id: 5,
            title: 'Change password',
            icon: 'fa-lock'
        },

    ]);
     const user = useUser();
    if (!user.current) {
 
      return (
        <div className='markets home-2'><section className='banner'>Unauthorized</section></div>
      );
    } 

    return (
        <div>


            <PageTitle heading='User Profile' title='User' />


            <section className="user-profile flat-tabs">
            <div className="container">
                <div className="row">
                <Tabs>
                    
                    <TabList>
                        <div className="user-info center">
                            <div className="avt">
                                <input
                                type="file"
                                className="custom-file-input"
                                id="imgInp"
                                required
                                />
                                <img id="blah" src={img} alt="no file" />
                            </div>
                            <h6 className="name">{user?.current?.name}</h6>
                            <p>{user?.current?.email}</p>
                        </div>
                        {
                            dataCoinTab.map(idx => (
                                <Tab key={idx.id}><h6 className="fs-16">
                                <i className={`fa ${idx.icon}`}></i>
                                {idx.title}
                                </h6></Tab>
                            ))
                        }

                    </TabList>

                    <TabPanel>
                        <div className="content-inner profile">
                            <form action="#">
                            <h4>User Profile</h4>
                            <h6>Infomation</h6>

                            <div className="form-group d-flex s1">
                                <input type="text" className="form-control" value={user?.current?.name} />
                            </div>
                            <div className="form-group d-flex">
                                <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                value={user?.current?.email}
                                />
                                <div className="sl">
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>+1</option>
                                    <option>+84</option>
                                    <option>+82</option>
                                    <option>+32</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Phone number"
                                />
                                </div>
                            </div>

                            <div className="form-group d-flex">
                                <select className="form-control" id="exampleFormControlSelect2">
                                <option>South Korean</option>
                                <option>Vietnamese</option>
                                <option>South Korean</option>
                                <option>South Korean</option>
                                </select>
                                <div className="sl">
                                <select
                                    className="form-control gt"
                                    id="exampleFormControlSelect3"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <input
                                    className="form-control fc-datepicker"
                                    placeholder="dD/MM/YY"
                                    type="text"
                                />
                                </div>
                            </div>

                            <h6 className="two">Features</h6>
                            <div className="bt d-flex">
                                <div className="left">
                                <h6>level 1</h6>
                                <ul>
                                    <li>
                                    <p>Deposit assets</p>
                                    <input
                                        type="checkbox"
                                        className="check-box__switcher"
                                        checked
                                    />
                                    </li>
                                    <li>
                                    <p>Withdraw assets</p>
                                    <p className="text">Enabled $1,000,000/day</p>
                                    </li>
                                    <li>
                                    <p>Card purchases</p>
                                    <input type="checkbox" className="check-box__switcher" />
                                    </li>
                                    <li>
                                    <p>Bank deposit</p>
                                    <input type="checkbox" className="check-box__switcher" />
                                    </li>
                                </ul>
                                </div>
                                <div className="right">
                                <h6>level 2</h6>
                                <ul>
                                    <li>
                                    <p>Fiat and Spot wallet</p>
                                    <input
                                        type="checkbox"
                                        className="check-box__switcher"
                                        checked
                                    />
                                    </li>
                                    <li>
                                    <p>Margin wallet</p>
                                    <p className="text">Enabled 100x Leverage</p>
                                    </li>
                                </ul>
                                </div>
                            </div>

                            <button type="submit" className="btn-action">
                                Update Profile
                            </button>
                            </form>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="content-inner referrals">
                            <h6>Total rewards</h6>
                            <h4>$1,056.00 <span>USD</span></h4>
                            <p>
                            You're earning 20% of the trading fees your referrals pay.
                            Learn more
                            </p>
                            <div className="main">
                            <h6>Invite friends to earn 20%</h6>

                            <div className="refe">
                                <div>
                                <p>Referral link</p>
                                <input
                                    className="form-control"
                                    type="text"
                                    value="https://exchange.lyra.ly/?referal="
                                />
                                </div>
                                <div>
                                <p>Referral code</p>
                                <input
                                    className="form-control"
                                    type="text"
                                    value="N84CRDKK"
                                />
                                <span className="btn-action">Copied</span>
                                </div>
                            </div>
                            </div>

                            <Link to="/wallet" className="btn-action">My Wallet</Link>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="content-inner api">
                            <h6>Enable API access on your account to generate keys.</h6>
                            <h4>API Access is <span>Disabled</span></h4>
                            <p className="mail">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z"
                                fill="#23262F"
                                />
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.2318 7.35984C5.58537 6.93556 6.21593 6.87824 6.64021 7.2318L11.3598 11.1648C11.7307 11.4739 12.2694 11.4739 12.6402 11.1648L17.3598 7.2318C17.7841 6.87824 18.4147 6.93556 18.7682 7.35984C19.1218 7.78412 19.0645 8.41468 18.6402 8.76825L13.9206 12.7013C12.808 13.6284 11.192 13.6284 10.0795 12.7013L5.35984 8.76825C4.93556 8.41468 4.87824 7.78412 5.2318 7.35984Z"
                                fill="#23262F"
                                />
                            </svg>
                            petersonkenn@demo.com
                            </p>
                            <div className="main">
                            <h6>Enable API keys</h6>
                            <p>Enter your password and 2FA code to Enable the API keys</p>

                            <div className="refe">
                                <div className="form-group">
                                <p>Your Password</p>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Passworld"
                                />
                                </div>
                                <div className="form-group">
                                <p>2FA Code</p>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="2FA code"
                                />
                                </div>
                            </div>
                            <Link to="#" className="btn-action">Enable API keys</Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="content-inner api">
                            <h4>2FA <span className="color-success">Enabled</span></h4>
                            <p>
                            If you want to turn off 2FA, input your account password and
                            the six-digit code provided by the Google Authenticator app
                            below, then click <strong>"Disable 2FA"</strong>.
                            </p>

                            <div className="main">
                            <h6>Disable 2FA</h6>
                            <p>
                                Enter your password and 2FA code to Disable the 2FA
                                verification
                            </p>

                            <div className="refe">
                                <div className="form-group">
                                <p>Your Password</p>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Passworld"
                                />
                                </div>
                                <div className="form-group">
                                <p>2FA Code</p>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="2FA code"
                                />
                                </div>
                            </div>
                            <Link to="#" className="btn-action">Disable 2FA verification</Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="content-inner profile change-pass">
                            <h4>Change Password</h4>
                            <h6>New Passworld</h6>
                            <form action="#">
                            <div className="form-group">
                                <div>
                                <label>Old Passworld<span>*</span>:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value="123456789"
                                />
                                </div>
                                <div>
                                <label>2FA Code<span>*</span>:</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                <label>New Passworld<span>*</span>:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New Passworld"
                                />
                                </div>
                                <div>
                                <label>Confirm Passworld<span>*</span>:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Passworld"
                                />
                                </div>
                            </div>
                            </form>
                            <button type="submit" className="btn-action">
                            Change Passworld
                            </button>
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

export default UserProfile;
