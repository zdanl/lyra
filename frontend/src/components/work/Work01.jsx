import React , {useState} from 'react';
import PropTypes from 'prop-types';
import line from '../../assets/images/icon/connect-line.png'

import {Link} from 'react-router-dom';

Work01.propTypes = {
    
};

function Work01(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: 'How It Works',
            desc : 'Lyra Vault is a full-scale invite-only centralized crypto exchange to finance our projects.'
        }
    )
    return (
        <section className="work">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                    <h3 className="heading">{dataBlock.heading}</h3>
                    <p className="fs-20 desc">
                        {dataBlock.desc}
                    </p>
                    </div>

                    <div className="work__main">
                        {
                            data.map(idx => (
                                <div className="work-box" key={idx.id}>
                                    <div className="image">
                                    <img src={idx.img} alt="Lyra CEX" />
                                    </div>
                                    <div className="content">
                                    <p className="step">{idx.step}</p>
                                    <Link to="#" className="title">{idx.title}</Link>
                                    <p className="text">{idx.text}</p>
                                    </div>
                                    <img
                                    className="line"
                                    src={line}
                                    alt="Lyra CEX"
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}

export default Work01;
