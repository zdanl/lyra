import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import img1 from '../../assets/images/icon/icon-1.png'
import img2 from '../../assets/images/icon/icon-2.png'
import img3 from '../../assets/images/icon/icon-3.png'
import img4 from '../../assets/images/icon/icon-4.png'
import img5 from '../../assets/images/icon/icon-5.png'
import avt from '../../assets/images/avt/user.jpg'
import arrow from '../../assets/images/icon/Arrow.png'
import bitcoin from '../../assets/images/icon/bitcoin.png'
import chart from '../../assets/images/icon/chart-up-2.png'


Services02.propTypes = {
    data: PropTypes.array
};

function Services02(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: 'Why choose Lyra CEX',
            desc : 'Lyra CEX has a variety of features that make it the best place to start trading'
        }
    )
    const [dataIcon] = useState([
        {
            icon: img1
        },
        {
            icon: img2
        },
        {
            icon: img3
        },
        {
            icon: img4
        },
        {
            icon: img5
        },
    ])
    return (
        <section className="services-2 bg">
        <div className="container">
            <div className="row">
            <div className="col-xl-6 col-md-12">
                <div
                className="services__content"
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                <h3 className="heading">{dataBlock.heading}</h3>
                <p className="fs-20 desc">
                {dataBlock.desc}
                </p>
                <ul className="list">
                    {
                        data.map(idx =>(
                        <li key={idx.id} className={idx.active}>
                            <div className={`icon ${idx.bg}`}>
                                <img src={idx.icon} alt="Lyra CEX" />
                            </div>
                            <div className="content">
                                <h6 className="title">{idx.title}</h6>
                                <p>
                                    {idx.text}
                                </p>
                            </div>
                        </li>
                        ))
                    }
                    
                </ul>
                </div>
            </div>
            <div className="col-xl-6 col-md-12">
                <div className="services_image">
                <div className="experience">
                    <h6 className="fs-18">How was your experience?</h6>

                    <ul className="list-felling">

                        {
                            dataIcon.map((data,idx) => (
                                <li className="icon" key={idx}>
                                    <Link to="#"
                                    ><img src={data.icon} alt="Lyra CEX"
                                    /></Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="crypto-box">
                    <img className="arrow" src={arrow} alt="Lyra CEX" />
                    <div className="left">
                    <img src={bitcoin} alt="Lyra CEX" />
                    <div>
                        <h6>BTC</h6>
                        <p>+1.46%</p>
                    </div>
                    </div>

                    <div className="right">
                    <h6 className="price">$56,623.54</h6>
                    <img src={chart} alt="Lyra CEX" />
                    </div>
                </div>
                <div className="shape"></div>
                <div className="user-card">
                    <div className="info">
                    <img src={avt} alt="Lyra CEX" />
                    <h6>Esther Howard</h6>
                    <p>estherhoward01@gmail.com</p>
                    </div>

                    <div className="content">
                    <h6 className="title">Portfolio</h6>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M0.556641 12.6349L0.556641 12.6351C0.555778 18.596 5.38811 23.4291 11.3462 23.4291L0.556641 12.6349ZM0.556641 12.6349C0.554914 6.67409 5.3871 1.8418 11.348 1.8418C17.3089 1.8418 22.1413 6.67494 22.1413 12.6359C22.1413 18.5958 17.3091 23.4282 11.3462 23.4291L0.556641 12.6349Z"
                        stroke="#B1B5C3"
                        />
                        <path
                        d="M15.7919 9.86931C15.6464 8.3568 14.3408 7.84992 12.691 7.70535V5.60645H11.4143V7.64933C11.0791 7.64933 10.7358 7.65566 10.3951 7.66288V5.60645H9.11844L9.11754 7.70354C8.84106 7.70896 8.5691 7.71439 8.30436 7.71439V7.70806L6.54338 7.70716V9.07149C6.54338 9.07149 7.48667 9.05342 7.47041 9.07059C7.98813 9.07059 8.15618 9.37056 8.20497 9.62987V12.0206C8.24112 12.0206 8.2872 12.0224 8.3396 12.0297H8.20497L8.20407 15.3791C8.18148 15.5417 8.08571 15.801 7.7243 15.8019C7.74056 15.8164 6.79637 15.8019 6.79637 15.8019L6.54248 17.3271H8.20497C8.51398 17.3271 8.81847 17.3325 9.11664 17.3343L9.11754 19.4567H10.3933V17.3569C10.743 17.3641 11.0818 17.3668 11.4134 17.3668L11.4125 19.4567H12.6892V17.3388C14.836 17.2159 16.3404 16.6747 16.5265 14.658C16.6774 13.0344 15.9139 12.3088 14.695 12.0161C15.4368 11.6402 15.9003 10.9761 15.7919 9.86931ZM14.0047 14.4068C14.0047 15.9925 11.2896 15.8127 10.4231 15.8127V13.0001C11.2896 13.0019 14.0047 12.7534 14.0047 14.4068ZM13.4102 10.4394C13.4102 11.8824 11.1442 11.7134 10.4231 11.7143V9.16456C11.1451 9.16456 13.4111 8.93506 13.4102 10.4394Z"
                        fill="#B1B5C3"
                        />
                        <path
                        d="M8.20801 11.9639H8.39775V12.1039H8.20801V11.9639Z"
                        fill="#B1B5C3"
                        />
                    </svg>
                    <p>Balance</p>
                    <h6 className="price">$2,509.75 <span>+9.77%</span></h6>

                    <div className="button">
                        <Link to="#">Deposit</Link>
                        <Link to="#">Withdraw</Link>
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

export default Services02;