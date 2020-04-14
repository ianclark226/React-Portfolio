import React from 'react';
import Hero from '../components/Hero/hero'
import Content from '../components/content';
import profile from '../Images/profile_pic.png';
import "./styles.css"

function AboutPage(props) {

    return (
    <div>
        <Hero title={props.title} />
    

    <Content>
    <img src={profile} alt= "" 
    />
       
        <p> Hello my name is Ian Clark. I am a 27 year old graduate from Wilmington University. I graduated with a bachulor degree in Game Design and Development. Ever since I graduated, I have been on and off doing different design jobs such as photo editor and sign design. I have also worked on my own 3D design projects that mainly deal with environment/levels. As of right now I live in north Wilmington, DE by myself and work in the resturant industry.I am trying to get into the programming field since it is a high in demand position. Some of my hobbies include, playing video games, enjoying craft beer, hiking, and hanging out with friends. If you like what you read, feel free to contact me on my next page. I look forward to meeting/discussing with you.</p>
    
    </Content>
    </div>
    );
}

export default AboutPage;