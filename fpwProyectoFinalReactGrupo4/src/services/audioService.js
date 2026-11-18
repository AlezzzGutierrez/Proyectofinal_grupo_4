import axios from "axios";

const api = axios.create({
    baseURL: "/", 
});

const audioService = {
    obtenerMusica: async () => {
        try {
            const respuesta = await api.head("music/granja.mp3");
            
            if (respuesta.status === 200) {
                return "/music/granja.mp3";
            }
        } catch (error) {
            console.error("Error al cargar la música con Axios:", error);
            return null;
        }
    }
};

export default audioService;