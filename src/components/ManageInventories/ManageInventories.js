import React, { useEffect, useState } from 'react';
import './ManageInventories.css'
import { useNavigate } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import useMangeProduct from '../../hook/useMangeProduct';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [products] = useMangeProduct([]);
   
    return (
        <div className='ManageInventories mx-auto mt-5'>
            <div className='d-flex justify-content-around align-items-center flex-lg-row flex-column'>
                <h1 >ManageInventories</h1>
                <button onClick={()=>navigate('/addproduct')} className='btn btn-dark'>Add new Item</button>
            </div>
            <div className='row gy-4 my-3'>
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;