import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { IMAGES } from "../lib/images";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "consultation",
    src: IMAGES.clinic.consultationRoom.src,
    title: "Doctor's Private Consultation Suite",
    caption: "A quiet, private consultation space in Patna designed for confidential doctor-patient discussions.",
    alt: IMAGES.clinic.consultationRoom.alt,
  },
  {
    id: "reception",
    src: IMAGES.clinic.reception.src,
    title: "Reception & Waiting Lounge",
    caption: "Calm, welcoming reception area with comfortable seating and peaceful ambiance.",
    alt: IMAGES.clinic.reception.alt,
  },
  {
    id: "gynecology",
    src: IMAGES.medical.gynecology.src,
    title: "Gynecological Care & Screening",
    caption: "Dedicated examination facilities equipped for routine preventive screenings.",
    alt: IMAGES.medical.gynecology.alt,
  },
  {
    id: "maternal",
    src: IMAGES.medical.pregnancy.src,
    title: "Maternal Health & Antenatal Monitoring",
    caption: "Compassionate obstetric care environment supporting expectant mothers.",
    alt: IMAGES.medical.pregnancy.alt,
  },
];

export const ClinicGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative rounded-xl overflow-hidden bg-[#0F1D38] border border-[#0F1D38]/10 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                title={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Hover overlay caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/90 via-[#080D1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
              </div>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#080D1A]/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setSelectedIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] w-auto overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black">
              <img
                src={GALLERY_ITEMS[selectedIdx].src}
                alt={GALLERY_ITEMS[selectedIdx].alt}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-lg font-serif font-medium text-[#FAF9F6]">
                {GALLERY_ITEMS[selectedIdx].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                {GALLERY_ITEMS[selectedIdx].caption}
              </p>
              <span className="text-[11px] text-[#C5A880] mt-2 block">
                {selectedIdx + 1} of {GALLERY_ITEMS.length} · Dr. Anjali Kumari Practice, Patna
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
