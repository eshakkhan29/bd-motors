import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useMangeProduct from '../../hook/useMangeProduct';

const MyProductDetails = ({ product }) => {
    const { img, name, description, supplier, price, quantity, _id } = product;
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
        if (agree) {
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
    }
    return (
        <div className='col-lg-4'>
            <div className='card'>
                <img src={img} alt="bike" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <h3> {quantity} </h3>
                    <p>{description}</p>
                    <h4>{supplier}</h4>
                </div>
                <button onClick={() => handleShow()} className='btn btn-danger'>Delete</button>
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

export default MyProductDetails;