

const OpcionesComida = ({ opciones, onElegir, deshabilitado }) => (
  <div>
    {opciones.map((opcion) => (
      <button
        key={opcion}
        onClick={() => onElegir(opcion)}
        disabled={deshabilitado}
      >
        {opcion}
      </button>
    ))}
  </div>
);

export default OpcionesComida;