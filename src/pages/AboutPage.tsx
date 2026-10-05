import React from "react";
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Calendar, MapPin, Award } from "lucide-react";
import { DOCTOR_DATA, PRACTICE_PHILOSOPHY } from "../data/doctorData";
import { IMAGES } from "../lib/images";
import { EcgWaveform } from "../components/EcgWaveform";

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
          Editorial Profile
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F1D38] leading-tight">
          Meet Dr. Anjali Kumari
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Gynecologist and Obstetrician practicing in Patna, Bihar, dedicated to patient-centered care, gentle antenatal stewardship, and evidence-informed women’s medicine.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Practice Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0F1D38]/10 bg-[#0F1D38]">
            <img
              src={IMAGES.doctor.portrait.src}
              alt={IMAGES.doctor.portrait.alt}
              title={IMAGES.doctor.portrait.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-6 bg-[#0F1D38] text-white space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-serif text-xl font-semibold">Dr. Anjali Kumari</span>
                <span className="text-xs text-[#C5A880] uppercase tracking-wider">Patna Practice</span>
              </div>
              <p className="text-xs text-slate-300">
                Specialized in Gynecology, Antenatal Monitoring, and Preventive Health for women.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 bg-[#9B3C53] hover:bg-[#7E263E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  Schedule A Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Practice Location Card */}
          <div className="p-5 rounded-xl bg-white border border-[#0F1D38]/10 space-y-2 text-xs text-[#334155]">
            <div className="flex items-center gap-2 font-semibold text-[#0F1D38]">
              <MapPin className="w-4 h-4 text-[#9B3C53]" />
              <span>Consultation Suite Location</span>
            </div>
            <p className="text-[#64748B]">{DOCTOR_DATA.clinicAddress}, Patna, Bihar</p>
            <p className="text-[#64748B]">Consultations: {DOCTOR_DATA.consultationHours}</p>
          </div>
        </div>

        {/* Right Column: In-depth Editorial Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F1D38]">
              Philosophy of Medical Practice
            </h2>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              Dr. Anjali Kumari believes that women’s health consultations should be anchored in trust, mutual respect, and active listening. Gynecological and pregnancy care involves vulnerable and deeply personal health aspects; as such, each patient deserves an environment that guarantees absolute discretion and warmth.
            </p>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              Rather than adopting a rushed approach, Dr. Anjali emphasizes patient education, explaining why a particular diagnostic scan is advised, reviewing laboratory values collaboratively, and ensuring that every woman is confident in her care plan.
            </p>
          </section>

          {/* Verified Care Principles */}
          <section className="space-y-4 pt-6 border-t border-[#0F1D38]/10">
            <h3 className="font-serif text-xl font-semibold text-[#0F1D38]">
              Verified Pillars of Care
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRACTICE_PHILOSOPHY.map((phil, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#0F1D38]/10 space-y-1.5">
                  <h4 className="text-xs font-bold text-[#0F1D38] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9B3C53]" />
                    {phil.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Scope of Practice */}
          <section className="space-y-4 pt-6 border-t border-[#0F1D38]/10">
            <h3 className="font-serif text-xl font-semibold text-[#0F1D38]">
              Clinical Services Offered
            </h3>
            <p className="text-xs text-[#64748B]">
              Consultations in Patna encompass all routine outpatient gynecological, obstetric, and preventive health domains:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Antenatal Checkups &amp; Maternal Health
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Comprehensive Gynecological Review
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Menstrual Cycle &amp; Irregularity Workup
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Pelvic Pain &amp; Infection Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Pre-Conception &amp; Fertility Guidance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Menopause Transition Support
              </li>
            </ul>
          </section>

          {/* Ethics Reassurance */}
          <div className="p-5 rounded-xl bg-[#FAF9F6] border border-[#C5A880]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F1D38]">
              <ShieldCheck className="w-4 h-4 text-[#9B3C53]" />
              Ethical &amp; Transparent Practice
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              In accordance with National Medical Commission guidelines, Dr. Anjali Kumari’s practice adheres strictly to evidence-based protocols. No exaggerated surgical counts or unverified claims are published; patient safety and clinical integrity remain paramount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
