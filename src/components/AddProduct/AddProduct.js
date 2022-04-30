import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';


const AddProduct = () => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const supplierRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const imgUlrRef = useRef('');

    const handelAddProduct = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const supplier = supplierRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const img = imgUlrRef.current.value;
        const product = { name, description, supplier, price, quantity, img };
        console.log(product);
    }
    return (
        <div>
            <div className='signup mx-auto my-5'>
                <Form onSubmit={handelAddProduct}>
                    <h2>Add New Product</h2>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control required ref={nameRef} type="text" placeholder="Product name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" required ref={descriptionRef} type="text" placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control required ref={supplierRef} type="text" placeholder="Supplier Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control required ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control required ref={quantityRef} type="number" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image url</Form.Label>
                        <Form.Control required ref={imgUlrRef} type="text" placeholder="Image ulr" />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">
                        Add Product
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default AddProduct;