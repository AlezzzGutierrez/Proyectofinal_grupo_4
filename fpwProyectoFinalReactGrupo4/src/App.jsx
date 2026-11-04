import { JuegoProvider } from "./contexts/JuegoContext.jsx";
import Rutas from "./routes/routes.jsx";

function App() {
  return (
    <JuegoProvider>
      <main className="py-4">
        <Rutas />
      </main>
    </JuegoProvider>
  );
}

export default App;
