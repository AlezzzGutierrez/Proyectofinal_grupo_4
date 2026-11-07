import { Box, TextField, Button, Alert, Typography } from "@mui/material";

const Form = ({ userName, setUserName, onSubmit, error }) => {
    return (
        <Box 
            component="form" 
            onSubmit={onSubmit} 
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}
        >
            <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Inicia tu sesión de juego
            </Typography>

            {error && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}

            <TextField 
                label="Ingresa tu nombre" 
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                fullWidth 
                required
            />

            <Button type="submit" variant="contained" size="large" fullWidth>
                Comenzar
            </Button>
        </Box>
    );
};

export default Form;