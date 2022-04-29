import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, description, supplier, price, quantity, _id } = product;
    const navigate = useNavigate();
    return (
        <div className='col-lg-6 col-12'>
            <div className='card'>
                <img src={img} alt="" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <h3> {quantity} </h3>
                    <p>{description}</p>
                    <h4>{supplier}</h4>
                </div>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='btn btn-dark'>Update</button>
            </div>
        </div>
    );
};

export default Product;