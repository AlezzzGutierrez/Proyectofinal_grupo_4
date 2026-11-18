import { Alert, Button, Form as BsForm } from "react-bootstrap";

const Form = ({ userName, setUserName, onSubmit, error, errorNombre }) => {
    return (
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
        </BsForm>
    );
};

export default Form;
