import React from 'react';
import './ManageProduct.css'

const ManageProduct = ({ product }) => {
    const { name, img, price} = product;
    return (
        <div className='manage-item col-12 d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column p-3 justify-content-center align-items-center'>
            <div>
                <img className='pdimage' width={150} height={150} src={img} alt="" />
            </div>
            <div className='my-lg-0 my-3'>
                <h3>{name}</h3>
                <p>Price: <b>${price}</b> </p>
            </div>
            <div className='delete-button'>
                <button className='btn btn-danger delete-button'>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;