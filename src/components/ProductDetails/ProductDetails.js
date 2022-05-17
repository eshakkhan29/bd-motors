import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useDeliveredProduct from '../../hook/useDeliveredProduct';


const ProductDetails = () => {
    const [DeliveredProduct, setDeliveredProduct] = useDeliveredProduct();
    const quantityRef = useRef('');
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [state, setState] = useState(false);
    const { img, name, description, supplier, price, quantity } = product;
    console.log(product);

    useEffect(() => {
        const loadProduct = () => {
            const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        loadProduct();
    }, [productID, state])


    // delivery product update 
    const updateDeliveryProduct = async () => {
        await axios.post('http://localhost:5000/DeliveredProduct', DeliveredProduct)
            .then(function (response) {
                if (response.data.acknowledged === true) {
                    toast.success('Your product added successfully')
                }
            })
            .catch(error => {
                toast.error('something went wrong')
            });
    }

    // delivery product

    const handelDelivery = async () => {

        const { ...updateProduct } = product;
        const { quantity } = updateProduct;
        const quantityString = JSON.stringify(updateProduct['quantity'] = parseInt(quantity) - 1)
        updateProduct['quantity'] = quantityString;

        const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
        const { data } = await axios.put(url, updateProduct);
        console.log(data);
        if (data.acknowledged === true) {
            setDeliveredProduct(updateProduct)
            updateDeliveryProduct();
            toast.success('Your product Delivery successfully')
        }
        setState(!state);
    }

    // reStock Product

    const handelRestock = async () => {
        const increaseQuantity = quantityRef.current.value;
        const { ...updateProduct } = product;
        const { quantity } = updateProduct;
        const quantityString = JSON.stringify(updateProduct['quantity'] = parseInt(quantity) + parseInt(increaseQuantity))
        updateProduct['quantity'] = quantityString;
        const url = `https://fierce-everglades-14403.herokuapp.com/product/${productID}`;
        const { data } = await axios.put(url, updateProduct);
        console.log(data);
        if (data.acknowledged === true) {
            toast.success('Your product Added successfully')
        }
        setState(!state);
    }

    return (
        <div className='container mt-5'>
            <div className="card border-0 my-5">
                <div className="row g-0 flex-column flex-lg-row align-items-center">
                    <div className="col-lg-6">
                        <img src={img} className="img-fluid rounded-3" alt="bike" />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body p-0 mt-lg-0 mt-3">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-text">{description}</p>
                            <h4 className="card-text"><b>Supplier:</b> {supplier}</h4>
                            <h5 className="card-text"><b>Price:</b> ${price}</h5>
                            <h5 className="card-text"><b> In stock:</b>  {quantity}</h5>
                        </div>
                        <div className='d-flex justify-content-lg-between align-items-center mt-3 flex-lg-row flex-column'>
                            <button onClick={handelDelivery} className='btn btn-dark mb-lg-0 mb-3'>Delivered</button>
                            <div className='d-flex'>
                                <input className='ps-3' ref={quantityRef} type="text" name="restock" id="" placeholder='Stock Count' />
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