import { Outlet } from "react-router-dom";
import { JuegoProvider } from "./contexts/JuegoContext.jsx";
import Menu from "./components/Menu.jsx";
import ControlAudio from "./components/ControlAudio.jsx";
const App = () => {
    return (
        <JuegoProvider>
            <main className="pb-4">
                <Menu />
                <Outlet />
            </main>
            <ControlAudio /> 
        </JuegoProvider>
    );
};

export default App;
