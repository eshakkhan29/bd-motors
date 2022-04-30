import React from 'react';

const ManageProduct = ({ product }) => {
    const { name, img, price} = product;
    return (
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <div>
                <img className=' rounded-3' width={150} height={150} src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <div>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;