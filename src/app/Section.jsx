
import React from 'react';
import pic from '../img/pic_react.jpg';
import '../css/Section.css';

const Section = () => {
    return (
        <section>
            <img className="img_responsive" src={pic} alt="pic"/>
        </section>
    );
}

export default Section;