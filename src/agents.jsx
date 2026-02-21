import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Update from "./agentscards";
import agents from "./agents.json";

gsap.registerPlugin(ScrollTrigger);

export default function Agents() {
  const wrapperRef   = useRef(null);
  const headerRef    = useRef(null);
  const headingRef   = useRef(null);
  const subTextRef   = useRef(null);
  const sectionRef   = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* ── Header text reveal ──────────────────────────────────── */
      gsap.to(headingRef.current, {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 35%",
          end: "top 5%",
          scrub: true,
        },
      });

      gsap.fromTo(
        subTextRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 28%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      /* ── Horizontal card scroll ──────────────────────────────── */
      const container = containerRef.current;

      gsap.to(container, {
        x: -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (container.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={wrapperRef} id="agents">


      <section
        ref={headerRef}
        className="w-full relative bg-navy flex flex-col items-center justify-center px-6 py-32 text-center"
      >

        <p
          className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6 opacity-80"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Our Advisors
        </p>

        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8"
          style={{
            fontFamily: "'Cinzel', 'Times New Roman', serif",
            backgroundImage: "linear-gradient(to right, #ffffff 50%, rgba(255,255,255,0.18) 50%)",
            backgroundSize: "200% 100%",
            backgroundPositionX: "100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The People Behind <span className="font-serif">VERO</span>
        </h2>

      
        <p
          ref={subTextRef}
          className="text-[15px] leading-relaxed text-white/55 max-w-xl opacity-0"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Trusted advisors guiding acquisitions across Prime Central London's
          most sought-after addresses.
        </p>


        <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-40">
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-white"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Scroll
          </p>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>


      <section
        ref={sectionRef}
        className="relative h-screen bg-navy flex items-center"
      >
        <div className="w-full">
          <div ref={containerRef} className="flex gap-10 px-10">

            {agents.map((agent) => (
              <Update
                key={agent.name}
                {...agent}
              />
            ))}

            <div className="w-50 h-120 bg-navy shrink-0" />

          </div>
        </div>
      </section>

    </div>
  );
}