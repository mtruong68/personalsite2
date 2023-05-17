import styles from './ParticleBg.module.scss'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {useEffect} from 'react';

export default function ParticleBg(props) {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  }
  return (
    <Particles
            id="tsparticles"
            className={styles.particleBg}
            init={particlesInit}
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#edece4",
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
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
                        value: 120,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 8 },
                    },
                },
                detectRetina: true,
            }}
        />
  )
}
