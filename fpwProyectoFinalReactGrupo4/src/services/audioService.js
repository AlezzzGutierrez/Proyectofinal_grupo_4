import axios from "axios";

const api = axios.create({
    baseURL: "/",
});

const verificarYReproducir = async (ruta, volumen = 0.7) => {
    try {
        const respuesta = await api.head(ruta);
        if (respuesta.status === 200) {
            const audio = new Audio(`/${ruta}`);
            audio.volume = volumen;
            await audio.play();
        }
    } catch (error) {
        
    }
};

const audioService = {
    obtenerMusica: async () => {
        try {
            const respuesta = await api.head("music/granja.mp3");

            if (respuesta.status === 200) {
                return "/music/granja.mp3";
            }
        } catch (error) {
                        return null;
        }
    },

    reproducirAcierto: () => verificarYReproducir("music/acierto.mp3", 0.75),
    reproducirError: () => verificarYReproducir("music/error.mp3", 0.75),
};

export default audioService;