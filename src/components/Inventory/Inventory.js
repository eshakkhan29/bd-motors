import React, { useEffect, useState } from 'react';
import Product from "../Product/Product";
const Inventory = () => {
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
        </div>
    );
};

export default Inventory;