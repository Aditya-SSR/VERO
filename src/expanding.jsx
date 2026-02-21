import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topCities    = ["Birmingham", "Bristol", "Lord's", "Manchester", "Edinburgh"];
const bottomCities = ["Milan", "Barcelona", "Monaco", "Geneva", "Madrid"];

export default function Presence() {
  const sectionRef   = useRef(null);
  const subtitleRef  = useRef(null);
  const headingRef   = useRef(null);
  const topRowRef    = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* "Expanding Our" */
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      /* "PRESENCE" */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );


      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        gsap.fromTo(
          topRowRef.current,
          { opacity: 0, y: 100},
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          bottomRowRef.current,
          { opacity: 0, y: 100},
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full bg-[#F5F5F3] overflow-hidden
        flex flex-col items-center justify-center
        min-h-screen
        py-32 md:py-0
        px-5 md:px-8
      "
    >

      <div
        ref={topRowRef}
        className="
          flex flex-wrap justify-center gap-2
          mb-10
          md:mb-0 md:absolute md:top-14 md:left-0 md:right-0
          md:flex-nowrap md:justify-evenly md:px-12 md:gap-0
        "
      >
        {topCities.map((city) => (
          <span
            key={city}
            className="bg-gold text-navy text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-medium px-2.5 py-1 md:px-3 md:py-1.5"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {city}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center text-center">

        <p
          ref={subtitleRef}
          className="
            text-[18px] sm:text-[22px] md:text-[28px]
            italic text-navy opacity-0 mb-1 md:mb-2 leading-tight
          "
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Expanding Our
        </p>

        <h2
          ref={headingRef}
          className="
            text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px]
            font-medium tracking-[0.12em] md:tracking-[0.18em]
            uppercase text-navy opacity-0 leading-none
          "
          style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
        >
          Presence
        </h2>

      </div>

      <div
        ref={bottomRowRef}
        className="
          flex flex-wrap justify-center gap-2
          mt-10
          md:mt-0 md:absolute md:bottom-14 md:left-0 md:right-0
          md:flex-nowrap md:justify-evenly md:px-12 md:gap-0
        "
      >
        {bottomCities.map((city) => (
          <span
            key={city}
            className="bg-gold text-navy text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-medium px-2.5 py-1 md:px-3 md:py-1.5"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {city}
          </span>
        ))}
      </div>

    </section>
  );
}