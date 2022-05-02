import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../components/Login/firebase.init';

const useMangeProduct = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        const getProduct = async () => {
            try {
                const url = `https://fierce-everglades-14403.herokuapp.com/products/all?email=${user.email}`;
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProducts(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403 || error.message === "Network Error") {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getProduct();
    }, []);
    return [products, setProducts];
};

export default useMangeProduct;