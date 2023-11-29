import React , {useState} from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/layout/join.png'

import {Link} from 'react-router-dom';
import Button from '../button';

Join.propTypes = {
    
};

function Join(props) {

    const [dataBlock] = useState(
        {
            title: 'Join our trading global community',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sit amet, sagittis leo aliquam nunc etiam. Ac et mauris et nisi molestie.',
        }
    );
    return (
        <section className="join">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="join__images">
                    <img src={img} alt="" />
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div
                    className="join__content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                    <h3 className="heading">{dataBlock.title}</h3>
                    <p className="desc">
                        {dataBlock.desc}
                    </p>
                    <Button title='Join now' path='#' />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Join;