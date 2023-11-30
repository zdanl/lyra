import PropTypes from 'prop-types';
import Sale01 from '../components/sale/Sale01';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { account, ID } from '../lib/appwrite.js';
import { useNavigate } from "react-router-dom";
import { useUser } from "../lib/context/user";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageTitle from '../components/pagetitle';

import {Link} from 'react-router-dom';
import img from '../assets/images/icon/qrcode.png'

Login.propTypes = {
    
};

function Login(props) {
    const navigate = useNavigate();
    const user = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const action = searchParams.get("action");

    if (action === "logout") {
      user.logout();
      navigate("/login");
    } else { 

    var timer = setInterval((usr) => {
      if (usr) {
        navigate("/wallet");
      }
    clearInterval(timer);

    }, 1500, user.current);
    }

    return (
        <div>
             
             <PageTitle heading='Login' title='Login' />


            <section className="register login">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                    <h3 className="heading">Login To Lyra</h3>
                    <p className="desc fs-20">

                        Welcome back! {user.current ? `Logged in as ${user.current.email}` : 'Not logged in'}
                    </p>
                    <div className="lock">
                        <div className="icon">
                        <svg
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M8.00004 11.7578C7.67672 11.7578 7.41406 12.0205 7.41406 12.3438C7.41406 12.6671 7.67672 12.9298 8.00004 12.9298C8.32336 12.9298 8.58602 12.6671 8.58602 12.3438C8.58602 12.0205 8.32336 11.7578 8.00004 11.7578Z"
                            fill="white"
                            />
                            <path
                            d="M11.5162 8.24219H4.2187C2.10011 8.24219 0.382568 9.95965 0.382568 12.0783C0.382568 15.6973 2.78413 19.0605 6.32241 19.8205C11.2508 20.8791 15.618 17.0922 15.618 12.344C15.618 10.0787 13.7816 8.24219 11.5162 8.24219ZM8.58628 13.9941V17.071C8.58628 17.3949 8.32417 17.657 8.0003 17.657C7.6764 17.657 7.41433 17.3949 7.41433 17.071V13.9941C6.73374 13.7514 6.24237 13.107 6.24237 12.3441C6.24237 11.3747 7.03093 10.5861 8.0003 10.5861C8.96968 10.5861 9.75823 11.3747 9.75823 12.3441C9.75823 13.107 9.26686 13.7513 8.58628 13.9941Z"
                            fill="white"
                            />
                            <path
                            d="M8.00039 0C5.08223 0 2.72656 2.35562 2.72656 5.27383V7.3234C3.20102 7.17391 3.69582 7.07086 4.21898 7.07086H5.07051V5.27383C5.07051 3.65652 6.38309 2.34395 8.00039 2.34395C9.6177 2.34395 10.9303 3.65652 10.9303 5.27383V7.07082H11.5163C12.1356 7.07082 12.7216 7.19777 13.2742 7.3948V5.27383C13.2742 2.35844 10.9128 0 8.00039 0Z"
                            fill="white"
                            />
                        </svg>
                        </div>
                        <p><span>https://</span>exchange.lyra.ly/login</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-12">
                <Tabs>
                    
                    <TabList>
      
                        <Tab><h6 className="fs-16">Email</h6></Tab>
                        <Tab><h6 className="fs-16">Mobile</h6></Tab>

                    </TabList>



                    <TabPanel>
                        <div className="content-inner">
                            <form onSubmit={(e) => { e.preventDefault(); user.login(email, password)}}>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Email/ID</label>
                                <input
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Please fill in the email form."
                                />
                                </div>
                                <div className="form-group s1">
                                <label>Password </label>
                                <input
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                    className="form-control"
                                    placeholder="Please enter a password."
                                />
                                </div>

                                <div className="form-group form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                                <p>Forgot Password?</p>
                                </div>

                                <button onClick={(e) => { e.preventDefault(); user.login(email, password)}} className="btn-action">Login</button>
                                <div className="bottom">
                                <p>Not a member?</p>
                                <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="content-inner">
                            <form>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Mobile Phone</label>
                                <div>
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
                                <div className="form-group s1">
                                <label>Password </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Please enter a password."
                                />
                                </div>

                                <div className="form-group form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                                <p>Forgot Password?</p>
                                </div>

                                <button type="submit" className="btn-action">Login</button>
                                <div className="bottom">
                                <p>Not a member?</p>
                                <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </TabPanel>

                    

                </Tabs> 

                    <div className="qr-code center">
                    <img src={img} alt="" />
                    <h6 className="fs-20">Login with QR code</h6>
                    <p className="fs-14">
                        Scan this code with the <span>Lyra CEX mobile app</span> <br />
                        to log in instantly.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <Sale01 />
            
        </div>
    );
}

export default Login;
