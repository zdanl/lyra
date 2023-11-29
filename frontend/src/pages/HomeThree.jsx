import React from 'react';


import Banner03 from '../components/banner/Banner03';
import Services02 from '../components/services/Services02';
import Trading from '../components/trading/Trading';
import Counter from '../components/counter/Counter';
import Testimonial02 from '../components/testimonial/Testimonial02';
import Join from '../components/join/Join';
import Blog02 from '../components/blog/Blog02';
import dataServices2 from '../assets/fake-data/data-services-2';
import dataTrading from '../assets/fake-data/data-trading';
import dataBlog from '../assets/fake-data/data-blog';
import dataTestimonial2 from '../assets/fake-data/data-testimonial2';



function HomeTwo(props) {

    return (
        <div className='home-3'>

            <Banner03 />
            
            <Services02 data={dataServices2} />

            <Trading data={dataTrading} />

            <Counter />

            <Testimonial02 data={dataTestimonial2} />

            <Join />

            <Blog02 data={dataBlog} />
            
        </div>
    );
}

export default HomeTwo;