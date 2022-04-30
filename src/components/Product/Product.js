import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, description, supplier, price, quantity, _id } = product;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-12'>
            <div className='home-card card position-relative'>
                <img src={img} alt="" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <p>Price: <b>${price}</b></p>
                    <p>In Stock: <b>{quantity}</b> </p>
                    <p>{description}</p>
                    <p>supplier <b>{supplier}</b></p>
                </div>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='btn btn-dark position-absolute bottom-0 w-100'>Update</button>
            </div>
        </div>
    );
};

export default Product;