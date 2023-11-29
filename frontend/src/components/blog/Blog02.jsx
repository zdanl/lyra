import React , {useState} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss' ;

import img from '../../assets/images/blog/blog-v2.1.png'


Blog02.propTypes = {
    data : PropTypes.array
};

function Blog02(props) {
    const {data} = props;
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="blog-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text">
                        <h3 className="heading">Learn And Earn</h3>
                        <p className="desc">
                            Stacks is a production-ready library of stackable <br />
                            content blocks built in React Native.
                        </p>

                        <Link to="#" className="btn-action-3">See all article</Link>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-12">
                        <div className="blog-box s1">
                        <div className="box-image">
                            <img src={img} alt="" />
                            <div className="wrap-video">
                            <Link
                                to="#"
                                className="popup-youtube"
                                onClick={()=> setOpen(true)}
                            >
                                <svg
                                width="13"
                                height="16"
                                viewBox="0 0 13 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0.466675 2.92407C0.466675 1.35705 2.187 0.398733 3.51938 1.22354L11.7197 6.2999C12.9827 7.0818 12.9827 8.91907 11.7197 9.70096L3.51938 14.7773C2.187 15.6021 0.466675 14.6438 0.466675 13.0768V2.92407Z"
                                    fill="#777E90"
                                />
                                </svg>
                            </Link>
                            </div>
                        </div>

                        <div className="box-content">
                            <div className="left">
                            <Link to="#" className="category btn-action">learn & earn</Link>
                            <Link to="" className="title"
                                >Learn about UI8 coin and earn an All-Access Pass</Link
                            >
                            <p className="text fs-18">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Facilisi id vestibulum sem
                            </p>
                            </div>

                            <div className="right">
                            <Link to="#" className="btn-action-3">Learn more</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="blog-main">

                            {
                                data.slice(0,3).map(idx => (
                                    <div key={idx.id} className="blog-box">
                                        <div className="box-image">
                                        <img src={idx.img} alt="" />
                                        <div className="wrap-video">
                                        <Link
                                            to="#"
                                            className="popup-youtube"
                                            onClick={()=> setOpen(true)}
                                        >
                                            <svg
                                            width="13"
                                            height="16"
                                            viewBox="0 0 13 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                d="M0.466675 2.92407C0.466675 1.35705 2.187 0.398733 3.51938 1.22354L11.7197 6.2999C12.9827 7.0818 12.9827 8.91907 11.7197 9.70096L3.51938 14.7773C2.187 15.6021 0.466675 14.6438 0.466675 13.0768V2.92407Z"
                                                fill="#777E90"
                                            />
                                            </svg>
                                        </Link>
                                        </div>
                                        </div>

                                        <div className="box-content">
                                        <Link to="#" className="category btn-action">{idx.category}</Link>
                                        <Link to="" className="title"
                                            >{idx.title}</Link>

                                        <p className="text">
                                            {idx.text}
                                        </p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} />
        </section>
    );
}

export default Blog02;