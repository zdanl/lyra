import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import img1 from '../../assets/images/layout/about-h1.png'
import icon1 from '../../assets/images/icon/icon-01.png'
import icon2 from '../../assets/images/icon/icon-02.png'
import icon3 from '../../assets/images/icon/icon-03.png'
import icon4 from '../../assets/images/icon/icon-04.png'
import icon5 from '../../assets/images/icon/icon-05.png'


import { Pagination, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Button from '../button';

About01.propTypes = {
    
};

function About01(props) {
    const [data] = useState([
        {
            id: 1,
            img : img1,
        },
        {
            id: 2,
            img : img1,
        },
        {
            id: 3,
            img : img1,
        },
        {
            id: 4,
            img : img1,
        },
    ])
    const [icon] = useState([
        {
            id: 1,
            img : icon1,
            class: 'icon-1'
        },
        {
            id: 2,
            img : icon2,
            class: 'icon-2'
        },
        {
            id: 3,
            img : icon3,
            class: 'icon-3'
        },
        {
            id: 4,
            img : icon4,
            class: 'icon-4'
        },

        {
            id: 5,
            img : icon5,
            class: 'icon-5'
        },
    ])

    const [dataBlock] = useState(
        {
            heading: 'What is Lyra Vault?',
            desc : 'Consider it our corporate vault for financial transactions with our customers.',
        }
    )
    const [dataList] = useState([
        {
            title: 'Use a bank account or credit card',
            text: 'You can purchase and pay in cryptocurrency right here on the Lyra Exchange.'
        },
        {
            title: 'Deposit in Crypto',
            text: 'If you are already fond of cryptocurrencies, you may simply create and use a wallet.'
        },
    ]
    )
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="about_image">
                    <Swiper
                        modules={[Pagination,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="img-swiper"
                            pagination
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <img
                                        className="img-main"
                                        src={idx.img}
                                        alt="Lyra Swap"
                                    />
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                    {
                        icon.map(idx => (
                            <img
                                key={idx.id}
                                className={ `icon ${idx.class}`}
                                src={idx.img}
                                alt="Lyra Swap"
                            />
                        ))
                    }

                   
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div
                    className="about__content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                    <h3 className="heading">{dataBlock.heading}</h3>
                    <p className="fs-20 decs">
                        {dataBlock.desc}
                    </p>
                    <ul className="list">

                        {
                            dataList.map((data,idx)=> (
                                <li key={idx}>
                                    <h6 className="title">
                                        <span className="icon-check"></span>{data.title}
                                    </h6>
                                    <p className="text">
                                    {data.text}
                                    </p>
                                </li>
                            ))
                        }

                    </ul>

                    <Button title='Explore More' path='#' />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default About01;
