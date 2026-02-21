import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './collection.css';

gsap.registerPlugin(ScrollTrigger);

import hero1 from "./assets/hero/hero1.webp";
import hero2 from "./assets/hero/hero2.webp";
import hero3 from "./assets/hero/hero3.webp";
import hero4 from "./assets/hero/hero4.webp";
import hero5 from "./assets/hero/hero5.webp";
import hero6 from "./assets/hero/hero6.webp";

/* ── Property data ───────────────────────────────────────────── */
const properties = [
  {
    badge: "Featured",
    location: "Mayfair, London",
    name: "The Audley Residence",
    price: "£42,000,000",
    beds: 6, baths: 7, sqft: "11,400",
  },
  {
    badge: null,
    location: "Belgravia, London",
    name: "Chester Square Manor",
    price: "£28,500,000",
    beds: 5, baths: 6, sqft: "9,200",
  },
  {
    badge: "New Listing",
    location: "Knightsbridge, London",
    name: "One Hyde Park Penthouse",
    price: "£34,750,000",
    beds: 4, baths: 5, sqft: "7,800",
  },
  {
    badge: null,
    location: "Kensington, London",
    name: "The Holland Park Villa",
    price: "£19,950,000",
    beds: 7, baths: 8, sqft: "13,100",
  },
  {
    badge: "Off Market",
    location: "Chelsea, London",
    name: "Cheyne Walk Townhouse",
    price: "£22,000,000",
    beds: 5, baths: 5, sqft: "8,600",
  },
  {
    badge: null,
    location: "St John's Wood, London",
    name: "The Abbey Estate",
    price: "£16,500,000",
    beds: 6, baths: 6, sqft: "10,300",
  },
];

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const badgeStyle = {
  "Featured":    { background: "#102169", color: "#FFD700" },
  "New Listing": { background: "#FFD700", color: "#102169" },
  "Off Market":  { background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.35)" },
};

const Collection = () => {
  const wrapperRef  = useRef(null);
  const headerRef   = useRef(null);
  const headingRef  = useRef(null);
  const subTextRef  = useRef(null);
  const sectionRef  = useRef(null);
  const imageRef    = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Header reveal ───────────────────────────────────────── */
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
        { opacity: 0, y: 16 },
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

      /* ── Vertical card stack ─────────────────────────────────── */
      const cards = imageRef.current;
      gsap.set(cards.slice(1), { yPercent: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        tl.to(card, { yPercent: 0, ease: "none" })
          .to(cards[index - 1], { scale: 0.9, opacity: 0.4, filter: "blur(4px)", ease: "none" }, "<");
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>

      {/* ── Section 1 : Header ───────────────────────────────────── */}
      <section ref={headerRef} className="vert-header" id="collection">

        <p className="vert-eyebrow">The Collection</p>

        <h2 ref={headingRef} className="vert-heading">
          The <span className="vero">VERO</span> Collection
        </h2>

        <p ref={subTextRef} className="vert-subtext">
          A curated portfolio of architecturally distinguished residences
          across Prime London.
        </p>

      </section>

      {/* ── Section 2 : Card stack ───────────────────────────────── */}
      <section ref={sectionRef} className="stack-container">
        {images.map((img, i) => {
          const prop = properties[i];
          return (
            <div key={i} className="card" ref={el => imageRef.current[i] = el}>

              <img src={img} alt={prop.name} />

              <div className="card-overlay">

                {prop.badge && (
                  <span className="card-badge" style={badgeStyle[prop.badge]}>
                    {prop.badge}
                  </span>
                )}

                <div className="card-info">
                  <div className="card-meta">
                    <span className="card-location">{prop.location}</span>
                    <span className="card-price">{prop.price}</span>
                  </div>

                  <h3 className="card-name">{prop.name}</h3>

                  <div className="card-specs">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 22V8a2 2 0 012-2h14a2 2 0 012 2v14"/>
                        <path d="M3 12h18"/><path d="M9 22V12"/>
                      </svg>
                      {prop.beds} Beds
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z"/>
                        <path d="M4 12V6a2 2 0 012-2h3v8"/>
                      </svg>
                      {prop.baths} Baths
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="3" width="18" height="18" rx="1"/>
                        <path d="M3 9h18M9 21V9"/>
                      </svg>
                      {prop.sqft} Sq Ft
                    </span>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
};

export default Collection;