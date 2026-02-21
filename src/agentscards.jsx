import { useRef } from "react";
import gsap from "gsap";

export default function Update({
  name = "Victoria Sterling",
  title = "Director of Sales",
  location = "Based in London, United Kingdom",
  specialisation = "Prime Central London & Mayfair",
  experience = "15 Years",
  notableMarkets = ["Mayfair", "Belgravia", "Knightsbridge"],
  portfolio = "£500m+ in Residential Transactions",
  description = "Specialising in off-market trophy assets and heritage estates. Trusted by private family offices for discreet acquisitions in London's most prestigious postcodes.",
  imageUrl = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  onContact,
}) {
  const firstName = name.split(" ")[0];

  const curtainRef  = useRef(null);
  const identityRef = useRef(null);
  const accentRef   = useRef(null);
  const ringRef     = useRef(null);
  const tlRef       = useRef(null);

  const buildTimeline = () => {
    if (tlRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl

      .fromTo(
        accentRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.55, ease: "power2.out" },
        0
      )
 
      .to(
        identityRef.current,
        { y: -10, duration: 0.5, ease: "power2.out" },
        0
      )

      .to(
        ringRef.current,
        {
          background: "linear-gradient(145deg, rgba(255,215,0,0.75), rgba(255,215,0,0.18))",
          boxShadow: "0 0 0 1px rgba(255,215,0,0.35), 0 6px 24px rgba(16,33,105,0.18)",
          duration: 0.45,
          ease: "power1.out",
        },
        0
      )

      .to(
        curtainRef.current,
        { y: "0%", duration: 0.52, ease: "power3.out" },
        0.04
      );

    tlRef.current = tl;
  };

const isOpenRef = useRef(false);

const handleToggle = () => {
  buildTimeline();
  if (isOpenRef.current) {
    tlRef.current.reverse();
    isOpenRef.current = false;
  } else {
    tlRef.current.play();
    isOpenRef.current = true;
  }
};

const handleMouseEnter = () => {
  if (window.matchMedia("(hover: hover)").matches) {
    buildTimeline();
    tlRef.current.play();
    isOpenRef.current = true;
  }
};

const handleMouseLeave = () => {
  if (window.matchMedia("(hover: hover)").matches) {
    tlRef.current?.reverse();
    isOpenRef.current = false;
  }
};

  return (
    /* ── Card shell ─────────────────────────────────────────────── */
    <div
      className="relative w-85 h-120 shrink-0 overflow-hidden cursor-default
                 bg-navy-soft
                 border border-white/20
                 shadow-[0_4px_40px_rgba(10,20,60,0.38)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
    >


      <div
        ref={accentRef}
        className="absolute top-0 left-0 right-0 h-0.5 z-10
                   bg-linear-to-r from-gold to-[rgba(255,215,0,0.12)]
                   origin-left scale-x-0"
      />

 
      <div
        ref={identityRef}
        className="absolute top-0 left-0 right-0 z-2
                   flex flex-col items-center
                   pt-13 px-8"
      >

        <div
          ref={ringRef}
          className="w-27 h-27 rounded-full p-0.75 shrink-0 mb-6"
          style={{
            background: "linear-gradient(145deg, rgba(16,33,105,0.25), rgba(16,33,105,0.05))",
          }}
        >
          <img
            src={imageUrl}
            alt={`Portrait of ${name}`}
            className="w-full h-full rounded-full object-cover object-top block"
          />
        </div>

        <h2
          className="text-[21px] font-medium text-navy tracking-[0.04em]
                     text-center leading-tight mb-2"
          style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
        >
          {name}
        </h2>


        <p
          className="text-[10px] text-[#7A8BAD] tracking-[0.22em] uppercase
                     text-center mb-5.5"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {title}
        </p>


        <div
          className="w-9 h-px mb-5"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.65), transparent)",
          }}
        />

        <p
          className="text-[12px] italic text-[#5A6A8A] text-center leading-[1.55] mb-1.25"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {location}
        </p>


        <p
          className="text-[12px] italic text-[#5A6A8A] text-center leading-[1.55]"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {specialisation}
        </p>
      </div>


      <div
        ref={curtainRef}
        className="absolute bottom-0 left-0 right-0 h-76.25 z-3
                   flex flex-col
                   bg-navy-soft
                   border-t border-[rgba(16,33,105,0.12)]
                   px-7.5 pt-7 pb-6.5
                   translate-y-full"
      >


        <div className="flex gap-9 mb-5">

          {/* Experience */}
          <div>
            <p
              className="text-[9.5px] tracking-[0.2em] uppercase text-[#7A8BAD] mb-1.75"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Experience
            </p>
            <p
              className="text-[16px] font-medium text-navy tracking-[0.06em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {experience}
            </p>
          </div>

          <div>
            <p
              className="text-[9.5px] tracking-[0.2em] uppercase text-[#7A8BAD] mb-1.75"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Notable Markets
            </p>
            {notableMarkets.map((market, i) => (
              <p
                key={market}
                className="text-[13px] text-navy tracking-[0.05em] uppercase leading-[1.4] mb-0.5"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {market}{i < notableMarkets.length - 1 ? "," : ""}
              </p>
            ))}
          </div>
        </div>


        <div className="h-px bg-[rgba(16,33,105,0.08)] mb-4.5" />


        <p
          className="text-[9.5px] tracking-[0.2em] uppercase text-[#7A8BAD] mb-1.75"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Portfolio
        </p>

        <p
          className="text-[14.5px] font-medium text-navy tracking-[0.04em] uppercase leading-[1.35] mb-4"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {portfolio}
        </p>


        <p
          className="text-[11px] leading-[1.75] text-[#5A6A8A] tracking-[0.04em] uppercase mb-4.5"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {description}
        </p>

        <button
          className="mt-auto w-full py-3.25
                     border border-[rgba(16,33,105,0.4)]
                     bg-transparent text-navy
                     text-[10px] tracking-[0.22em] uppercase text-center cursor-pointer
                     transition-[background,color,border-color] duration-280 ease-in-out
                     hover:bg-gold hover:text-navy hover:border-gold"
          style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
          onClick={onContact}
        >
          Contact {firstName}
        </button>
      </div>
    </div>
  );
}