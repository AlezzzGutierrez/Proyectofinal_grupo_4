import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization"; // Usamos el hook oficial

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Fuerza el re-render al cambiar de ruta
    const { sessionUser, clearSession } = useAuthorization(); // Usamos el contexto

    // Verificamos usando 'rol' como está en tu base de datos
    const esDocente = sessionUser?.rol === "docente";
    const esNino = sessionUser?.rol === "nino";

    const handleLogout = () => {
        clearSession(); // Usamos la función del contexto (borra el localStorage también)
        navigate("/");
    };

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Aventura en la Granja</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />

                <Navbar.Collapse id="menu-principal">
                    <Nav className="ms-auto gap-2 align-items-lg-center">
                        
                        {/* SI ES DOCENTE: Ve el Panel (SIEMPRE VISIBLE) */}
                        {esDocente && (
                            <Button as={Link} to="/panel" variant="warning" className="fw-bold text-dark">
                                🏠 Panel Docente
                            </Button>
                        )}

                        {/* SI ES DOCENTE O NIÑO: Ve los Juegos */}
                        {(esDocente || esNino) && (
                            <>
                                <Button as={Link} to="/comida" variant="outline-light">
                                    ¡Hora de Comer!
                                </Button>
                                <Button as={Link} to="/intruso" variant="outline-light">
                                    El Intruso
                                </Button>
                            </>
                        )}

                        {/* BOTÓN DE LOGIN / LOGOUT */}
                        {sessionUser ? (
                            <Button variant="danger" onClick={handleLogout} className="ms-lg-3">
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button as={Link} to="/" variant="outline-light">
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* BOTÓN DE DOCENTES (solo si no entró un docente) */}
                        {!esDocente && !esNino && (
                            <Button as={Link} to="/login-docente" variant="outline-light">
                                Docentes
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;