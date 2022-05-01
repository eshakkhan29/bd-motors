import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner 1.jpg';
import banner2 from '../../images/banner/banner 2.jpg';
import banner3 from '../../images/banner/banner 3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="banner d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;