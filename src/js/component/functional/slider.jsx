import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import Slider from "react-slick";
import slide_one from '../../src/img/slide_one.jpg';
import slide_two from '../../src/img/slide_two.jpg';
import slide_three from '../../src/img/slide_three.jpg';

const Carrousel = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
        
            <Slider {...settings}>
                <div>
                    <div className = "carrousel_image"
                    style={{
                        background: `url(${slide_one})`,
                        height: `${window.innerHeight}px`,
                    }}>
                    </div>
                </div>
                <div>
                    <div className = "carrousel_image"
                    style={{
                        background: `url(${slide_two})`,
                        height: `${window.innerHeight}px`,
                    }}>
                </div>
                </div>
                <div>
                    <div className = "carrousel_image"
                    style={{
                        background: `url(${slide_three})`,
                        height: `${window.innerHeight}px`,
                    }}>
                </div>
                </div>
            </Slider>
        
        </div>
        
        );
};