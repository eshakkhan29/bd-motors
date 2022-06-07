import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';
import MyProductDetails from '../MyProductDetails/MyProductDetails';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const MyItem = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [reFetch, setReFetch]= useState(false);


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
    }, [user.email, navigate, reFetch]);


    return (
        <div className='container my-5'>
            <div className='row g-4'>
                {
                    product.map(product => <MyProductDetails setReFetch={setReFetch} reFetch={reFetch} key={product._id} product={product}></MyProductDetails>)
                }
            </div>
        </div>
    );
};

export default MyItem;