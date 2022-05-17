import React from 'react';
import useDeliveredProduct from '../../hook/useDeliveredProduct';
import DProduct from './DProduct';

const DeliveredProduct = () => {
    const [DeliveredProduct, setDeliveredProduct] = useDeliveredProduct();
    return (
        <div>
            <h2 className='text-center text-black'>Delivered Product</h2>
            <div className='row'>
                {
                    DeliveredProduct.map(p => <DProduct key={p._id} product={p}></DProduct>)
                }
            </div>
        </div>
    );
};

export default DeliveredProduct;