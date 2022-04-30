import React, { useEffect, useState } from 'react';

const useMangeProduct = () => {
    const [products, setProducts] = useState([]);
    const [changeState, setChangeState] = useState(false);
    useEffect(() => {
        fetch("https://fierce-everglades-14403.herokuapp.com/products/all")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [changeState]);
    return [products, setProducts, changeState, setChangeState];
};

export default useMangeProduct;