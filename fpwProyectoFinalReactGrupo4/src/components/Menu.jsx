import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import "../styles/Menu.css";

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const { sessionUser, clearSession } = useAuthorization();

    const esDocente = sessionUser?.rol === "docente";
    const esNino = sessionUser?.rol === "nino";

    const handleLogout = () => {
        clearSession();
        navigate("/");
        window.location.reload();
    };

    return (
        <Navbar expand="lg" className="menu-granja">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="menu-brand">
                    Aventura en la Granja
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />

                <Navbar.Collapse id="menu-principal">
                    <Nav className="ms-auto gap-2 align-items-lg-center mt-2 mt-lg-0">

                        {sessionUser ? (
                            <Button className="btn-menu-pill btn-menu-salir" onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button as={Link} to="/" className="btn-menu-pill btn-menu-blanco">
                                Iniciar Sesión
                            </Button>
                        )}

                        {!esDocente && !esNino && (
                            <Button as={Link} to="/login-docente" className="btn-menu-pill btn-menu-blanco">
                                Docentes
                            </Button>
                        )}

                        {esDocente && (
                            <Button as={Link} to="/panel" className="btn-menu-pill btn-menu-amarillo">
                                Panel Docente
                            </Button>
                        )}

                        {(esDocente || esNino) && (
                            <>
                                <Button as={Link} to="/comida" className="btn-menu-pill btn-menu-amarillo">
                                    ¡Hora de Comer!
                                </Button>
                                <Button as={Link} to="/intruso" className="btn-menu-pill btn-menu-amarillo">
                                    El Intruso de la Granja
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;