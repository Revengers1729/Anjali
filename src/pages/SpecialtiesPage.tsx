import React, { useState } from "react";
import { ArrowRight, Calendar, CheckCircle2, FileText, HelpCircle, Shield } from "lucide-react";
import { SPECIALTIES, Specialty } from "../data/specialtiesData";
import { DOCTOR_DATA } from "../data/doctorData";

interface SpecialtiesPageProps {
  initialSlug?: string;
  onOpenBooking: () => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({
  initialSlug = "gynecology",
  onOpenBooking,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    SPECIALTIES.some((s) => s.slug === initialSlug) ? initialSlug : "gynecology"
  );

  const activeSpecialty = SPECIALTIES.find((s) => s.slug === selectedSlug) || SPECIALTIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
          Clinical Specialties
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F1D38] leading-tight">
          Specialized Women’s Healthcare in Patna
        </h1>
        <p className="text-base sm:text-lg text-[#475569]">
          Compassionate clinical consultations covering routine gynecology, obstetric monitoring, and maternal care with Dr. Anjali Kumari.
        </p>
      </div>

      {/* Specialty Filter Navigation (Interactive button tabs) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#0F1D38]/10">
        {SPECIALTIES.map((spec) => {
          const isActive = spec.slug === selectedSlug;
          return (
            <button
              key={spec.id}
              onClick={() => setSelectedSlug(spec.slug)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#0F1D38] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:bg-slate-100 hover:text-[#0F1D38] border border-slate-200"
              }`}
            >
              {spec.title}
            </button>
          );
        })}
      </div>

      {/* Active Specialty Detail Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual & Booking Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-[#0F1D38]/10 shadow-lg bg-[#0F1D38]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={activeSpecialty.image}
                alt={activeSpecialty.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#0F1D38] text-white space-y-3">
              <span className="text-[10px] font-semibold text-[#C5A880] uppercase tracking-widest">
                Patna Practice Focus
              </span>
              <h3 className="font-serif text-2xl font-semibold text-white">
                {activeSpecialty.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeSpecialty.shortDesc}
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full mt-2 py-3 bg-[#9B3C53] hover:bg-[#7E263E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                Request Consultation For {activeSpecialty.title.split(" ")[0]}
              </button>
            </div>
          </div>

          {/* Patient Preparation Box */}
          <div className="p-5 rounded-xl bg-white border border-[#0F1D38]/10 space-y-3">
            <h4 className="text-xs font-bold text-[#0F1D38] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#9B3C53]" />
              Preparing for Your Visit
            </h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              {activeSpecialty.patientPreparation.map((prep, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{prep}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Detailed Clinical Scope */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-semibold text-[#0F1D38]">
              Overview &amp; Clinical Intent
            </h2>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {activeSpecialty.detailedOverview}
            </p>
          </div>

          {/* Key Areas of Consultation */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="font-serif text-xl font-semibold text-[#0F1D38]">
              Key Areas of Care &amp; Clinical Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeSpecialty.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#0F1D38]/10 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9B3C53] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#1E293B]">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Reassurance */}
          <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#0F1D38]/10 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#0F1D38]">
              What to Expect During Your Appointment
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Consultations with Dr. Anjali Kumari are designed to be thorough, unhurried, and comfortable. You will have ample opportunity to ask questions, review symptoms, and discuss diagnostic or treatment options at your own pace.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#0F1D38] hover:bg-[#1B2B4F] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Book Appointment at Patna Clinic
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
