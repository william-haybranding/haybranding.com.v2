import { useEffect, useRef, useState } from "react";
import styles from "./video.module.css";

export default function VideoHome() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);

    // Limpa o timer se o componente for desmontado antes de 1 segundo
    return () => clearTimeout(timer);

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
      <div className="absolute bg-loop bg-center bg-cover top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-10"></div>
      {/* SVYBqzBxFSk */}
      {/* {videoLoaded && (
        <video
          ref={videoRef}
          preload="none"
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-0 ${styles.video}`}
          autoPlay
          muted
          loop
          playsinline
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="../loopcta.mp4" type="video/mp4" />
        </video>
      )} */}

      <h4 className="z-20 absolute bottom-10 font-mulish font-[700] text-3xl md:text-5xl w-5/6 md:w-2/5">
        Empowering brands to thrive in a digital world... 
      </h4>
    </div>
  );
}
