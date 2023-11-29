import React , {useState} from 'react';
import PropTypes from 'prop-types';

import icon1 from '../../assets/images/icon/icon-c1.png'
import icon2 from '../../assets/images/icon/icon-c2.png'
import icon3 from '../../assets/images/icon/icon-c3.png'
import icon4 from '../../assets/images/icon/icon-c4.png'

Counter.propTypes = {
    
};

function Counter(props) {
    const [dataBlock] = useState(
        {
            heading: 'The numbers don’t lie',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus mattis viverra ullamcorper cras viverra elementum donec.'
        }
    )

    const [listCouter] = useState([
        {
            
        }
    ])
    return (
        <section className="counter-numbers">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                    <h3 className="heading">{dataBlock.heading}</h3>
                    <p className="desc">
                        {dataBlock.desc}
                    </p>
                    </div>
                    <div
                    className="counter-main"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    >
                    <img className="img" src={icon1} alt="" />
                    <img className="img" src={icon2} alt="" />
                    <img className="img" src={icon3} alt="" />
                    <img className="img" src={icon4} alt="" />
                    <ul className="list-counter counter-scroll">
                        <li>
                        <p className="title">
                            <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M17 8.00068C16.7554 6.2409 15.9391 4.61034 14.6766 3.36018C13.4142 2.11001 11.7758 1.3096 10.0137 1.08224C8.25159 0.85487 6.46362 1.21316 4.9252 2.10193M1 2.00068V6.00068H5"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 10.001C1.24456 11.7608 2.06093 13.3913 3.32336 14.6415C4.58579 15.8916 6.22424 16.6921 7.98633 16.9194C9.74841 17.1468 11.5364 16.7885 13.0748 15.8997M17 16.001V12.001H13"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                            Trades per day
                        </p>
                        <div className="number-content counter">
                            <span
                            className="timer count-number countup number"
                            data-value="20"
                            >20</span
                            >m+
                        </div>
                        </li>
                        <li>
                        <p className="title">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.5 4.20996L12 6.80996L16.5 4.20996"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.5 19.79V14.6L3 12"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 12L16.5 14.6V19.79"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.27002 6.95996L12 12.01L20.73 6.95996"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 22.08V12"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>

                            Digital assests
                        </p>
                        <div className="number-content counter">
                            <span
                            className="timer count-number countup number"
                            data-value="20"
                            >100</span
                            >m+
                        </div>
                        </li>
                        <li>
                        <p className="title">
                            <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.87749 13.2061C4.03349 13.2061 0.750488 13.7871 0.750488 16.1151C0.750488 18.4421 4.01249 19.0451 7.87749 19.0451C11.7215 19.0451 15.0045 18.4631 15.0045 16.1361C15.0045 13.8091 11.7425 13.2061 7.87749 13.2061Z"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.87757 9.886C10.4136 9.886 12.4456 7.853 12.4456 5.318C12.4456 2.782 10.4136 0.75 7.87757 0.75C5.34257 0.75 3.30957 2.782 3.30957 5.318C3.30957 7.853 5.34257 9.886 7.87757 9.886Z"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.2041 6.66895V10.6789"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.2502 8.67383H15.1602"
                                stroke="#777E90"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>

                            Happy users
                        </p>
                        <div className="number-content counter">
                            <span
                            className="timer count-number countup number"
                            data-value="20"
                            >10</span
                            >m+
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;