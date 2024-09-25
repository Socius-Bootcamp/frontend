import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const CartCheckoutForm = ({ onSubmit, initialData }) => {
    const cart= useSelector((state) => state.cart);
    const [formData, setFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        province: '',
        country: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData({...initialData});
        } else {
            setFormData({ 
                address1: '',
                address2: '',
                city: '',
                province: '',
                country: '', }); 
        }
    }, [initialData]);

    const handleChage = (e) => {
        const {name, value, files} = e.target;

    };

    const validateForm = () =>{
        const newErrors = {};
        if  (!formData.address1.trim()) newErrors.address1 = 'The street name is mandatory';
        if   (!formData.address2) newErrors.address2 = 'The letter/number is mandatory';
        if  (!formData.province) newErrors.province = 'The province is mandatory';
        if  (!formData.city) newErrors.city = 'The City is mandatory';
        if   (!formData.country) newErrors.country = 'The country is mandatory';
        
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
        onSubmit({ ...formData, id: 3 || Date.now() });

        fetch('/api/endpoint', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
        })
        .catch((error) => {
          // Handle any errors
        });
        
        setFormData({ address1: '', address2: '', province: '', city: '', country: ''});
    };

    return (

        <form onSubmit={handleSubmit}  data-bs-theme="light" encType='multipart/form-data'>
            <div className='my-2'>
                <label className='form-label' htmlFor='address1'>Street Name</label>
                <input type="text" id="address1" name="address1" value={formData.address1}  onChange={handleChage} className="form-control" placeholder="Street name of the shipping address"/>
                {errors.address1 && <small className='text-danger'>{errors.address1}</small>}
            </div>

            <div className='my-2'>
                <label className='form-label' htmlFor='address2'>House/Appartment Number or Letter</label>
                <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChage} className="form-control" placeholder="Number or Letter"/>
                {errors.address2 && <small className="text-danger">{errors.address2}</small>}
            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor='province'>Province</label>
                <input type="text" id="province" name="province" value={formData.province}  onChange={handleChage} className="form-control" placeholder="Province"/>
                {errors.province && <small className="text-danger">{errors.province}</small>}
            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor='city'>City</label>
                <input type="text" id="city" name="city" value={formData.city}  onChange={handleChage} className="form-control" placeholder="City"/>
                {errors.city && <small className="text-danger">{errors.city}</small>}
            </div>

            <div className='mt-2'>
                <label className='form-label' htmlFor='country'>Country</label>
                <input type="text" id="country" name="country" value={formData.country}  onChange={handleChage} className="form-control" placeholder="Country"/>
                {errors.country && <small className="text-danger">{errors.country}</small>}
            </div>

            <div className='m-3 text-end'>
                <button type='submit' className='btn btn-outline-secondary '>
                    {initialData ? 'Actualizar' : 'Agregar'}
                </button>
            </div>
        </form>
    );
};

export default CartCheckoutForm