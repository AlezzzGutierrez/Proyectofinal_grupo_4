import { Outlet } from "react-router-dom";
import { JuegoProvider } from "./contexts/JuegoContext.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
    return (
        // Envuelvo los componentes que necesitan acceder a los datos compartidos con el Provider
        <JuegoProvider>

            {/* El Outlet es el lugar donde se renderizan
                los componentes correspondientes a las rutas hijas */}
            <main className="py-4">
                <Menu />
                <Outlet />
            </main>

        </JuegoProvider>
    );
};

export default App;
