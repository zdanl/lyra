import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../button';
import img from '../../assets/images/layout/graphic.png'

Services.propTypes = {
    data: PropTypes.array,
};

function Services(props) {
    const {data} =props;

    const [dataBlock] = useState(
        {
            heading: 'The most trusted cryptocurrency platform.',
            desc : 'Cryptolly has a variety of features that make it the best place to start trading'
        }
    )
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="services__main">
                        {
                            data.map(idx => (
                                <div key={idx.id} className="services-box">
                                    <div className="icon">
                                        <img src={idx.icon} alt="Lyra CEX" />
                                    </div>
                                    <Link to="#" className="h6 title">{idx.title}</Link>
                                    <p>
                                    {idx.text}
                                    </p>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="block-text" data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="heading">{dataBlock.heading}</h3>
                    <p className="desc">
                        {dataBlock.desc}
                    </p>
                    <Button title='Let’s Trade Now' path="#" />
                    <img src={img} alt="Lyra CEX" />
                    </div>
                    
                </div>
                </div>
            </div>
        </section>
    );
}

export default Services;