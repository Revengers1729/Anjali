import React from "react";
import { ArrowRight, MapPin, Calendar, Clock, CheckCircle2, Shield, HeartHandshake, Sparkles, BookOpen } from "lucide-react";
import { DOCTOR_DATA, PRACTICE_PHILOSOPHY } from "../data/doctorData";
import { SPECIALTIES } from "../data/specialtiesData";
import { ARTICLES } from "../data/articlesData";
import { IMAGES } from "../lib/images";
import { HeroVisual } from "../components/HeroVisual";
import { EcgWaveform } from "../components/EcgWaveform";
import { ClinicGallery } from "../components/ClinicGallery";

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onSelectArticle,
}) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Brand & Trustworthy Introduction */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Regional Authority Trust Marker (Hero Section) */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1.5 rounded-full border border-[#9B3C53]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B3C53]" />
                Patna, Bihar · Private Medical Practice
              </div>

              {/* Doctor Name & Designation */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0F1D38] leading-[1.08] text-balance">
                  Dr. Anjali Kumari
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#7E263E] tracking-wide uppercase">
                  Gynecologist &amp; Obstetrician
                </p>
              </div>

              {/* Trustworthy Introduction */}
              <p className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed">
                Dedicated to compassionate, confidential, and evidence-informed care for women across all stages of life.
                Offering thoughtful gynecological consultations, comprehensive antenatal monitoring, and respectful medical guidance in Patna.
              </p>

              {/* Heartbeat Waveform Accent */}
              <div className="max-w-md py-1">
                <EcgWaveform color="#9B3C53" className="h-6 opacity-75" />
              </div>

              {/* Primary & Secondary Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 bg-[#0F1D38] hover:bg-[#1B2B4F] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book An Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={DOCTOR_DATA.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0F1D38] border border-[#CBD5E1] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#9B3C53]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Consultation Timings & Landmark Quick Indicators */}
              <div className="pt-4 border-t border-[#0F1D38]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{DOCTOR_DATA.consultationDays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9B3C53] shrink-0" />
                  <span className="truncate">{DOCTOR_DATA.landmark}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Portrait & Orbital Rings */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE PHILOSOPHY / TRUST SECTION */}
      <section className="bg-white py-16 border-y border-[#0F1D38]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9B3C53]">
              Clinical Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38]">
              A Patient-First Approach to Care
            </h2>
            <p className="text-sm text-[#475569]">
              Every consultation is anchored in medical ethics, unhurried dialogue, and genuine empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRACTICE_PHILOSOPHY.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#FAF9F6] border border-[#0F1D38]/5 space-y-3 hover:border-[#C5A880]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0F1D38] text-[#C5A880] flex items-center justify-center font-serif font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0F1D38]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLINICAL SPECIALTIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9B3C53]">
              Care Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38]">
              Dedicated Specialty Consultations
            </h2>
            <p className="text-sm text-[#475569] max-w-xl">
              Comprehensive clinical evaluation for routine preventive health, pregnancy stages, and gynecological concerns.
            </p>
          </div>

          <button
            onClick={() => onNavigate("/gynecology")}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F1D38] hover:text-[#9B3C53] transition-colors"
          >
            <span>Explore All Specialties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetric Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#0F1D38]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Header Illustration */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#0F1D38] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                  {item.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-[#0F1D38] group-hover:text-[#9B3C53] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <ul className="space-y-1.5">
                    {item.keyAreas.slice(0, 3).map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{area}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate(`/${item.slug}`)}
                    className="w-full pt-2 flex items-center justify-between text-xs font-semibold text-[#0F1D38] group-hover:text-[#9B3C53]"
                  >
                    <span>Read Clinical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET THE DOCTOR EDITORIAL SECTION */}
      <section className="bg-[#FAF9F6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F1D38]/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0F1D38]/10 bg-[#0F1D38]">
                <img
                  src={IMAGES.doctor.portrait.src}
                  alt={IMAGES.doctor.portrait.alt}
                  title="Dr. Anjali Kumari"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#0F1D38] text-white flex justify-between items-center text-xs">
                  <span className="font-serif font-semibold text-sm">Dr. Anjali Kumari</span>
                  <span className="text-[#C5A880]">Patna, Bihar</span>
                </div>
              </div>
            </div>

            {/* Editorial Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9B3C53]">
                Meet The Doctor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38] leading-tight">
                Compassionate Women's Care Rooted in Dignity and Clinical Discipline
              </h2>

              <p className="text-sm text-[#334155] leading-relaxed">
                Practicing in Patna, Dr. Anjali Kumari brings an attentive, calm, and deeply respectful approach to obstetrics and gynecology. Her practice philosophy centers on ensuring that every woman feels thoroughly heard, understood, and involved in her healthcare choices.
              </p>

              <p className="text-sm text-[#334155] leading-relaxed">
                Rather than rushing through clinical appointments, consultations are structured to allow ample time to discuss medical histories, review diagnostic investigations, explain preventive options, and address the personal questions expectant mothers and patients often have.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#0F1D38] uppercase tracking-wider">
                    Core Clinical Focus
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Obstetric Antenatal Care, Comprehensive Gynecology &amp; Preventive Health.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#0F1D38] uppercase tracking-wider">
                    Consultation Location
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Private Consultation Suite, Patna Central, Bihar.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("/about")}
                  className="px-5 py-2.5 bg-[#0F1D38] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#1B2B4F] transition-colors"
                >
                  Read Full Philosophy
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 bg-white border border-[#CBD5E1] text-[#0F1D38] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-slate-50 transition-colors"
                >
                  Schedule A Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINIC & CONSULTATION SUITE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9B3C53]">
            Clinic Environment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38]">
            A Serene &amp; Private Consultation Space
          </h2>
          <p className="text-sm text-[#475569]">
            Designed for patient privacy, hygienic clinical standards, and reassuring comfort in Patna.
          </p>
        </div>

        <ClinicGallery />
      </section>

      {/* 6. PATIENT EDUCATION ARTICLES PREVIEW */}
      <section className="bg-white py-16 border-t border-[#0F1D38]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9B3C53]">
                Patient Information
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38]">
                Medically Responsible Health Insights
              </h2>
              <p className="text-sm text-[#475569]">
                Educational resources designed to assist patients in understanding health milestones and symptoms.
              </p>
            </div>

            <button
              onClick={() => onNavigate("/patient-information")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F1D38] hover:text-[#9B3C53]"
            >
              <span>View All Patient Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.id);
                  onNavigate("/patient-information");
                }}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#0F1D38]/5 hover:border-[#C5A880]/50 transition-all cursor-pointer flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="text-[#9B3C53] font-semibold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#0F1D38] group-hover:text-[#9B3C53] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#0F1D38]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[11px] text-[#64748B] italic">
              Disclaimer: Educational content published here does not replace personalized medical evaluation by a licensed physician.
            </p>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & DIRECTIONS CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0F1D38] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                Clinic Access · Patna
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                Visit Dr. Anjali Kumari’s Practice in Patna
              </h2>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Centrally located in Patna with convenient road access, comfortable reception facilities, and dedicated consultation hours.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#9B3C53]" />
                  {DOCTOR_DATA.clinicAddress}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  {DOCTOR_DATA.consultationHours}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 bg-[#9B3C53] hover:bg-[#7E263E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                Book An Appointment
              </button>

              <a
                href={DOCTOR_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                Open In Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
