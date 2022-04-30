import React from 'react';

const MyProductDetails = ({ product, handelDeleteProduct }) => {
    const { img, name, description, supplier, price, quantity, _id } = product;

    return (
        <div className='col-lg-4'>
            <div className='card'>
                <img src={img} alt="bike" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <h3> {quantity} </h3>
                    <p>{description}</p>
                    <h4>{supplier}</h4>
                </div>
                <button onClick={() => handelDeleteProduct(_id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default MyProductDetails;