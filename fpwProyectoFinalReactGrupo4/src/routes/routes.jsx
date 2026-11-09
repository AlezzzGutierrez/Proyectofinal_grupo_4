import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login.jsx";
import LoginDocente from "../components/LoginDocente.jsx";
import RutaDocente from "../components/RutaDocente.jsx";
import JuegoComida from "../pages/JuegoComida.jsx";
import JuegoIntruso from "../pages/JuegoIntruso.jsx";
import Resultados from "../pages/Resultados.jsx";
import PanelDocente from "../pages/PanelDocente.jsx";

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
            },
            {
                // Acceso para docentes
                path: "docente",
                element: <LoginDocente />
            },
            {
                // Panel con los resultados: solo entra un docente con sesión iniciada
                path: "panel",
                element: (
                    <RutaDocente>
                        <PanelDocente />
                    </RutaDocente>
                )
            }
        ]
    }
]);

export default router;
