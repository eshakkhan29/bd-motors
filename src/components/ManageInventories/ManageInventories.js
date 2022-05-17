import React from 'react';
import './ManageInventories.css';
import { useNavigate } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import useMangeProduct from '../../hook/useMangeProduct';
import Loading from "../Loading/Loading";
import { toast } from 'react-toastify';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useMangeProduct([]);


    if (products.length === 0) {
        return <Loading></Loading>
    }

    const handelDeleteProduct = id => {
        const url = `https://fierce-everglades-14403.herokuapp.com/product/${id}`;
        if (window.confirm('are you sure you want to delete this item')) {
            fetch(url, {
                method: 'DELETE',
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.acknowledged === true) {
                        const restProducts = products.filter(product => product._id !== id)
                        setProducts(restProducts);
                        toast.error('Product Delete successfully')
                    }
                })
        }
    }

    return (
        <div className='ManageInventories mx-auto mt-5'>
            <div className='d-flex justify-content-around align-items-center flex-lg-row flex-column'>
                <h1 >Manage Inventories</h1>
                <button onClick={() => navigate('/addproduct')} className='btn btn-dark'>Add new Item</button>
            </div>
            <div className='row gy-4 my-3'>
                {
                    products.map(product => <ManageProduct key={product._id} handelDeleteProduct={handelDeleteProduct} product={product}></ManageProduct>)
                }
            </div>

        </div>
    );
};

export default ManageInventories;