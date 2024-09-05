import { useEffect, useRef } from "react";
import ParticlesComponent from "@/components/particles";

export default function Title({ title, phrase }) {
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
    <>
      <div
        className={`relative w-full mx-auto p-4 py-10 ${
          phrase ? "pb-28" : "mb-10"
        } flex bg-black text-white font-mulish uppercase text-5xl font-black`}
      >
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 py-10 pb-8 flex bg-black text-white font-mulish uppercase text-xl md:text-5xl font-black">
          <h1>{title}</h1>
        </div>
      </div>
      {phrase && (
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 pb-10 -mt-20 flex text-white font-mulish uppercase text-3xl font-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 132 132"
            className="absolute top-16 right-16 hidden md:flex"
          >
            <g clip-path="url(#a)">
              <path
                fill="#fff"
                d="M132 32.225C132 14.429 117.571 0 99.77 0H66v32.225C66 14.429 51.57 0 33.775 0H0v33.775C0 51.575 14.43 66 32.225 66H0v33.775C0 117.576 14.43 132 32.225 132H66V99.775C66 117.576 80.43 132 98.225 132H132V98.225C132 80.425 117.571 66 99.775 66H132V32.225ZM66 66v32.225C66 80.425 51.57 66 33.775 66H66V33.775C66 51.575 80.43 66 98.225 66H66Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h132v132H0z" />
              </clipPath>
            </defs>
          </svg>
          <div className="bg-indigo-600 w-full rounded-xl px-10 pt-40 pb-10 relative overflow-hidden min-h-96 xl:min-h-[30rem]">
            <div className="z-20 absolute bottom-10 font-mulish font-[700] text-2xl md:text-3xl w-5/6 md:w-2/5">
              <h2>{phrase}</h2>
            </div>
            <div className="absolute  top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-10">
              <ParticlesComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
