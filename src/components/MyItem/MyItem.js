import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';
import auth from '../Login/firebase.init';
import MyProductDetails from '../MyProductDetails/MyProductDetails';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useMangeProduct([]);
    const [product, setProduct] = useState([]);

    const url = `https://fierce-everglades-14403.herokuapp.com/userProducts?email=${user.email}`;
    console.log(product);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [url]);

    const handelDeleteProduct = id => {
        const url = `https://fierce-everglades-14403.herokuapp.com/product/${id}`;
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