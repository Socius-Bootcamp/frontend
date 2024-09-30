import React, { useState } from 'react';
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import ShoeList from '../../Components/Shoe/ShoeList';
import ShoeForm from '../../Components/Shoe/ShoeForm';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, updateProduct } from '../../Redux/Product/ProductSlice';

const ShoeManager = () => {
    // const [shoes, setShoes] = useState([]);
    const shoes= useSelector((state) => state.products).products;
    const dispatch = useDispatch();

    // const [shoes, setShoes] = useState([
    //     { id: 1, name: 'Zapatilla 1', price: 100, stock: 10, category: 'Urban' },
    //     { id: 2, name: 'Zapatilla 2', price: 150, stock: 5, category: 'Basket' },
    //     { id: 3, name: 'Zapatilla 3', price: 200, stock: 8, category: 'Skate' },
    // ]);
    
    const [currentShoe, setCurrentShoe] = useState(null);

    const addShoe = (shoe) => {
        dispatch(createProduct(shoe));
        //setShoes([...shoes, { ...shoe, id: Date.now() }]);
    };

    const updateShoe = (updatedShoe) => {
        //setShoes(shoes.map(shoe => (shoe.id === updatedShoe.id ? updatedShoe : shoe)));
        dispatch(updateProduct(updatedShoe));
        setCurrentShoe(null);
    };

    const deleteShoe = (id) => {
        //setShoes(shoes.filter(shoe => shoe.id !== id));
        dispatch(deleteProduct(id));
    };

    const editShoe = (shoe) => {
        setCurrentShoe(shoe);
    };

    const newShoe = () => {
        setCurrentShoe(null);
    };


    return (
        
        <div className='container-fluid p-0' style={{"marginBottom": "3rem"}}>
            <TopNavbar />
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
                            <div className='row'>
                            <Card.Title className='col-sm'>Lista de Zapatillas</Card.Title>
                            <div className='col-sm' >
                            <Button variant="outline-success" onClick={newShoe} style={{'float':'right'}}>Create New</Button>
                            </div>    
                            
                            </div>
                            
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