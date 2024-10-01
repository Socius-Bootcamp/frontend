import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../../Components/Header/TopNavbar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch, updateOrder } from "../../Redux/Order/OrderSlice";

const OrderList = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ordersFetch());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const handleClose = () => setShowModal(false);

  const handleShow = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.status);
    setShowModal(true);
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    dispatch(updateOrder({ ...selectedOrder, status: newStatus }));
    handleClose();
  };

  const handleShowDetail = (order) => {
    navigate(`/order/${order.id}`);
  };

  return (
    <div className="container-fluid p-0" style={{ marginBottom: "3rem" }}>
      <TopNavbar />
      <h1 className="m-4 text-center">Administrador de Órdenes</h1>
      <Card className="m-2">
        <Card.Body>
          <Table striped bordered hover className="">
            <thead>
              <tr>
                <th>N° Orden</th>
                <th>Estado</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Dirección</th>
                <th className="d-none d-lg-table-cell">Provincia</th>
                <th className="d-none d-lg-table-cell">Ciudad</th>
                <th className="d-none d-lg-table-cell">Pais</th>
                <th>Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.Orders.map((order) => (
                  <tr key={order.id}>
                    <td className="text-center">{order.id}</td>
                    <td>{order.status}</td>
                    <td>${order.total}</td>
                    <td>{order.date.slice(0, 16).replace("T", " ")}</td>
                    <td className="d-lg-none">
                      {order.address},{order.province}, {order.city}, {order.country}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {order.address1} {order.address2}
                    </td>
                    <td className="d-none d-lg-table-cell">{order.province}</td>
                    <td className="d-none d-lg-table-cell">{order.city}</td>
                    <td className="d-none d-lg-table-cell">{order.country}</td>
                    <td>{order.UserId}</td>
                    <td className="text-center">
                      <Button variant="outline-warning m-1" onClick={() => handleShow(order)}>
                        Editar Estado
                      </Button>
                      <Button variant="outline-info m-1" onClick={() => handleShowDetail(order)}>
                        Detalle
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Estado de la Orden N°: {selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateStatus}>
            <Form.Group controlId="formStatus">
              <Form.Label>Estado de la Orden</Form.Label>
              <Form.Control as="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="confirmed">Confirmado</option>
                <option value="processing">En Proceso</option>
                <option value="shipped">Enviado</option>
                <option value="delivered">Entregado</option>
                <option value="canceled">Cancelado</option>
              </Form.Control>
            </Form.Group>
            <div className="text-end mt-3">
              <Button variant="outline-secondary" type="submit">
                Actualizar Estado
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
};

export default OrderList;
