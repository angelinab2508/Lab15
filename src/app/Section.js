
import React from 'react';
import pic from '../img/pic_react.jpg';
import '../css/Section.css';

function Section(){
    return (
        <section>
            <img className="img_responsive" src={pic} alt=""/>
        </section>
    );
}

export default Section;