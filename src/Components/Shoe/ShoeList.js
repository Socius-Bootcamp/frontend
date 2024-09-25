import React from 'react';

import { Table, Button } from 'react-bootstrap';

const ShoeList = ({ shoes, onEdit, onDelete }) => {
    

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
                                <td>{shoe.category}</td>
                                <td className='text-center'>
                                    <Button 
                                        variant="outline-warning" 
                                        onClick={() => onEdit(shoe)}
                                    >
                                        Editar
                                    </Button>
                                    <Button 
                                        variant="outline-danger" 
                                        onClick={() => onDelete(shoe.id)}
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
    );
};

export default ShoeList;