import { createContext, useState, useRef, useEffect, useContext } from "react";
import audioService from "../services/audioService";

export const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [volumen, setVolumen] = useState(0.5); 
    const [muteado, setMuteado] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const iniciarAudio = async () => {
            const rutaMusica = await audioService.obtenerMusica();
            
            if (rutaMusica && isMounted) {
                const audio = new Audio(rutaMusica);
                audio.loop = true; 
                audio.volume = volumen;
                audioRef.current = audio;
                
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        const activarAudio = () => {
                            if (audioRef.current) audioRef.current.play();
                            document.removeEventListener("click", activarAudio);
                        };
                        document.addEventListener("click", activarAudio);
                    });
                }
            }
        };

        iniciarAudio();

        return () => {
            isMounted = false;
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volumen;
            
            if (muteado || volumen === 0) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {});
            }
        }
    }, [volumen, muteado]);

    const cambiarVolumen = (nuevoVolumen) => {
        setVolumen(nuevoVolumen);
        if (nuevoVolumen > 0 && muteado) {
            setMuteado(false);
        }
    };

    const toggleMute = () => {
        setMuteado((prev) => !prev);
    };

    return (
        <AudioContext.Provider value={{ volumen, muteado, cambiarVolumen, toggleMute }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);