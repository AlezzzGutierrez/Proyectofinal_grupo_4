import { Outlet } from "react-router-dom";
import { JuegoProvider } from "./contexts/JuegoContext.jsx";
import Menu from "./components/Menu.jsx";
import MusicaFondo from "./components/MusicaFondo";
const App = () => {
    return (
    
        <JuegoProvider>
            <main className="pb-4">
                <Menu />
                <Outlet />
            </main>
            <MusicaFondo />
        </JuegoProvider>
    );
};

export default App;
