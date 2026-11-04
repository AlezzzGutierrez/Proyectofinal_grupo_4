import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login.jsx";
import JuegoComida from "../pages/JuegoComida.jsx";
import JuegoIntruso from "../pages/JuegoIntruso.jsx";
import Resultados from "../pages/Resultados.jsx";

// Creo el router para manejar las rutas de la aplicación
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        // Defino las rutas hijas que se renderizan dentro del Outlet del componente App
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "comida",
                element: <JuegoComida />
            },
            {
                path: "intruso",
                element: <JuegoIntruso />
            },
            {
                path: "resultados",
                element: <Resultados />
            }
        ]
    }
]);

export default router;