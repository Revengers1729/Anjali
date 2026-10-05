import React, { useState } from "react";
import { IMAGES } from "../lib/images";
import { EcgWaveform } from "./EcgWaveform";

export const HeroVisual: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center select-none">
      {/* Subtle Background Glow Halo */}
      <div 
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C5A880]/15 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />

      {/* Elegant Medical Orbital Rings */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10" 
        aria-hidden="true"
      >
        {/* Outer orbital ring */}
        <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#C5A880]/25 animate-orbit" />
        
        {/* Secondary counter-orbital ring with dash */}
        <div 
          className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#9B3C53]/20" 
          style={{ animation: "subtleOrbit 60s linear infinite reverse" }}
        />

        {/* Small astronomical/cellular particle dots on orbit */}
        <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full animate-orbit pointer-events-none">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C5A880]" />
          <span className="absolute bottom-10 right-10 w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
        </div>
      </div>

      {/* Main Doctor Portrait Container */}
      <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#0F1D38]/10 bg-[#0F1D38]">
        {/* Subtle top medical badge bar */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-2.5 py-1 rounded bg-[#0F1D38]/85 backdrop-blur-md border border-[#C5A880]/30 text-[10px] font-medium tracking-widest text-[#FAF9F6] uppercase">
            Patna Practice
          </div>
          <div className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
        </div>

        {/* Doctor Image Asset */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0F1D38]">
          <img
            src={IMAGES.doctor.portrait.src}
            alt={IMAGES.doctor.portrait.alt}
            title={IMAGES.doctor.portrait.title}
            width={600}
            height={800}
            loading="eager"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-90 scale-[1.02]"
            }`}
          />

          {/* Bottom gradient shadow scrim */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/60 to-transparent pointer-events-none" />

          {/* Subtle Heartbeat Waveform Accent across base of portrait */}
          <div className="absolute bottom-12 inset-x-4 z-20 opacity-80 pointer-events-none">
            <EcgWaveform color="#C5A880" className="h-6" />
          </div>

          {/* Doctor Title Caption Strip */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between px-3 py-2 rounded-lg bg-[#0F1D38]/85 backdrop-blur-md border border-[#C5A880]/20">
            <div>
              <p className="text-xs font-semibold text-white font-sans tracking-wide">
                Dr. Anjali Kumari
              </p>
              <p className="text-[10px] text-[#C5A880] tracking-wider uppercase">
                Gynecology &amp; Obstetrics
              </p>
            </div>
            <span className="text-[10px] text-slate-300 font-medium">
              Patna, Bihar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
