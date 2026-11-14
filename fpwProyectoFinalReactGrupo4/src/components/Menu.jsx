import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Aventura en la Granja</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />

                <Navbar.Collapse id="menu-principal">
                    <Nav className="ms-auto gap-2 align-items-lg-center">
                        
                        {/* BOTÓN DE LOGIN / LOGOUT */}
                        {sessionUser ? (
                            <Button variant="danger" onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button as={Link} to="/" variant="outline-light">
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* BOTÓN DE DOCENTES (solo si no entró un docente) */}
                        {!esDocente && (
                            <Button as={Link} to="/login-docente" variant="outline-light">
                                Docentes
                            </Button>
                        )}

                        {/* SI ES DOCENTE: Ve el Panel */}
                        {esDocente && (
                            <Button as={Link} to="/panel" variant="outline-light">
                                Panel Docente
                            </Button>
                        )}

                        {/* SI ES NIÑO: Ve los Juegos (sin el de resultados) */}
                        {esNino && (
                            <>
                                <Button as={Link} to="/comida" variant="outline-light">
                                    ¡Hora de Comer!
                                </Button>
                                <Button as={Link} to="/intruso" variant="outline-light">
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