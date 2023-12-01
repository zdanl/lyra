import React , {useState} from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/layout/Illustration.png'
import img1 from '../../assets/images/icon/discovery.png'
import img2 from '../../assets/images/icon/change.png'
import img3 from '../../assets/images/icon/adduser.png'

About02.propTypes = {
    data: PropTypes.array,
};

function About02(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            heading: 'We are the most trusted cryptocurrency platform.',
            desc : 'We believe Cryptolly is here to stay — and that a future worth building is one which opens its doors and invites everyone in.',
        }
    );
    const [dataTrader] = useState([
        {
            id: 1,
            icon: img1,
            numb: '198+',
            text: 'Countries',
        },
        {
            id: 2,
            icon: img2,
            numb: '350+',
            text: 'Trading Pairs',
        },
        {
            id: 3,
            icon: img3,
            numb: '20 million+',
            text: 'Trades',
        },
    ]
    );
    return (
        <section className="about-2">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="about_image">
                    <img
                        className="img-main"
                        src={img}
                        alt="Lyra Swap"
                    />

                    {
                        dataTrader.map(idx=> (
                            <div key={idx.id} className="traders-box">
                                <div className="icon">
                                    <img src={idx.icon} alt="Lyra Swap" />
                                </div>
                                <div className="content">
                                <h6 className="numb">{idx.numb}</h6>
                                <p>{idx.text}</p>
                                </div>
                            </div>
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
                    <h3 className="heading">
                        {dataBlock.heading}
                    </h3>
                    <p className="fs-20 desc">
                        {dataBlock.desc}
                    </p>
                    <ul className="list">

                        {
                            data.map(idx => (
                                <li key={idx.id}>
                                    <div className={`icon ${idx.class}`}>
                                        <img src={idx.icon} alt="Lyra Swap" />
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
                </div>
            </div>
        </section>
    );
}

export default About02;