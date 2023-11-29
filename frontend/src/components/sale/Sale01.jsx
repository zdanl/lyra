import React , {useState} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

Sale01.propTypes = {
    
};

function Sale01(props) {

    const [dataBlock] = useState(
        {
            title: 'Earn up to $25 worth of crypto',
            desc : 'Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.',
        }
    )
    return (
        <section className="section-sale">
            <div className="container">
                <div className="row align-item-center">
                <div className="col-md-7">
                    <div className="block-text">
                    <h4 className="heading">{dataBlock.title}</h4>
                    <p className="desc">
                        {dataBlock.desc}
                    </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="button">
                    <Link to="#">Create Account</Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}

export default Sale01;