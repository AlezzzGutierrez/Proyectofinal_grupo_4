import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login.jsx";
import SeleccionUsuario from "../pages/SeleccionUsuario.jsx";
import Inicio from "../pages/Inicio.jsx";
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
                // Pantalla inicial: el usuario elige si es niño o docente
                index: true,
                element: <SeleccionUsuario />
            },
            {
                // TEMPORAL: reemplazar por el componente LoginNino cuando esté listo
                path: "login-nino",
                element: <Inicio />
            },
            {
                // TEMPORAL: reemplazar por el componente LoginDocente cuando esté listo
                path: "login-docente",
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

/**import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login.jsx";
import SeleccionUsuario from "../pages/SeleccionUsuario.jsx";
import Inicio from "../pages/Inicio.jsx";
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
                element: <SeleccionUsuario />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "inicio",
                element: <Inicio />
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

export default router; **/
