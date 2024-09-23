import React, { useState, useEffect } from 'react';

import { Form, Button, Card } from 'react-bootstrap';
import CategoryCard from '../Categories/CategoryCard';


const ShoeForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (initialData) {
            setFormData({...initialData, image: null});
        } else {
            setFormData({ name: '', price: '', stock: '', category: '', image: null }); 
        }
    }, [initialData]);

    const handleChage = (e) => {
        const {name, value, files} = e.target;

        if (name === 'image'){
            const file = files[0];
            setFormData({...formData, [name]: file});
            // setFormData({...formData, [name]: files[0]});
            setImagePreview(URL.createObjectURL(file));
        }else{
            setFormData({...formData, [name]: value});
        }
        setErrors({ ...errors, [name]: ''});
    };

    const validateForm = () =>{
        const newErrors = {};
        if  (!formData.name.trim()) newErrors.name = 'El nombre del Modelo es Obligatorio.';
        if   (!formData.price) newErrors.price = 'El Precio es Obligatorio.';
        if  (!formData.stock) newErrors.stock = 'La Cantidad en Stock es Obligatoria.';
        if  (!formData.category || formData.category === 'none') newErrors.category = 'La Categoría es Obligatoria';
        if   (!formData.image) newErrors.image = 'La Imagen es Obligatoria.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        // const data = new FormData();
        // data.append('name', formData.name);
        // data.append('price', formData.price);
        // data.append('stock', formData.stock);
        // data.append('category', formData.category);
        // if (formData.image){
        //     data.append('image', formData.image);
        // }
        // onSubmit(data);
        onSubmit({ ...formData, id: initialData?.id || Date.now() });
        setFormData({ name: '', price: '', stock: '', category: '', image: null });
        setImagePreview(null);
    };

    return (

        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='my-2'>
                <label className='form-label' htmlFor='name'>Nombre</label>
                <input type="text" id="name" name="name" value={formData.name}  onChange={handleChage} className="form-control" placeholder="Nombre del Modelo de Zapatilla"/>
                {errors.name && <small className='text-danger'>{errors.name}</small>}
            </div>

            <div className='my-2'>
                <label className='form-label' htmlFor='price'>Precio</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChage} className="form-control" placeholder="Precio de Venta"/>
                {errors.price && <small className="text-danger">{errors.price}</small>}
            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor='stock'>Stock</label>
                <input type="number" id="stock" name="stock" value={formData.stock}  onChange={handleChage} className="form-control" placeholder="Stock Disponible"/>
                {errors.stock && <small className="text-danger">{errors.stock}</small>}
            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor='category'>Categoría</label>
                <select id="category" name="category" value={formData.category}  onChange={handleChage} className="form-select">
                <option value="none">Seleccione una categoria</option>
                <option value="Urban">Urban</option>
                <option value="Basket">Basket</option>
                <option value="Skate">Skate</option>
                </select>
                {errors.category && <small className="text-danger">{errors.category}</small>}
            </div>

            <div className='mt-2'>
                <label className='from-label' htmlFor='image'>Imagen de la Zapatilla</label>
                <input type='file' id='image' name='image' onChange={handleChage} className='form-control mt-2' accept='image/*'/>
                {errors.image && <small className="text-danger">{errors.image}</small>}
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