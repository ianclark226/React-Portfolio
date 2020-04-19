import React from 'react';

import Hero from'../components/Hero/hero';
import Carousel2 from '../components/Carousel2';

function LinkPage(props) {

    return (
    <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel2 />
    </div>
    );
}

export default LinkPage;