import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

CoinList02.propTypes = {
    
};

function CoinList02(props) {
    return (
        <section className="coin-list">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text">
                    <h3 className="heading">Market Update</h3>
                    <a className="btn-action" href="#">See All Coins</a>
                    </div>

                    <div className="coin-list__main">
                    <div className="flat-tabs">
                        <ul className="menu-tab">
                        <li className="active"><h6 className="fs-16">View All</h6></li>
                        <li><h6 className="fs-16">Metaverse</h6></li>
                        <li><h6 className="fs-16">Entertainment</h6></li>
                        <li><h6 className="fs-16">Energy</h6></li>
                        <li><h6 className="fs-16">NFT</h6></li>
                        <li><h6 className="fs-16">Gaming</h6></li>
                        <li><h6 className="fs-16">Music</h6></li>
                        </ul>
                        <div className="content-tab">
                        <div className="content-inner">
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Price</th>
                                <th scope="col">24h %</th>
                                <th scope="col">Market Cap</th>
                                <th scope="col">Last 7 Days</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>1</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-btc"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                    ></span>
                                    <span>Bitcoin</span>
                                    <span className="unit">BTC</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="up">+1.45%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-45"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>2</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-eth"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                        ><span className="path3"></span
                                        ><span className="path4"></span></span
                                    ><span>Ethereum</span>
                                    <span className="unit">ETH</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="down">-5.12%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-6"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>3</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-bnb"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                        ><span className="path3"></span
                                        ><span className="path4"></span
                                        ><span className="path5"></span
                                        ><span className="path6"></span></span
                                    ><span>BNB</span>
                                    <span className="unit">BNB/USD</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="down">-3.75%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-7"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>4</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-tether"
                                        ><span className="path1"></span
                                        ><span className="path2"></span></span
                                    ><span>Tether</span>
                                    <span className="unit">USDT/USD</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="up">+1.45%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-8"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>5</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-sol"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                        ><span className="path3"></span
                                        ><span className="path4"></span
                                        ><span className="path5"></span></span
                                    ><span>Solana</span>
                                    <span className="unit">SOL</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="up">+1.45%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-9"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>6</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-btc"
                                        ><span className="path1"></span
                                        ><span className="path2"></span></span
                                    ><span>XRP</span> <span className="unit">XRP</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="down">-2.22%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-10"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>7</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-ada"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                        ><span className="path3"></span
                                        ><span className="path4"></span
                                        ><span className="path5"></span
                                        ><span className="path6"></span
                                        ><span className="path7"></span
                                        ><span className="path8"></span
                                        ><span className="path9"></span></span
                                    ><span>Cardano</span>
                                    <span className="unit">ADA</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="up">+0.8%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-11"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                                <tr>
                                <th scope="row"><span className="icon-star"></span></th>
                                <td>8</td>
                                <td>
                                    <Link to="#"
                                    ><span className="icon-avax"
                                        ><span className="path1"></span
                                        ><span className="path2"></span
                                        ><span className="path3"></span
                                        ><span className="path4"></span></span
                                    ><span>Avalanche</span>
                                    <span className="unit">AVAX</span></Link
                                    >
                                </td>
                                <td className="boild">$56,623.54</td>
                                <td className="up">+1.41%</td>
                                <td className="boild">$880,423,640,582</td>
                                <td><div id="total-revenue-chart-12"></div></td>
                                <td><Link to="#" className="btn">Trade</Link></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}

export default CoinList02;