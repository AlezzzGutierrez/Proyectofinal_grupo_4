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

    const rutasPublicas = ["/", "/login-nino", "/login-docente"];
    const enPantallaPublica = rutasPublicas.includes(location.pathname);

    const handleLogout = () => {
        clearSession();
        navigate("/");
    };

    return (
        <Navbar expand="lg" className="menu-granja">
            <Container fluid className="px-4">
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="menu-brand"
                    onClick={() => {
                        if (sessionUser) clearSession();
                    }}
                >
                    Aventura en la Granja
                </Navbar.Brand>

                {sessionUser && !enPantallaPublica && (
                    <>
                        <Navbar.Toggle aria-controls="menu-principal" />

                        <Navbar.Collapse id="menu-principal">
                            <Nav className="ms-auto gap-2 align-items-lg-center mt-2 mt-lg-0">
                                <Button className="btn-menu-pill btn-menu-salir" onClick={handleLogout}>
                                    Cerrar Sesión
                                </Button>

                                {esDocente && location.pathname !== "/panel" && (
                                    <Button as={Link} to="/panel" className="btn-menu-pill btn-menu-amarillo">
                                        Panel Docente
                                    </Button>
                                )}

                                {esNino && (
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
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Menu;