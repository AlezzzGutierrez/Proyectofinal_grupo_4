import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
    const navigate = useNavigate();
    useLocation(); // Fuerza el re-render al cambiar de ruta

    const storedUser = localStorage.getItem("currentUser");
    const sessionUser = storedUser ? JSON.parse(storedUser) : null;

    const esDocente = sessionUser?.role === "docente";
    const esNino = sessionUser?.role === "nino";

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
        window.location.reload();
    };

    return (
        <Navbar expand="lg" className="menu-granja">
            <Container fluid className="px-4">
                <Navbar.Brand className="menu-brand">
                    Aventura en la Granja
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />

                <Navbar.Collapse id="menu-principal">
                    <Nav className="ms-auto gap-2 align-items-lg-center mt-2 mt-lg-0">

                        {/* BOTÓN DE LOGIN / LOGOUT */}
                        {sessionUser ? (
                            <Button
                                className="btn-menu-pill btn-menu-salir"
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button
                                as={Link}
                                to="/"
                                className="btn-menu-pill btn-menu-blanco"
                            >
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* BOTÓN DE DOCENTES (solo si no entró un docente) */}
                        {!esDocente && (
                            <Button
                                as={Link}
                                to="/login-docente"
                                className="btn-menu-pill btn-menu-blanco"
                            >
                                Docentes
                            </Button>
                        )}

                        {/* SI ES DOCENTE: Ve el Panel */}
                        {esDocente && (
                            <Button
                                as={Link}
                                to="/panel"
                                className="btn-menu-pill btn-menu-amarillo"
                            >
                                Panel Docente
                            </Button>
                        )}

                        {/* SI ES NIÑO: Ve los Juegos */}
                        {esNino && (
                            <>
                                <Button
                                    as={Link}
                                    to="/comida"
                                    className="btn-menu-pill btn-menu-amarillo"
                                >
                                    ¡Hora de Comer!
                                </Button>
                                <Button
                                    as={Link}
                                    to="/intruso"
                                    className="btn-menu-pill btn-menu-amarillo"
                                >
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