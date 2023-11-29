import React from 'react';
import PropTypes from 'prop-types';
import Sale01 from '../components/sale/Sale01';
import { Accordion } from 'react-bootstrap-accordion';

import dataFaq from '../assets/fake-data/data-faq'

import {Link} from 'react-router-dom'
import PageTitle from '../components/pagetitle';


Faq.propTypes = {
    
};

function Faq(props) {
    return (
        <div>

            <PageTitle heading='FAQ' title='FAQ' />

            <section className="faq">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                    <h3 className="heading">Frequently Asked Questions</h3>
                    <p className="desc fs-20">Learn how to get started</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="flat-accordion">
                        {
                            dataFaq.map(idx => (
                                <Accordion key={idx.id} title={idx.title} show={idx.show}>
                                    <p className="toggle-content">{idx.text}</p>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
                </div>
            </div>
            </section>

        </div>
    );
}

export default Faq;
