import React from 'react'
import Footer from '../../Components/Footer/Footer';
import TopNavbar from '../../Components/Header/TopNavbar';
import { Button, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const orders= useSelector((state) => state.orders);
    const user=JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    const handleShowDetail = (id) => {
        navigate(`/order/${id}`);
    }

  return (
    <div>
    <div>
        <TopNavbar />
        <h1 className="m-4 text-center">My Profile</h1>
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
                    <br />
                    <strong>Phone:</strong> {user.phone}
                </Card.Text>
                </Card.Body>
            </Card>
            ) : (
            <div className="alert alert-warning m-2">Usuario no encontrado</div>
            )}

            <Card className="m-2 flex-grow-1">
            <Card.Body>
            <Card.Title>My Orders</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>N° of the Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                <tbody>
                    {orders && orders.Orders.map((item) => (
                    <tr key={item.id}>
                        <td><Button variant="outline-info" onClick={() => handleShowDetail(item.id)}>#{item.id}</Button></td>
                        <td>{item.date.slice(0, 16).replace('T', ' ')}</td>
                        <td>{item.status}</td>
                        <td>${item.total}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </Card.Body>
            </Card>
        </div>
        <Footer />
    </div>
</div>
);
};


export default UserProfile