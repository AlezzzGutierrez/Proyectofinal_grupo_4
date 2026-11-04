import { Outlet } from "react-router-dom";
import { JuegoProvider } from "./contexts/JuegoContext.jsx";

function App() {
    return (
        // Envuelvo los componentes que necesitan acceder a los datos compartidos con el Provider
        <JuegoProvider>

            {/* El Outlet es el lugar donde se renderizan
                los componentes correspondientes a las rutas hijas */}
            <main className="py-4">
                <Outlet />
            </main>

        </JuegoProvider>
    );
}

export default App;