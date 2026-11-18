import axios from "axios";

const api = axios.create({ baseURL: "/" });

const imagenService = {
    obtenerImagen: async (nombreArchivo) => {
        try {
            const ruta = `img/${nombreArchivo}`;
            const respuesta = await api.get(ruta, { responseType: 'blob' });
            return URL.createObjectURL(respuesta.data);
        } catch (error) {
            console.error(`Error al cargar la imagen ${nombreArchivo} con Axios:`, error);
            return null; 
        }
    }
};

export default imagenService;