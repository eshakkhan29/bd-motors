import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';
import MyProductDetails from '../MyProductDetails/MyProductDetails';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const url = `https://fierce-everglades-14403.herokuapp.com/userProducts?email=${user.email}`;
    console.log(product);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className='container my-5'>
            <div className='row g-4'>
                {
                    product.map(product => <MyProductDetails key={product._id} product={product}></MyProductDetails>)
                }
            </div>
        </div>
    );
};

export default MyItem;