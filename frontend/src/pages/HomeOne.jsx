import React from 'react';



import Banner01 from '../components/banner/Banner01';
import Crypto01 from '../components/crypto/Crypto01';
import Coinlist01 from '../components/coinlist/Coinlist01';
import Work01 from '../components/work/Work01';
import About01 from '../components/about/About01';
import Testimonial01 from '../components/testimonial/Testimonial01';
import Sale01 from '../components/sale/Sale01';
import dataPartner from '../assets/fake-data/data-partner';
import dataTestimonial from '../assets/fake-data/data-testimonial';
import dataWork from '../assets/fake-data/data-work';
import dataCoin from '../assets/fake-data/data-coin';
import Download01 from '../components/download/Download01';


function HomeOne(props) {

    return (
        <div className='home-1'>

            <Banner01 data={dataPartner} />
            
	    <Crypto01 />
            
	    <Work01 data={dataWork} />

            <Coinlist01 dataCoin={dataCoin} />

            <About01 />
            
        </div>
    );
}

export default HomeOne;
