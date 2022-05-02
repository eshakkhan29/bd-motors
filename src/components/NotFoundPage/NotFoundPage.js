import React from 'react';
import './NotFoundPage.css'
import image from '../../images/404page/404page.jpg';

const NotFoundPage = () => {
    return (
        <div>
            <img className='w-100 image' src={image} alt="" />
        </div>
    );
};

export default NotFoundPage;