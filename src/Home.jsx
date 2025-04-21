import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "./App.css";

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect;
  
    if (!vantaEffect && vantaRef.current) {
      effect = CLOUDS({
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
      });
  
      setVantaEffect(effect);
    }
  
    return () => {
      if (effect) effect.destroy();
    };
  }, []);
  

  return (
    <>
      <div ref={vantaRef} className="vanta-background" />
      <div id="app">
        <main className="content home-content" style={{ minHeight: '100vh', justifyContent: 'center' }}>
          <h1>
            Welcome to <span className="highlight">TechnoWizzard</span>
          </h1>
          <p>The digital portfolio of tomorrow’s leading cloud engineer</p>
          <div className="button-row">
            <Link to="/projects">Explore Projects</Link>
            <Link to="/blog">Read my blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </main>

      </div>
    </>
  );
}

export default Home;
