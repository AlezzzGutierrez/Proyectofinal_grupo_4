
import { useState } from "react";
import preguntasComida from "../data/preguntasComida";
import Puntaje from "../components/Puntaje";
import TarjetaAnimal from "../components/TarjetaAnimal.jsx";
import OpcionesComida from "../components/OpcionesComida";
import MensajeRespuesta from "../components/MensajeRespuesta";

const PUNTOS_POR_ACIERTO = 10;

const JuegoComida = ({ onSiguienteDesafio }) => {
  const [ronda, setRonda] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [respondida, setRespondida] = useState(false);

  const pregunta = preguntasComida[ronda];
  const esUltimaRonda = ronda === preguntasComida.length - 1;

  const elegirOpcion = (opcion) => {
    if (respondida) return;

    if (opcion === pregunta.correcta) {
      setPuntos(puntos + PUNTOS_POR_ACIERTO);
      setMensaje(`¡Correcto! ¡${pregunta.animal} comió!`);
    } else {
      setMensaje("¡Esa no es su comida!");
    }
    setRespondida(true);
  };

  const pasarSiguienteRonda = () => {
    setRonda(ronda + 1);
    setMensaje("");
    setRespondida(false);
  };

  return (
    <div>
      <Puntaje puntos={puntos} />

      <h1>¡Hora de Comer!</h1>
      <p>Ronda {ronda + 1} de {preguntasComida.length}</p>

      <TarjetaAnimal animal={pregunta.animal} />

      <OpcionesComida
        opciones={pregunta.opciones}
        onElegir={elegirOpcion}
        deshabilitado={respondida}
      />

      {respondida && (
        <div>
          <MensajeRespuesta mensaje={mensaje} />
          {esUltimaRonda ? (
            <button onClick={onSiguienteDesafio}>
              Pasar al siguiente desafío
            </button>
          ) : (
            <button onClick={pasarSiguienteRonda}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
};

export default JuegoComida;