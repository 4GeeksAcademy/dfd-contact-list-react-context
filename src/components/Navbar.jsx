import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">

			<div className="container">

				<Link to="/">
					<span className="navbar-brand mb-0 h1">Lista de Contactos</span>
				</Link>

				<div className="ml-auto">
					<Link to="/agregar">
						<button className="btn btn-primary">
                            <i className="fas fa-plus me-2"></i>
                            Agregar contacto
                        </button>
					</Link>
				</div>

			</div>
		</nav>
	);
};


