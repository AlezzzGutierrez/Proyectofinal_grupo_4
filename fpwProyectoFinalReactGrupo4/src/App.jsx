import JuegoComida from "./pages/JuegoComida.jsx";

const App = () => (
  <JuegoComida
    onSiguienteDesafio={() => console.log("Pasar al siguiente desafío")}
  />
);

export default App;