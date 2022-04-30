import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';
import './ManageProduct.css'

const ManageProduct = ({ product }) => {
    const { name, img, price, _id, quantity } = product;
    const [products, setProducts] = useMangeProduct([]);
    const [agree, setAgree] = useState(true);
    const [show, setShow] = useState(false);

    const handleAgree = () => {
        setAgree(true);
        setShow(false);
        handelDeleteProduct(_id);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(agree);

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
                    toast.error('Product Delete successfully')
                }
            })
    }
    return (
        <div className='manage-item col-12 d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column p-3 justify-content-center align-items-center'>
            <div>
                <img className='pdimage' width={150} height={150} src={img} alt="" />
            </div>
            <div className='my-lg-0 my-3'>
                <h3>{name}</h3>
                <p>Price: <b>${price}</b> </p>
                <p>In Stock: <b>{quantity}</b></p>
            </div>
            <div className='delete-button'>
                <button onClick={handleShow} className='btn btn-danger delete-button'>Delete</button>
            </div>
            <Modal show={show}>
                <Modal.Body>
                    <p className='text-danger'>Are you sure ? you want to delete this product</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleAgree}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageProduct;