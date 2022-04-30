import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products/all")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1 >ManageInventories</h1>
                <button onClick={()=>navigate('/addproduct')} className='btn btn-dark'>Add new Item</button>
            </div>
            <div className='row g-4 my-3 border-2'>
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;