import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useUserToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://fierce-everglades-14403.herokuapp.com/login', { email });
                console.log(data);
                setToken(data.token);
                localStorage.setItem('accessToken', data.token);
            }
        }
        getToken();
    }, [user]);
    return [token, setToken];
};

export default useUserToken;