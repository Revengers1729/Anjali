import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldAlert, Heart, Calendar } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";
import { IMAGES } from "../lib/images";

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenOwnerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenOwnerGuide,
}) => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[#080D1A] text-slate-300 pt-16 pb-12 border-t border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={IMAGES.branding.logoMark.src}
                  alt={IMAGES.branding.logoMark.alt}
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide">
                    DR. ANJALI KUMARI
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A880] font-medium">
                    Gynecologist &amp; Obstetrician
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Dedicated to compassionate, confidential, and evidence-informed women’s healthcare,
                antenatal monitoring, and gynecological consultations in Patna, Bihar.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B3C53] hover:bg-[#7E263E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  Book Appointment
                </button>
                <button
                  onClick={onOpenOwnerGuide}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium rounded-md transition-colors"
                >
                  Owner Setup Guide
                </button>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => handleLink("/")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/about")} className="hover:text-white transition-colors">
                    Meet Dr. Anjali
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/gynecology")} className="hover:text-white transition-colors">
                    Gynecology
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/obstetrics")} className="hover:text-white transition-colors">
                    Obstetrics
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/pregnancy-care")} className="hover:text-white transition-colors">
                    Pregnancy Care
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/womens-health")} className="hover:text-white transition-colors">
                    Women's Health
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Patient Care & Resources */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                Patient Care
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => handleLink("/patient-information")} className="hover:text-white transition-colors">
                    Preparing for Visit
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/location")} className="hover:text-white transition-colors">
                    Clinic Location &amp; Map
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink("/contact")} className="hover:text-white transition-colors">
                    Contact Practice
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalModal("privacy")} className="hover:text-white transition-colors">
                    Patient Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalModal("terms")} className="hover:text-white transition-colors">
                    Terms of Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Location & Hours */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                Clinic Desk
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#9B3C53] shrink-0 mt-0.5" />
                  <span>{DOCTOR_DATA.clinicAddress}, Patna, Bihar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{DOCTOR_DATA.consultationHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{DOCTOR_DATA.clinicPhone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Notice & Ethics Disclaimer */}
          <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 space-y-2">
            <div className="flex items-start gap-2 text-amber-200/90 font-medium">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Medical &amp; Emergency Disclaimer:</span>
            </div>
            <p className="leading-relaxed">
              {DOCTOR_DATA.disclaimer} {DOCTOR_DATA.emergencyNotice}
            </p>
          </div>

          {/* Bottom Bar: Copyright & Location Credential */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © {new Date().getFullYear()} Dr. Anjali Kumari. All rights reserved. Patna, Bihar, India.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <button onClick={() => setLegalModal("privacy")} className="hover:text-white underline">
                Privacy
              </button>
              <span>·</span>
              <button onClick={() => setLegalModal("terms")} className="hover:text-white underline">
                Terms
              </button>
              <span>·</span>
              <a
                href={DOCTOR_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Google Maps Location
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="max-w-lg w-full bg-white rounded-xl p-6 text-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif text-xl font-semibold text-[#0F1D38]">
                {legalModal === "privacy" ? "Patient Privacy Policy" : "Consultation Terms"}
              </h3>
              <button onClick={() => setLegalModal(null)} className="p-1 hover:bg-slate-100 rounded">
                ✕
              </button>
            </div>
            <div className="text-xs text-slate-600 space-y-2 max-h-80 overflow-y-auto leading-relaxed">
              {legalModal === "privacy" ? (
                <>
                  <p>
                    Dr. Anjali Kumari Practice respects patient privacy. Information requested through the online appointment booking interface is utilized strictly by authorized clinic staff for scheduling and clinical contact.
                  </p>
                  <p>
                    No personal medical notes, diagnostic images, or contact details are sold or disclosed to third-party marketing entities.
                  </p>
                  <p>
                    Online requests do not create a permanent health record until verified in-person at the clinic in Patna.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Online appointment submissions represent scheduling requests and are subject to final clinic desk confirmation based on daily clinical triage and doctor availability.
                  </p>
                  <p>
                    In accordance with National Medical Commission guidelines, formal diagnosis and treatment prescriptions are given in-person following clinical examination.
                  </p>
                  <p>
                    In case of obstetric emergencies (such as heavy bleeding or severe acute pain), do not wait for online replies—proceed directly to the nearest hospital emergency room.
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#0F1D38] text-white text-xs font-semibold rounded-md"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
