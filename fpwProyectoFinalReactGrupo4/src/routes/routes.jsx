import { createBrowserRouter } from "react-router-dom";
import App from "../App";

//creo el router para poder manejar las rutas de la aplicación
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //defino las rutas hijas que se van a renderizar dentro del outlet del componente App
        children: []
    },
]);