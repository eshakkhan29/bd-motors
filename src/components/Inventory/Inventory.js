import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from "../Product/Product";
const Inventory = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container mt-5'>
            <h1 className='text-center text-black'>Inventory</h1>
            <div className='row g-4'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='my-5 text-center'>
                <button onClick={()=>navigate('/manageInventories')} className='btn btn-dark w-25'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Inventory;