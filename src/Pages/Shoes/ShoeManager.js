import React, { useState } from 'react';
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";


import ShoeList from '../../Components/Shoe/ShoeList';
import ShoeForm from '../../Components/Shoe/ShoeForm';

import * as ReactBootstrap from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ShoeManager = () => {
    // const [shoes, setShoes] = useState([]);
    const [shoes, setShoes] = useState([
        { id: 1, name: 'Zapatilla 1', price: 100, stock: 10, category: 'Urban' },
        { id: 2, name: 'Zapatilla 2', price: 150, stock: 5, category: 'Basket' },
        { id: 3, name: 'Zapatilla 3', price: 200, stock: 8, category: 'Skate' },
    ]);
    
    const [currentShoe, setCurrentShoe] = useState(null);

    const addShoe = (shoe) => {
        setShoes([...shoes, { ...shoe, id: Date.now() }]);
    };

    const updateShoe = (updatedShoe) => {
        setShoes(shoes.map(shoe => (shoe.id === updatedShoe.id ? updatedShoe : shoe)));
        setCurrentShoe(null);
    };

    const deleteShoe = (id) => {
        setShoes(shoes.filter(shoe => shoe.id !== id));
    };

    const editShoe = (shoe) => {
        setCurrentShoe(shoe);
    };


    return (
        
        <div className='container-fluid p-0'>
            <TopNavbar showFullMenu={true} />
            <h1 className='text-center mt-5'>Administrador de Productos</h1>
            <div className='row mx-5'>
                {/* <div className='col-6'>
                    <card>
                        <Card.Body>
                            <Card.Title>Formulario de Zapatillas</Card.Title>
                            <ShoeForm onSubmit={currentShoe ? updateShoe : addShoe} initialData={currentShoe} />
                        </Card.Body>
                    </card>
                </div> */}
                <div className='col-12 col-lg-6 mt-5 order-lg-0 order-1'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Lista de Zapatillas</Card.Title>
                            <ShoeList shoes={shoes} onEdit={editShoe} onDelete={deleteShoe} />
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-lg-6 mt-5 order-lg-1 order-0'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'>Formulario de Zapatillas</Card.Title>
                            <ShoeForm onSubmit={currentShoe ? updateShoe : addShoe} initialData={currentShoe} />
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default ShoeManager;