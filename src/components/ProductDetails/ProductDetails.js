import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const { img, name, description, supplier, price, quantity } = product;
    console.log(product);
    useEffect(() => {
        const url = `http://localhost:5000/product/${productID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productID])


    return (
        <div className='container mt-5'>
            <div className="card border-0 my-5">
                <div className="row g-0 flex-column flex-lg-row align-items-center">
                    <div className="col-lg-6">
                        <img src={img} className="img-fluid rounded-3" alt="bike" />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body p-0">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-text">{description}</p>
                            <h4 className="card-text"><b>Supplier:</b> {supplier}</h4>
                            <h5 className="card-text"><b>Price:</b> ${price}</h5>
                            <h5 className="card-text"><b> In stok:</b>  {quantity}</h5>
                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <button className='btn btn-dark'>Delivered</button>
                            <div className='d-flex'>
                                <input type="text" name="restock" id="" placeholder='Stock Count' />
                                <button className='btn btn-dark ms-3'>Restock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;