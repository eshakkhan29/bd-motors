import React from 'react';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';
import './ManageProduct.css'

const ManageProduct = ({ product }) => {
    const { name, img, price, _id } = product;
    const [products, setProducts, changeState, setChangeState] = useMangeProduct([]);


    const handelDeleteProduct = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged === true) {
                    const restProducts = products.filter(product => product._id !== id)
                    setProducts(restProducts);
                    // setChangeState(!changeState)
                    toast.success('Product Delete successfully')
                }
            })
    }
    return (
        <div className='manage-item col-12 d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column p-3 justify-content-center align-items-center'>
            <div>
                <img className='pdimage' width={150} height={150} src={img} alt="" />
            </div>
            <div className='my-lg-0 my-3'>
                <h3>{name}</h3>
                <p>Price: <b>${price}</b> </p>
            </div>
            <div className='delete-button'>
                <button onClick={() => handelDeleteProduct(_id)} className='btn btn-danger delete-button'>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;