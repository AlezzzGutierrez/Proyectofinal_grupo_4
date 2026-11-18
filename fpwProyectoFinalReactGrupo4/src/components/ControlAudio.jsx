import { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { useAudio } from "../contexts/AudioContext";

const ControlAudio = () => {
    const [show, setShow] = useState(false);
    const { volumen, muteado, cambiarVolumen, toggleMute } = useAudio();

    return (
        <>
            <Button
                variant="dark"
                className="position-fixed bottom-0 end-0 m-3 rounded-circle shadow"
                style={{ width: "70px", height: "70px", zIndex: 1000 }}
                onClick={() => setShow(true)}
                title="Ajustes de sonido"
            >
                {muteado || volumen === 0 ? "🔇" : "🔊"}
            </Button>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>🎵 Ajustes de Sonido</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form.Group className="mb-4">
                        <Form.Label>Volumen de la música</Form.Label>
                        <Form.Range 
                            value={volumen} 
                            min={0} 
                            max={1} 
                            step={0.1} 
                            onChange={(e) => cambiarVolumen(parseFloat(e.target.value))}
                        />
                        <div className="text-muted text-end mt-1">
                            {Math.round(volumen * 100)}%
                        </div>
                    </Form.Group>
                    
                    <Button variant={muteado ? "danger" : "success"} onClick={toggleMute} className="w-100">
                        {muteado ? "Activar Sonido" : "Silenciar Todo"}
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ControlAudio;