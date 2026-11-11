import { Alert, Button, Container, Form as BsForm } from "react-bootstrap";
import { Link } from "react-router-dom";

const Form = ({ userName, setUserName, onSubmit, error, errorNombre }) => {
    return (
        <Container className="mt-4 p-3" style={{ maxWidth: "400px" }}>
            <BsForm noValidate onSubmit={onSubmit} className="d-flex flex-column gap-3">
                <h2 className="text-center fw-bold text-primary fs-4">
                    Inicia tu sesión de juego
                </h2>

                {error && (
                    <Alert variant="danger" className="mb-0">
                        {error}
                    </Alert>
                )}

                <BsForm.Group controlId="nombre">
                    <BsForm.Label>Ingresa tu nombre</BsForm.Label>
                    <BsForm.Control
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        isInvalid={Boolean(errorNombre)}
                    />
                    <BsForm.Control.Feedback type="invalid">
                        {errorNombre}
                    </BsForm.Control.Feedback>
                </BsForm.Group>

                <Button type="submit" variant="primary" size="lg">
                    Comenzar
                </Button>

                <Button as={Link} to="/docente" variant="link" size="sm">
                    Acceso para docentes
                </Button>
            </BsForm>
        </Container>
    );
};

export default Form;
