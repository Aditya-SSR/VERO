
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const barRef    = useRef(null);
  const textRef   = useRef(null);
  const labelRef  = useRef(null);

  useEffect(() => {
 
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

   
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      )


      .fromTo(
        labelRef.current,
        { opacity: 0 },
        { opacity: 0.6, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      )

    
      .to(
        barRef.current,
        { width: "100%", duration: 2, ease: "power1.inOut" },
        "-=0.1"
      )

    
      .to({}, { duration: 0.25 })

    
      .to(labelRef.current, { opacity: 0, duration: 0.3 })

  
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        },
      });

    }, loaderRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-navy"
    >
      <div className="flex flex-col items-center">

 
        <h1
          ref={textRef}
          className="text-7xl sm:text-8xl font-medium tracking-[0.12em] uppercase text-white mb-10 opacity-0"
          style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
        >
          VERO<span className="text-gold">.</span>
        </h1>

        <div className="w-70 sm:w-[320px] h-px bg-white/15 relative overflow-hidden">
          <div
            ref={barRef}
            className="absolute left-0 top-0 h-full w-0 bg-gold"
          />
        </div>


        <p
          ref={labelRef}
          className="mt-5 text-[10px] uppercase tracking-[0.28em] text-white/60 opacity-0"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Prime Central London
        </p>

      </div>
    </div>
  );
};

export default Preloader;