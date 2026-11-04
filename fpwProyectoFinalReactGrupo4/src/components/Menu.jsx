import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    const storedUser = localStorage.getItem("currentUser");
    const sessionUser = storedUser ? JSON.parse(storedUser) : null;

    const handleAuthAction = () => {
        if (sessionUser) {
            localStorage.removeItem("currentUser");
            navigate("/");
            window.location.reload(); 
        } else {
            navigate("/");
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
                    Aventura en la Granja
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                        color={sessionUser ? "error" : "inherit"} 
                        variant="outlined"
                        component={sessionUser ? "button" : Link}
                        to={sessionUser ? undefined : "/"}
                        onClick={sessionUser ? handleAuthAction : undefined}
                    >
                        {sessionUser ? "Cerrar Sesión" : "Iniciar Sesión"}
                    </Button>

                    <Button color="inherit" component={Link} to="/comida" variant="outlined">
                        ¡Hora de Comer!
                    </Button>
                    <Button color="inherit" component={Link} to="/intruso" variant="outlined">
                        El intruso de la Granja
                    </Button>
                    <Button color="inherit" component={Link} to="/resultados" variant="outlined">
                        Perfil y Resultados
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;