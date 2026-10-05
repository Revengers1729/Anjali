import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone, MapPin } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenOwnerGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking,
  onOpenOwnerGuide,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Specialties", path: "/gynecology" },
    { label: "Pregnancy Care", path: "/pregnancy-care" },
    { label: "Patient Info", path: "/patient-information" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#0F1D38]/8"
            : "bg-[#FAF9F6] py-5 border-b border-[#0F1D38]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleNav("/")}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="Dr. Anjali Kumari Practice Home"
            >
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0F1D38] group-hover:text-[#9B3C53] transition-colors">
                Dr. Anjali Kumari
              </span>
            </button>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#475569]">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNav(link.path)}
                    className={`relative py-1 transition-colors hover:text-[#0F1D38] cursor-pointer focus:outline-none ${
                      isActive ? "text-[#0F1D38] font-semibold" : ""
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#9B3C53]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1D38] hover:bg-[#1B2B4F] active:scale-[0.98] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                Book Appointment
              </button>

              {/* Mobile menu hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0F1D38] hover:text-[#9B3C53] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out / Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF9F6]">
          {/* Header inside mobile menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#0F1D38]/10">
            <span className="font-serif text-xl font-semibold text-[#0F1D38]">
              Dr. Anjali Kumari
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#0F1D38] hover:text-[#9B3C53]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#1E293B]">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`text-left py-2.5 border-b border-[#0F1D38]/5 transition-colors ${
                    currentPath === link.path ? "text-[#9B3C53] font-semibold" : "hover:text-[#0F1D38]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#0F1D38]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 flex items-center justify-center gap-2 bg-[#0F1D38] text-white rounded-md text-sm font-semibold uppercase tracking-wider shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                Book An Appointment
              </button>

              <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#9B3C53]" /> Patna, Bihar
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOwnerGuide();
                  }}
                  className="text-[#9B3C53] underline font-medium"
                >
                  Owner Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
