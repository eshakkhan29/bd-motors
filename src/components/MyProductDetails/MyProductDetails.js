import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';

const MyProductDetails = ({ product, reFetch, setReFetch }) => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useMangeProduct([]);
    const { img, name, description, supplier, price, quantity, _id } = product;

    const handelDeleteProduct = id => {
        const handleClose = () => setShow(false);
        const url = `https://fierce-everglades-14403.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data?.acknowledged === true) {
                    const restProducts = products.filter(product => product._id !== id)
                    setProducts(restProducts);
                    toast.error('Product Delete successfully')
                    setReFetch(!reFetch);
                }
            })
        handleClose();
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='col-lg-4'>
            <div className='card'>
                <img src={img} alt="bike" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity} </p>
                    <p>{description}</p>
                    <h4>Supplier name: {supplier}</h4>
                </div>
                <button onClick={() => handleShow()} className='btn btn-danger'>Delete</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you delete this item?</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={handleClose}>
                        no
                    </Button>
                    <Button variant="danger" onClick={() => handelDeleteProduct(_id)}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyProductDetails;