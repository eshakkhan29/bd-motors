import React from 'react';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';

const MyProductDetails = ({ product }) => {
    const { img, name, description, supplier, price, quantity, _id } = product;
    const [products, setProducts] = useMangeProduct([]);

    const handelDeleteProduct = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged === true) {
                    const restProducts = products.filter(product => product._id !== id)
                    setProducts(restProducts);
                    // setChangeState(!changeState)
                    toast.success('Product Delete successfully')
                }
            })
    }
    return (
        <div className='col-lg-4'>
            <div className='card'>
                <img src={img} alt="product" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <h3> {quantity} </h3>
                    <p>{description}</p>
                    <h4>{supplier}</h4>
                </div>
                <button onClick={() => handelDeleteProduct(_id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default MyProductDetails;