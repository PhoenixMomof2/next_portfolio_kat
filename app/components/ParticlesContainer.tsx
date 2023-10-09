// import { Container } from 'postcss';
import React, { useCallback } from 'react'
import {Particles} from "react-tsparticles";
import { loadFull } from "tsparticles"; 

 const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
}, []);

  return (
    <Particles 
    className="w-full h-full absolute translate-z-0"
    // w-full h-full absolute translate-z-0
    id="tsparticles" 
    init ={particlesInit} 
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: false },
      background: {
        color: {
          value: '',
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
              resize: true,
          },
          modes: {
              push: {
                  quantity: 90,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#f6494c",
          },
          links: {
              color: "#eec146",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
    }}
    />
  );
};
export default ParticlesContainer