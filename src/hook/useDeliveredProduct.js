import { useEffect, useState } from 'react';

const useDeliveredProduct = () => {
    const [DeliveredProduct, setDeliveredProduct] = useState([]);
    useEffect(()=> {
        
    }, [])
    return [DeliveredProduct, setDeliveredProduct];
};

export default useDeliveredProduct;