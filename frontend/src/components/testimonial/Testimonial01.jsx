import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import avt1 from '../../assets/images/avt/avt-02.png'
import avt2 from '../../assets/images/avt/avt-03.png'
import avt3 from '../../assets/images/avt/avt-04.png'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Testimonial01.propTypes = {
    
};

function Testimonial01(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            title: 'Our customers love what we do',
            desc : 'Transform Your idea into Reality With Finsweet',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
    )

    return (
        <section className="testimonials">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="block-text">
                    <h3 className="heading">{dataBlock.title}</h3>
                    <h6 className="fs-20">
                        {dataBlock.desc}
                    </h6>
                    <p>
                        {dataBlock.text}
                    </p>

                    <div className="swiper swiper-thumb1">
                        <div className="swiper-wrapper list-img">
                        <div className="swiper-slide">
                            <img src={avt1} alt="Lyra CEX" />
                        </div>
                        <div className="swiper-slide">
                            <img src={avt2} alt="Lyra CEX" />
                        </div>
                        <div className="swiper-slide">
                            <img src={avt3} alt="Lyra CEX" />
                        </div>
                        </div>
                    </div>
                    <div className="couter">
                        <h6>30+</h6>
                        <p className="title">Customer Reviews</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                <Swiper
                    modules={[Navigation,  Scrollbar, A11y ]}
                        spaceBetween={0}
                        slidesPerView={1}
                        className="swiper-testimonial-1"
                    >
                    {
                        data.map(idx => (
                            <SwiperSlide key={idx.id}>
                                <div className="testimonials-box">
                                    <span className="icon-quote"></span>
                                    <h6 className="text">
                                    {idx.text}
                                    </h6>
                                    <div className="bottom">
                                    <div className="info">
                                        <img src={idx.avt} alt="Lyra CEX" />
                                        <div className="content">
                                        <h6 className="name">{idx.name}</h6>
                                        <p className="position">{idx.position}</p>
                                        </div>
                                    </div>
                                    <img src={idx.partner} alt="Lyra CEX" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial01;