import  { useEffect, useState } from 'react';

const useMangeProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fierce-everglades-14403.herokuapp.com/products/all")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default useMangeProduct;