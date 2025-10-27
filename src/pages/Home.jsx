import ContactCard from "../components/ContactCard.jsx";
import { useContacts } from "../context/contactContext.jsx";
import { Link } from "react-router-dom";

function Home () {
  const {state, dispatch} = useContacts();

  const handleRemove = (id) => {
	dispatch({ type: 'REMOVE_CONTACT', payload: id });
  };

	return (
		<div className="container">
			<div className="contact-list">
				<h1>Lista de Contactos</h1>
				
				{state?.contacts?.length === 0 ? (
					<div className="text-center py-5">

						<i className="fas fa-address-book fa-4x mb-3 text-secondary"></i>
						<h3 className="text-white">No hay contactos</h3>
						<p className="text-secondary">Agrega tu primer contacto para comenzar</p>

						{/* <Link to="/agregar" className="btn btn-primary">
							<i className="fas fa-plus me-2"></i>
							Agregar Contacto
						</Link> */}

					</div>
				) : (
					<>
						{/* <div className="d-flex justify-content-center mb-4">
							<Link to="/agregar" className="btn btn-success">
								<i className="fas fa-plus me-2"></i>
								Nuevo Contacto
							</Link>
						</div> */}
						
						<div className="w-100">
							{state?.contacts?.map((c) => (
								<ContactCard contact={c} key={c.id}/>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}; 

export default Home;




