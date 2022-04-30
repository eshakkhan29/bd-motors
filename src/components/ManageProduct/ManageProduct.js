import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageProduct.css'

const ManageProduct = ({ product, handelDeleteProduct }) => {
    const navigate = useNavigate();
    const { name, img, price, _id, quantity } = product;
    
    return (
        <div className='manage-item col-12 d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column p-3 justify-content-center align-items-center'>
            <div>
                <img className='pdimage' width={100} height={100} src={img} alt="" />
            </div>
            <div className='my-lg-0 my-3'>
                <h3>{name}</h3>
                <p>Price: <b>${price}</b> </p>
                <p>In Stock: <b>{quantity}</b></p>
            </div>
            <div className='delete-button'>
                <button onClick={() => handelDeleteProduct(_id)} className='btn btn-danger delete-button me-2'>Delete</button>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='btn btn-dark update-button'>Update</button>
            </div>
        </div>
    );
};

export default ManageProduct;