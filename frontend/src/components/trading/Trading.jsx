import React , {useState} from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/layout/trading-01.png'

Trading.propTypes = {
    data: PropTypes.array
};

function Trading(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: '3 steps easy trading',
            desc : 'Lyra CEX has a variety of features that make it the best place to start trading'
        }
    )
    return (
        <section className="trading">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="trading__image">
                    <img src={img} alt="Lyra CEX" />
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div
                    className="trading__content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                    <h3 className="heading">{dataBlock.heading}</h3>
                    <p className="desc fs-20">
                        {dataBlock.desc}
                    </p>

                    <ul className="list-steps">
                        {
                            data.map(idx => (
                                <li key={idx.id}>
                                    <img src={idx.icon} alt="Lyra CEX" />
                                    <div className="content">
                                        <p className="step">{idx.step}</p>
                                        <h6 className="title">{idx.title}</h6>
                                        <p className="fs-16">
                                            {idx.text}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Trading;