export default function Footer() {
  return (
    <footer
      className="w-full bg-navy flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-12 pb-8"
      style={{ minHeight: "70vh" }}
    >

 
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">

        <div className="flex flex-col gap-10">

          <h2
            className="text-[44px] sm:text-[56px] md:text-[72px] font-medium leading-none text-white"
            style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
          >
            This is<br />VERO.
          </h2>

          <nav className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-3 md:gap-3">
            {["Collection", "Agents", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-[11px] tracking-[0.22em] uppercase text-white/60
                  hover:text-gold transition-colors duration-300 w-fit
                "
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-95">

          {["Name", "Email"].map((field) => (
            <div key={field} className="group flex flex-col gap-1">
              <label
                className="text-[10px] tracking-[0.2em] uppercase text-white/40 group-focus-within:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {field}
              </label>
              <input
                type={field === "Email" ? "email" : "text"}
                className="bg-transparent border-b border-white/25 pb-2 text-white text-[13px] outline-none w-full focus:border-gold transition-colors duration-300"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              />
            </div>
          ))}

   
          <div className="group flex flex-col gap-1">
            <label
              className="text-[10px] tracking-[0.2em] uppercase text-white/40 group-focus-within:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Message
            </label>
            <textarea
              rows={3}
              className="bg-transparent border-b border-white/25 pb-2 text-white text-[13px] outline-none w-full resize-none focus:border-gold transition-colors duration-300"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            />
          </div>

          <button
            className="self-start text-[11px] tracking-[0.28em] uppercase text-white/70 border-b border-white/30 pb-1 hover:text-gold hover:border-gold transition-colors duration-300 cursor-pointer bg-transparent"
            style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}
          >
            Send
          </button>

        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mt-12 md:mt-0 pt-6 border-t border-white/10">

        <p
          className="text-[10px] tracking-[0.18em] uppercase text-white/30"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          © VERO by Lynx
        </p>

        <div className="flex gap-6 sm:gap-8">
          <a
            href="https://github.com/Aditya-SSR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.18em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-sunkaranam-4ab3a5374/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.18em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            LinkedIn
          </a>
        </div>

      </div>

    </footer>
  );
}