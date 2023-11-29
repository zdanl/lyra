import React from 'react';


import Banner02 from '../components/banner/Banner02';
import Crypto02 from '../components/crypto/Crypto02';
import Services from '../components/services/Services';
import About02 from '../components/about/About02';
import Blog from '../components/blog/Blog';
import Coinlist01 from '../components/coinlist/Coinlist01';
import dataCoin from '../assets/fake-data/data-coin';
import Work01 from '../components/work/Work01';
import dataWork from '../assets/fake-data/data-work';
import dataServices from '../assets/fake-data/data-services';
import dataAbout from '../assets/fake-data/data-about';
import dataBlog from '../assets/fake-data/data-blog';



function HomeTwo(props) {

    return (
        <div className='home-2'>
            
            <Banner02 />

            <Crypto02 />

            <Services data={dataServices} />

            <Coinlist01 dataCoin={dataCoin} />

            <About02 data={dataAbout} />

            <Work01 data={dataWork} />

            <Blog data={dataBlog} />
        </div>
    );
}

export default HomeTwo;