import { useEffect, useRef } from "react";

export default function VideoHome() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Força a reprodução do vídeo ao carregar o componente
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error(
          "O vídeo não pôde ser reproduzido automaticamente:",
          error
        );
      });
    }
  }, []);

  return (
    <div className="w-full bg-orange-500 p-10 rounded-3xl relative text-white overflow-hidden min-h-96 xl:min-h-[30rem]">
      <div className="absolute bg-orange bg-opacity-80 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-10"></div>
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-0 hidden md:block"
        autoPlay
        muted
        loop
      >
        <source src="../loopcta.mp4" type="video/mp4" />
      </video>
      <h4 className="z-20 absolute bottom-10 font-mulish font-[700] text-3xl md:text-5xl w-5/6 md:w-2/5">
        Empowering brands to thrive in a digital world... 
      </h4>
    </div>
  );
}
