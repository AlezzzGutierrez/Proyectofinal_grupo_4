import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

const Resultados = () => {
    const navigate = useNavigate();
    const { clearSession } = useAuthorization();

    const storedUser = localStorage.getItem("currentUser");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    const gameScore1 = Number(localStorage.getItem("puntajeJuego1")) || 0;
    const gameScore2 = Number(localStorage.getItem("puntajeJuego2")) || 0;
    const totalScore = gameScore1 + gameScore2;

    const getCongratulationMessage = (total) => {
        if (total >= 80) {
            return "¡Increíble trabajo! ¡Eres un verdadero experto de la granja!";
        } else if (total >= 50) {
            return "¡Muy bien hecho! Has completado los desafíos con gran esfuerzo.";
        } else {
            return "¡Buen intento! Sigue practicando para convertirte en el mejor granjero.";
        }
    };

    const handlePlayAgain = () => {
        clearSession(); 
        navigate("/");  
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, p: 2 }}>
            <Card sx={{ maxWidth: 500, width: '100%', textAlign: 'center', p: 3, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 2 }}>
                        ¡Resultados Finales!
                    </Typography>

                    {currentUser ? (
                        <Typography variant="h6" sx={{ mb: 3, color: '#333' }}>
                            Participante: <strong>{currentUser.name}</strong>
                        </Typography>
                    ) : (
                        <Typography variant="body1" sx={{ mb: 3, color: 'error.main' }}>
                            No hay una sesión activa registrada.
                        </Typography>
                    )}

                    <Box sx={{ textAlign: 'left', bgcolor: '#f1f8e9', p: 2.5, borderRadius: 2, mb: 3 }}>
                        <Typography variant="body1" sx={{ mb: 1.5, fontWeight: 'medium' }}>
                            ¡Hora de Comer!: <strong>{gameScore1} pts</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                            El intruso de la Granja: <strong>{gameScore2} pts</strong>
                        </Typography>
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1b5e20', mb: 2 }}>
                        Puntaje Total: {totalScore} pts
                    </Typography>

                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 4, color: '#555' }}>
                        {getCongratulationMessage(totalScore)}
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="success" 
                        size="large"
                        fullWidth
                        onClick={handlePlayAgain}
                    >
                        Jugar de nuevo
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Resultados;
