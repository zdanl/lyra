import React, { useState}  from 'react';
import PropTypes from 'prop-types';
import Sale01 from '../components/sale/Sale01';
import { useUser } from "../lib/context/user";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PageTitle from '../components/pagetitle';

import {Link} from 'react-router-dom'

Register.propTypes = {
    
};

function Register(props) {
    const user = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>

            <PageTitle heading='Register' title='Register' />



            <section className="register">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                    <h3 className="heading">Register To Lyra CEX</h3>
                    <p className="desc fs-20">
                        Register in advance and enjoy the event benefits
                    </p>
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
                            <form onSubmit={(e) => { e.preventDefault(); user.register(email, password)}}>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Email/ID</label>
                                <input
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Please fill in the email form."
                                    value={email}
                                />
                                </div>
                                <div className="form-group">
                                <label
                                    >Password
                                    <span
                                    >(8 or more characters, including numbers and special
                                    characters)</span
                                    ></label
                                >
                                <input
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    className="form-control mb-10"
                                    placeholder="Please enter a password."
                                />
                                </div>

                                <button type="submit" onSubmit={(e) => { e.preventDefault(); user.register(email, password)}} className="btn-action">
                                Submission
                                </button>
                                <div className="bottom">
                                <p>Already have an account?</p>
                                <Link to="/login">Login</Link>
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
                                    <select className="form-control">
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
                                <div className="form-group">
                                <label
                                    >Password
                                    <span
                                    >(8 or more characters, including numbers and special
                                    characters)</span
                                    ></label
                                >
                                <input
                                    type="password"
                                    className="form-control mb-10"
                                    placeholder="Please enter a password."
                                />
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword2"
                                    placeholder="Please re-enter your password."
                                />
                                </div>
                                <div className="form-group">
                                <label
                                    >NickName
                                    <span className="fs-14"
                                    >(Excluding special characters)</span
                                    ></label
                                >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                                </div>
                                <div className="form-group">
                                <label>Country </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>South Korea (+82)</option>
                                    <option>Vietnamese (+84)</option>
                                    <option>South Korea (+82)</option>
                                    <option>South Korea (+82)</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <label
                                    >Phone
                                    <span className="fs-14">(Enter numbers only)</span></label
                                >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ex) 01012345678 (without '-')"
                                />
                                </div>

                                <div className="form-group">
                                <label>UID Code </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Please enter your invitation code."
                                />
                                </div>

                                <button type="submit" className="btn-action">
                                Pre-Registration
                                </button>
                                <div className="bottom">
                                <p>Already have an account?</p>
                                <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </TabPanel>

                    

                </Tabs> 

                </div>
                </div>
            </div>
            </section>

            <Sale01 />
            
        </div>
    );
}

export default Register;
