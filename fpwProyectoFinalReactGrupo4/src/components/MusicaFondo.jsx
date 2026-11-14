import musicaGranja from "../music/granja.mp3";

const MusicaFondo = () => {
  return (
    <audio src={musicaGranja} autoPlay loop />
  );
};

export default MusicaFondo;