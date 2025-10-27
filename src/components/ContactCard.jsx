import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../context/contactContext";
import "../styles/index.css";
import { deleteContact } from "../services/apiServices";

export default function ContactCard({ contact }) {
const { dispatch } = useContacts();

const [showDeleteModal, setShowDeleteModal] = useState(false);

const handleDelete = () => {
    setShowDeleteModal(true);
};    return (
        <>
            <div className="contact-card">

                <img className="contact-avatar"
                     src={contact.image || `https://i.pravatar.cc/150?u=${contact.id}`}
                     alt={`${contact.name} profile`} />

                <div className="contact-details">
                    <h3>{contact.name}</h3>
                    <p><i className="fas fa-map-marker-alt" /> {contact.address}</p>
                    <p><i className="fas fa-phone"          /> {contact.phone}</p>
                    <p><i className="fas fa-envelope"       /> {contact.email}</p>
                </div>


                <div className="contact-actions">

                    <Link to={`/editContact/${contact.id}`} title="Editar contacto">
                        <i className="fas fa-edit" />
                    </Link>

                    <button onClick={handleDelete} title="Eliminar contacto">
                        <i className="fas fa-trash" />
                    </button>

                </div>

            </div>

            {showDeleteModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="false">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark text-light">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Confirmar eliminación</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de que quieres eliminar este contacto?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                                <button type="button" className="btn btn-danger" onClick={() => { deleteContact(contact.id, dispatch); setShowDeleteModal(false); }}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDeleteModal && <div className="modal-backdrop fade show" onClick={() => setShowDeleteModal(false)}></div>}
        </>
    );
}
