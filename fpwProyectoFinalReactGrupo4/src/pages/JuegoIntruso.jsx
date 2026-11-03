import React, {useState} from "react";
import { intrusoRondas } from "../data/preguntasIntruso";
import {Button, Card, Container, Alert} from "react-bootstrap";

export const JuegoIntruso= ({onJuegoTerminado})=>{
    const [rondaActual,setRondaActual]=useState(0);
    const [puntaje, setPuntaje]=useState(0);
    const [mensaje, setMensaje]= useState("")
    const [respondido, setRespondido]=useState(false);
    const ronda= intrusoRondas[rondaActual];
    const  seleccionarAnimal=(animal)=>{
        if(respondido) return;
        setRespondido(true);
        if(animal.esIntruso){
            setPuntaje((prev)=>prev+10);
            setMensaje("Correcto! ${ronda.mensajeExito");
        }
    };
    const siguienteRonda=()=>{
        setRespondido(false);
        setMensaje("");
        if(rondaActual+1<intrusoRondas.length){
            setRondaActual((prev)=>prev +1);
        }else{
            onJuegoTerminado(puntaje);
        }
    };
    return(
        <Container className= "text-center mt-4">
            <h2>Juego2: El intruso de la Granja</h2>
            <p className="lead">Ronda{rondaActual+1}de{intrusoRondas.length}</p>
            <p><strong>Puntaje acumulado:</strong>{puntaje}puntos</p>
            <div className="alert alert-info fs-5">
                ¡Un animal se metio a la granja, pero no pertece a alli. ¡Por favor saca al INTRUSO!
            </div>
            {/*Botones de los primeros animales */}
            <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
                {ronda.animales.map((animal, index)=>(
                    <Card 
            key={index} 
            style={{ width: '12rem', cursor: respondido ? 'default' : 'pointer' }}
            className="shadow border-2"
            onClick={() => seleccionarAnimal(animal)}>

            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="card-title text-capitalize fs-3">{animal.nombre}</h3>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Mensaje de Feedback */}
      {mensaje && (
        <Alert variant={mensaje.includes('Correcto') ? 'success' : 'danger'} className="fs-5">
          {mensaje}
        </Alert>
      )}

      {/* Botón Siguiente */}
      {respondido && (
        <Button variant="primary" size="lg" onClick={siguienteRonda}>
          {rondaActual + 1 < rondasIntruso.length ? 'Siguiente Ronda ➔' : 'Ver Resultados 🏆'}
        </Button>
      )}
        </Container>
    );

};