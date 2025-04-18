import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "./App.css";

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0xd2ecf9,
          skyColor: 0x69a7d4,
          cloudColor: 0xc9d6eb,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xfcb97d,
          sunlightColor: 0xfdf6e3,
          speed: 1.1
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={vantaRef} className="vanta-background" />
      <div id="app">
        <main className="content home-content">
          <h1>
            Welcome to <span className="highlight">TechnoWizzard</span>
          </h1>
          <p>The digital portfolio of tomorrow’s leading cloud engineer</p>
          <div className="button-row">
            <a href="/projects">Explore Projects</a>
            <a href="/blog">Read my blog</a>
            <a href="/contact">Contact</a>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
