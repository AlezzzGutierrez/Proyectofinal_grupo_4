

const Puntaje = ({ puntos }) => (
  // Único estilo: lo deja en la esquina. Si no quiere nada de CSS, que lo saque.
  <div style={{ position: "fixed", top: 10, right: 10 }}>
    <p>Puntos: {puntos}</p>
  </div>
);

export default Puntaje;