import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"; 
import SeleccionUsuario from "../pages/SeleccionUsuario.jsx";
import LoginUnico from "../components/LoginUnico.jsx"; 
import JuegoComida from "../pages/JuegoComida.jsx";
import JuegoIntruso from "../pages/JuegoIntruso.jsx";
import Resultados from "../pages/Resultados.jsx";
import PanelDocente from "../pages/PanelDocente.jsx";
import RutaDocente from "../components/RutaDocente.jsx"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <SeleccionUsuario /> },
            { path: "login-nino", element: <LoginUnico /> },
            { path: "login-docente", element: <LoginUnico /> },
            { path: "comida", element: <JuegoComida /> },
            { path: "intruso", element: <JuegoIntruso /> },
            { path: "resultados", element: <Resultados /> },
            {
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