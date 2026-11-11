import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    // Hace que el menú se vuelva a dibujar cada vez que cambia la ruta
    useLocation();

    const storedUser = localStorage.getItem("currentUser");
    const sessionUser = storedUser ? JSON.parse(storedUser) : null;
    const esDocente = sessionUser?.role === "docente";

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
                        {sessionUser ? (
                            <Button variant="danger" onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button as={Link} to="/" variant="outline-light">
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* El acceso para docentes se ve siempre, salvo que ya haya entrado uno */}
                        {!esDocente && (
                            <Button as={Link} to="/docente" variant="outline-light">
                                Docentes
                            </Button>
                        )}

                        {esDocente ? (
                            <Button as={Link} to="/panel" variant="outline-light">
                                Panel docente
                            </Button>
                        ) : (
                            <>
                                <Button as={Link} to="/comida" variant="outline-light">
                                    ¡Hora de Comer!
                                </Button>
                                <Button as={Link} to="/intruso" variant="outline-light">
                                    El intruso de la Granja
                                </Button>
                                <Button as={Link} to="/resultados" variant="outline-light">
                                    Perfil y Resultados
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
