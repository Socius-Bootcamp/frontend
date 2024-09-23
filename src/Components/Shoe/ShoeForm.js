import React, { useState, useEffect } from 'react';

import { Form, Button, Card } from 'react-bootstrap';
import CategoryCard from '../Categories/CategoryCard';


const ShoeForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ name: '', price: '', stock: '', category: '' }); // Restablecer el formulario si no hay datos iniciales
        }
    }, [initialData]);

    const handleChage = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', price: '', stock: '', category: '' });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className='my-2'>
                <label className='form-label' htmlFor='name'>Nombre</label>
                <input type="text" id="name" name="name" value={formData.name}  onChange={handleChage} className="form-control" placeholder="Nombre del Modelo de Zapatilla"/>
            </div>

            <div className='my-2'>
                <label className='form-label' htmlFor='price'>Precio</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChage} className="form-control" placeholder="Precio de Venta"/>
            </div>
            <div className='mt-2'>
                <label className='form-label' htmlFor='stock'>Stock</label>
                <input type="number" id="stock" name="stock" value={formData.stock}  onChange={handleChage} className="form-control" placeholder="Stock Disponible"/>
            </div>
            <div className='mt-2'>
                <label className='form-label' htmlFor='category'>Categoría</label>
                <select id="category" name="category" value={formData.category}  onChange={handleChage} className="form-select">
                <option value="none">Seleccione una categoria</option>
                <option value="Urban">Urban</option>
                <option value="Basket">Basket</option>
                <option value="Skate">Skate</option>

                </select>
            </div>
            <div className='m-3 text-end'>
                <button type='submit' className='btn btn-outline-secondary '>
                    {initialData ? 'Actualizar' : 'Agregar'}
                </button>
            </div>
        </form>
    );
};

export default ShoeForm;