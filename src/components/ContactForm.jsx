import React, { useState } from 'react';
import { addContact } from '../services/apiServices';
import { useContacts } from '../context/contactContext';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function ContactForm() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        image: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { dispatch } = useContacts();

    const validateForm = () => {
        const newErrors = {};
        
        if (!contact.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        
        if (!contact.email.trim()) {
            newErrors.email = 'El email es requerido';
        }
        
        if (!contact.phone.trim()) {
            newErrors.phone = 'El teléfono es requerido';
        }
        
        if (!contact.address.trim()) {
            newErrors.address = 'La dirección es requerida';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const finalContact = {
            ...contact,
            image: contact.image || `https://i.pravatar.cc/150?u=${Date.now()}`
        };

        addContact(finalContact, dispatch, navigate);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    return (
        <div className="container">
            <div className='form-container'>

                <div className="d-flex align-items-center justify-content-center mb-4">
                    <i className="fas fa-user-plus fa-2x me-3 text-primary"></i>
                    <h2 className="mb-0">Agregar Nuevo Contacto</h2>
                </div>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    <i className="fas fa-user me-2"></i>Nombre completo
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name='name' 
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Ingresa el nombre completo" 
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    <i className="fas fa-envelope me-2"></i>Correo electrónico
                                </label>
                                <input 
                                    type="text" 
                                    id="email"
                                    name='email' 
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="ejemplo@correo.com" 
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    <i className="fas fa-phone me-2"></i>Teléfono
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name='phone' 
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    placeholder="+1 (555) 123-4567" 
                                    value={contact.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    <i className="fas fa-map-marker-alt me-2"></i>Dirección
                                </label>
                                <input 
                                    type="text" 
                                    id="address"
                                    name='address' 
                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                    placeholder="Calle, Ciudad, País" 
                                    value={contact.address}
                                    onChange={handleChange}
                                />
                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="image" className="form-label">
                            <i className="fas fa-image me-2"></i>URL de imagen (opcional)
                        </label>
                        <input 
                            type="url" 
                            id="image"
                            name='image' 
                            className="form-control"
                            placeholder="https://ejemplo.com/imagen.jpg" 
                            value={contact.image}
                            onChange={handleChange}
                        />
                        <div className="form-text">Si no proporcionas una imagen, se generará una automáticamente</div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button 
                            type="button" 
                            className="btn btn-secondary me-md-2"
                            onClick={() => navigate('/')}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-save me-2"></i>
                            Guardar Contacto
                        </button>
                    </div>
                </form>

                <Link to="/">
                    <span className="small text-decoration-none text-primary">&larr; Volver a Contactos</span>
                </Link>

            </div>

        </div>
    );
}

export default ContactForm;





