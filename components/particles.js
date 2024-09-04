import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // Inicializa as partículas uma vez quando o componente é montado
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Carrega a versão slim
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  // Configuração das opções de partículas
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#4f46e5", // Cor de fundo
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#fff", // Cor dos hexágonos
        },
        links: {
          color: "#fff",
          distance: 250,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "polygon", // Tipo de forma: polígono (para hexágonos)
          options: {
            sides: 6, // Número de lados: 6 para hexágonos
          },
        },
        size: {
          value: { min: 6, max: 10 }, // Tamanho dos hexágonos
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null; // Retorna null até que as partículas sejam inicializadas
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
