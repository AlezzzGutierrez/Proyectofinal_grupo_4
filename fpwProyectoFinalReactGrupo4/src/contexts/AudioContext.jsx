import { createContext, useState, useRef, useEffect, useContext } from "react";
import audioService from "../services/audioService"; // Importamos el servicio

export const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [volumen, setVolumen] = useState(0.5); 
    const [muteado, setMuteado] = useState(false);

    // Función asíncrona para inicializar el audio
    const iniciarAudio = async () => {
        const rutaMusica = await audioService.obtenerMusica();
        
        if (rutaMusica) {
            audioRef.current = new Audio(rutaMusica);
            audioRef.current.loop = true; 
            audioRef.current.volume = volumen;
            
            // Intentar reproducir
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Si el navegador bloquea el autoplay, se activa al primer clic
                    const activarAudio = () => {
                        audioRef.current.play();
                        document.removeEventListener("click", activarAudio);
                    };
                    document.addEventListener("click", activarAudio);
                });
            }
        }
    };

    useEffect(() => {
        iniciarAudio();
        return () => {
            if (audioRef.current) audioRef.current.pause();
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = muteado ? 0 : volumen;
        }
    }, [volumen, muteado]);

    const cambiarVolumen = (nuevoVolumen) => {
        setVolumen(nuevoVolumen);
        if (nuevoVolumen > 0) setMuteado(false);
    };

    const toggleMute = () => setMuteado((prev) => !prev);

    return (
        <AudioContext.Provider value={{ volumen, muteado, cambiarVolumen, toggleMute }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);