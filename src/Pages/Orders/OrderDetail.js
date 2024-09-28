import React from "react";
import { useParams } from 'react-router-dom'; 

import { Card, Button, Table } from 'react-bootstrap';

import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";

// const users = [
//     { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@example.com' },
//     { id: 2, firstName: 'María', lastName: 'Gómez', email: 'maria.gomez@example.com' },
//   ];
  
//   const orderItems = [
//     { id: 1, qty: 2, price: 50, orderId: 1, productId: 101, name: 'Producto A', img: 'https://via.placeholder.com/50' },
//     { id: 2, qty: 1, price: 100, orderId: 1, productId: 102, name: 'Producto B', img: 'https://via.placeholder.com/50' },
//     { id: 3, qty: 3, price: 30, orderId: 2, productId: 103, name: 'Producto C', img: 'https://via.placeholder.com/50' },
//   ];
  
//   const orders = [
//     { id: 1, status: 'Confirmado', total: 200, userId: 1 },
//     { id: 2, status: 'En Proceso', total: 90, userId: 2 },
//   ];

const OrderDetail = () => {
    const {id} = useParams();
    const orders = useSelector((state) => state.orders);
    const orderId = parseInt(id);
    const user=JSON.parse(localStorage.getItem("token"));
    const {products} = useSelector((state) => state.products);
    const order = orders.Orders.find(order => order.id === orderId);
    
    if (!order) {
        return <div>Orden no encontrada</div>;
    }



    //const items = orderItems.filter(item => item.orderId === orderId);
    //const user = users.find(user =>user.id ===  order.userId);

    

    return(
        <div>
            <div>
                <TopNavbar />
                <h1 className="m-4 text-center">Order N°{order.id} details</h1>
                <div className="d-flex justify-content-start m-2">
                    {user ? (
                    <Card className="m-2" style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title className="text-center">Order information</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            <strong>Status:</strong> {order.status}
                            <br />
                            <strong>Street:</strong> {order.address1}
                            <br />
                            <strong>Number/Letter:</strong> {order.address2}
                            <br />
                            <strong>Province:</strong> {order.province}
                            <br />
                            <strong>City:</strong> {order.city}
                            <br />
                            <strong>Country:</strong> {order.country}
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
                                <th>Product</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                        <tbody>
                            {order.OrderItems && order.OrderItems.map((item) => (
                            <tr key={item.id}>
                                <td>
                                <img src={`../img/products/${products.find(p=> p.id === item.id).image}`} alt={item.name} width="100" />
                                </td>
                                <td>{products.find(p=> p.id === item.id).name}</td>
                                <td>{item.qty}</td>
                                <td>${item.price}</td>
                                <td>${(item.qty * item.price)}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                        <div className="d-flex justify-content-end mt-4">
                            <h5>Order Total: ${order.total}</h5>
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