import React from 'react';
import Banner from '../Banner/Banner';
import DeliveredProduct from '../DeliveredProduct/DeliveredProduct';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <DeliveredProduct></DeliveredProduct>
        </div>
    );
};

export default Home;