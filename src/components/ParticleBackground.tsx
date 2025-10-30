"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        detectRetina: true,

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: { opacity: 0.4 },
            },
          },
        },

        particles: {
          number: {
            value: 45,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ["#EE9322", "#F5C542", "#F9E076"], // gradient glow palette
          },
          opacity: {
            value: 0.35,
            random: false,
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2.8 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
            random: false,
            straight: false,
          },
          links: {
            enable: true,
            color: "#D3DAD9",
            distance: 100,
            opacity: 0.1,
            width: 1,
            blink: false,
          },
          shadow: {
            enable: true,
            color: "#D3DAD9",
            blur: 2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
