import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/Login/firebase.init';

const useMangeProduct = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {

        const getProduct = async () => {
            const url = `https://fierce-everglades-14403.herokuapp.com/products/all?email=${user.email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setProducts(data);
        }
        getProduct();
    }, []);
    return [products, setProducts];
};

export default useMangeProduct;