import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <div className="spinner-border spinier-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;