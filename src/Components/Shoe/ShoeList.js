import React, { useState } from 'react';

import { Table, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ShoeList = ({ shoes, onEdit, onDelete }) => {
    const { categories }= useSelector((state) => state.categories);
    const [shoe,setShoe] =useState();

    //Modal 
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = (shoe) => {
        setShoe(shoe);
        setShow(true);
    }
    const handleConfirm = (e) =>{
        e.preventDefault();
        onDelete(shoe.id)
        handleClose();
    }

    return (
        // <div>
        //     <ul>
        //         {shoes.map(shoe => (
        //             <li key={shoe.id}>
        //                 {shoe.name}
        //                 <button className='btn btn-outline-warning' onClick={() => onEdit(shoe)}>Editar</button>
        //                 <button className='btn btn-outline-danger' onClick={() => onDelete(shoe.id)}>Borrar</button>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <>
        <div className='mt-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.length > 0 ? (
                        shoes.map(shoe => (
                            <tr key={shoe.id}>
                                <td>{shoe.name}</td>
                                <td>{shoe.price}</td>
                                <td>{shoe.stock}</td>
                                <td>{categories.find(c => (c.id === shoe.CategoryId)).name}</td>
                                <td className='text-center'>
                                    <Button 
                                        variant="outline-warning" 
                                        onClick={() => onEdit(shoe)}
                                    >
                                        Editar
                                    </Button>
                                    <Button 
                                        variant="outline-danger" 
                                        onClick={() => handleShow(shoe)}
                                        className='ms-2'
                                    >
                                        Borrar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No hay zapatillas disponibles</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
        <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Confirm DELETE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <b>Are you sure about making this changes?</b>
            <br/>
            *If the item is already on a confirmed Order instead of deleting the item, the stock will be set to 0.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirm}>Yes, I understand</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default ShoeList;