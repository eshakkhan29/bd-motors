import React from 'react';

const DProduct = ({product}) => {
    const {image, name, price} = product;
    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-text'> <b>price:</b> ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default DProduct;