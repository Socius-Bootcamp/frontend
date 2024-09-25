import React from "react";
import { useParams } from 'react-router-dom'; 

import { Card, Button, Table } from 'react-bootstrap';

import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";

const users = [
    { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@example.com' },
    { id: 2, firstName: 'María', lastName: 'Gómez', email: 'maria.gomez@example.com' },
  ];
  
  const orderItems = [
    { id: 1, qty: 2, price: 50, orderId: 1, productId: 101, name: 'Producto A', img: 'https://via.placeholder.com/50' },
    { id: 2, qty: 1, price: 100, orderId: 1, productId: 102, name: 'Producto B', img: 'https://via.placeholder.com/50' },
    { id: 3, qty: 3, price: 30, orderId: 2, productId: 103, name: 'Producto C', img: 'https://via.placeholder.com/50' },
  ];
  
  const orders = [
    { id: 1, status: 'Confirmado', total: 200, userId: 1 },
    { id: 2, status: 'En Proceso', total: 90, userId: 2 },
  ];

const OrderDetail = () => {
    const {id} = useParams();
    const orderId = parseInt(id);
    
    const order = orders.find(order => order.id === orderId);

    if (!order) {
        return <div>Orden no encontrada</div>;
    }

    const items = orderItems.filter(item => item.orderId === orderId);
    const user = users.find(user =>user.id ===  order.userId);

    

    return(
        <div>
            <div>
                <TopNavbar />
                <h1 className="m-4 text-center">Detalle de la Orden N° {order.id}</h1>
                <div className="d-flex justify-content-start m-2">
                    {user ? (
                    <Card className="m-2" style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title className="text-center">Información del Usuario</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            <strong>Nombre:</strong> {user.firstName} {user.lastName}
                            <br />
                            <strong>Email:</strong> {user.email}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    ) : (
                    <div className="alert alert-warning m-2">Usuario no encontrado</div>
                    )}

                    <Card className="m-2 flex-grow-1">
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                        <tbody>
                            {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                <img src={item.img} alt={item.name} width="100" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>${item.price}</td>
                                <td>${(item.qty * item.price)}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                        <div className="d-flex justify-content-end mt-4">
                            <h5>Total de la orden: ${order.total}</h5>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default OrderDetail;