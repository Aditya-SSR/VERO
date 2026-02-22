import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css';
import Preloader from "./preloader.jsx";
import Hero from './landing.jsx';
import Details from './details.jsx';
import Agents from "./agents.jsx";
import Collection from "./collection.jsx";
import Presence from "./expanding.jsx";
import Footer from "./footer.jsx";
import CustomCursor from "./cursor.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {

    if (!isUnlocked) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);


    const lenisRaf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenisRaf);
    };
  }, [isUnlocked]);

  return (
    <>
      <CustomCursor />
      {!isUnlocked && (
        <Preloader onComplete={() => setIsUnlocked(true)} />
      )}


      <main
        className={`transition-opacity duration-1000 ${
          isUnlocked ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Hero />
        <Details />
        <Agents />
        <Collection />
        <Presence />
        <Footer />
      </main>
    </>
  );
}

export default App;