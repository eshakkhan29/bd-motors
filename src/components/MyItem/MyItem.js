import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';
import auth from '../Login/firebase.init';
import MyProductDetails from '../MyProductDetails/MyProductDetails';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const MyItem = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProducts] = useMangeProduct([]);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const getMyProducts = async () => {
            const url = `https://fierce-everglades-14403.herokuapp.com/userProducts?email=${user.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProduct(data);
            } catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403 || error.message === "Network Error") {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyProducts();
    }, []);

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
        <div className='container my-5'>
            <div className='row g-4'>
                {
                    product.map(product => <MyProductDetails key={product._id} handelDeleteProduct={handelDeleteProduct} product={product}></MyProductDetails>)
                }
            </div>
        </div>
    );
};

export default MyItem;