import React from 'react';
import Hero from '../components/hero'
import Content from '../components/content';

function AboutPage(props) {

    return (
    <div>
        <Hero title={props.title} />
    

    <Content>
        <p>hi</p>
    </Content>
    </div>
    );
}

export default AboutPage;