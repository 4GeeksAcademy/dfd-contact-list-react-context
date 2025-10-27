import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContacts } from "../context/contactContext";

function ContactDetail() {
    const { id } = useParams();
    const { state } = useContacts();

    const contact = state.contacts.find((c) => c.id === Number(id));

    if (!contact) {
        return (
            <div>
                <h2>Contacto no encontrado</h2>
                <Link to="/">Volver</Link>
            </div>
        );
    }

    return (
        <div className="text-center mt-5">
            <h2>Detalle de {contact.name}</h2>
            <img
                src={contact.image || "https://via.placeholder.com/150"}
                alt="avatar"
                className="rounded-circle mb-3"
                style={{ width: "150px" }}
            />
            <p>Email: {contact.email}</p>
            <p>Teléfono: {contact.phone}</p>
            <p>Dirección: {contact.address}</p>
            <Link to="/">Volver a la lista</Link>
        </div>
    );
}

export default ContactDetail;






