import { useEffect, useRef} from "react";
import gsap from "gsap";
import './landing.css';

import hero1 from "./assets/hero/hero1.webp";
import hero2 from "./assets/hero/hero2.webp";
import hero3 from "./assets/hero/hero3.webp";
import hero4 from "./assets/hero/hero4.webp";
import hero5 from "./assets/hero/hero5.webp";
import hero6 from "./assets/hero/hero6.webp";

const HeroImages = [hero1,hero2,hero3,hero4,hero5,hero6];

export default function Hero(){

  const ImageRefs = useRef([]);

useEffect(() => {
  const images = ImageRefs.current;
  if (!images.length) return;

  gsap.set(images, { opacity: 0, scale: 1 });
  gsap.set(images[0], { opacity: 1 });

  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "power2.inOut" }
  });

  images.forEach((img, index) => {
    const nextImage = images[(index + 1) % images.length];

    tl.to(img, {
      scale: 1.05,
      duration: 6,
    })
    .to(nextImage, {
      opacity: 1,
      duration: 1.5,
    }, "-=1.5")
    .to(img, {
      opacity: 0,
      duration: 1.5,
    }, "<");
  });

  return () => tl.kill();
}, []);



  return(
    <div className="hero">
      {HeroImages.map((src, index) => (
        <img 
        src={src}
        key={index}
        ref={(element) => (ImageRefs.current[index] = element)}
        />
))}
  <div className="overlay"></div>
      <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 md:px-16 pt-10 md:pt-10">
        {/* Logo: Large and centered on mobile, normal on desktop */}
        <h1 className="font-cinzel text-3xl md:text-3xl font-bold text-white mb-8 md:mb-0">
          VERO<span className="text-gold">.</span>
        </h1>

        {/* Links: hidden on mobile (below 768px), flex on desktop */}
        <div className="hidden md:flex flex-row gap-12">
          <h3 className="font-lora text-sm text-white tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
            <a href="#agents">AGENTS</a>
          </h3>
          <h3 className="font-lora text-sm text-white tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
            <a href="#collection">COLLECTION</a>
          </h3>
          <h3 className="font-lora text-sm text-white tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
            CONTACT US
          </h3>
        </div>
      </nav>

      <div className="absolute left-0 right-0 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center md:items-start text-center md:text-left px-8">
        <h3 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-12">
          Building <span className="italic font-lora">Dreams</span>,<br />
          one <span className="italic font-lora">home</span> at a time
        </h3>

        <button className="px-10 py-4 border border-[#e6c400] text-white font-lora text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
          BROWSE COLLECTION
        </button>
      </div>

    </div>
  )
}
