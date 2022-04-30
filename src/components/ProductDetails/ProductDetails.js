import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const quantityRef = useRef('');
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [updateProduct, setUpdateProduct] = useState({});
    const [state, setState] = useState(false);
    const { img, name, description, supplier, price, quantity } = product;
    console.log(product);
    console.log(state);

    useEffect(() => {
        const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productID, state])



    const handelDelivery = async () => {
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) - 1;
        const quantityString = JSON.stringify(newQuantity);
        const updatedProduct = { quantity: quantityString, ...rest };
        delete updatedProduct._id;
        setUpdateProduct(updatedProduct)
        console.log(updatedProduct);

        const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
        const res = await axios.put(url, updateProduct);
        console.log(res);
        setState(!state);

        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }

    const handelRestock = () => {
        const increaseQuantity = quantityRef.current.value;
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) + parseInt(increaseQuantity);
        const quantityString = JSON.stringify(newQuantity);
        const updatedProduct = { quantity: quantityString, ...rest };
        delete updatedProduct._id;
        setUpdateProduct(updatedProduct)
        console.log(updatedProduct);
        setState(!state);

        const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(!state);
            })
    }

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
                            <button onClick={handelDelivery} className='btn btn-dark'>Delivered</button>
                            <div className='d-flex'>
                                <input ref={quantityRef} type="text" name="restock" id="" placeholder='Stock Count' />
                                <button onClick={handelRestock} className='btn btn-dark ms-3'>Restock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;