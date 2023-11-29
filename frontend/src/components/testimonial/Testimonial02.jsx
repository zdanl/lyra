import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import img from '../../assets/images/layout/testimonials.png'
import user1 from '../../assets/images/avt/use-01.png'
import user2 from '../../assets/images/avt/use-02.png'
import user3 from '../../assets/images/avt/use-03.png'
import user4 from '../../assets/images/avt/use-04.png'
import user5 from '../../assets/images/avt/use-05.png'
import user6 from '../../assets/images/avt/use-01.png'


Testimonial02.propTypes = {
    data : PropTypes.array
};

function Testimonial02(props) {

    const [listUser] = useState([
        {
            id: 1,
            img: user1
        },
        {
            id: 2,
            img: user2
        },
        {
            id: 3,
            img: user3
        },
        {
            id: 4,
            img: user4
        },
        {
            id: 5,
            img: user5
        },
        {
            id: 6,
            img: user6
        },
    ])

    const {data} = props;
    return (
        <section className="testimonials-2">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12 left">
                    <div className="block-text center">
                    <h3 className="heading">What our Customers say</h3>
                    <p className="desc">
                        Our customers from all over the world share their lovely words
                        about us.
                    </p>
                    </div>
                    <Swiper
                        pagination={{
                        type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="swiper-testimonial-2"
                        
                    >

                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="testimonials-box-2">
                                        <h6>{idx.title}</h6>
                                        <p className="text">
                                        {idx.text}
                                        </p>
                                        <div className="bottom">
                                        <div className="info">
                                            <img src={idx.avt} alt="" />
                                            <div className="content">
                                            <h6 className="name">{idx.name}</h6>
                                            <p className="position">{idx.positon}</p>
                                            </div>
                                        </div>
                                        <img src={idx.partner} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>

                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="map-testimonial">
                    <img
                        className="map"
                        src={img}
                        alt=""
                    />

                    <div className="swiper swiper-thumb2">
                        <div className="swiper-wrapper list-img">

                        {
                            listUser.map(idx => (
                                <div key={idx.id} className="swiper-slide">
                                    <div><img src={idx.img} alt="" /></div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}

export default Testimonial02;