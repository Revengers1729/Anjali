import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
          Direct Inquiries
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F1D38] leading-tight">
          Contact Dr. Anjali Kumari’s Clinic
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          For consultation appointments, antenatal scheduling, or clinic directions in Patna, Bihar, reach out directly to the clinic desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Communication Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#0F1D38]/10 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#0F1D38]">
              Clinic Telephone
            </h3>
            <p className="text-xs text-[#64748B]">
              Speak directly with the reception desk during consultation hours.
            </p>
            <p className="font-mono text-base font-semibold text-[#0F1D38] pt-1">
              {DOCTOR_DATA.clinicPhone}
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#0F1D38]/10 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#0F1D38]">
              WhatsApp Clinic Desk
            </h3>
            <p className="text-xs text-[#64748B]">
              Convenient instant appointment coordination and slot confirmation.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Dr. Anjali Kumari Clinic, I would like to inquire about consultation availability in Patna."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="p-6 rounded-2xl bg-white border border-[#0F1D38]/10 shadow-sm space-y-3 text-xs text-[#334155]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#9B3C53] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0F1D38]">Clinic Address:</p>
                <p>{DOCTOR_DATA.clinicAddress}, Patna, Bihar</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0F1D38]">Consultation Hours:</p>
                <p>{DOCTOR_DATA.consultationHours}</p>
                <p className="text-[#64748B]">({DOCTOR_DATA.consultationDays})</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Booking Prompt */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0F1D38] text-white shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Online Scheduling
            </span>
            <h2 className="font-serif text-3xl font-semibold text-white">
              Schedule Your Consultation Online
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Use our quick appointment request form to select your preferred date and consultation focus. Our clinic reception in Patna will confirm your exact slot promptly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Strict Patient Confidentiality</span>
            </div>
            <p>
              Your contact details are used strictly for appointment logistics. No medical records are shared or stored insecurely.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 bg-[#9B3C53] hover:bg-[#7E263E] active:scale-[0.99] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              Open Appointment Request Form
            </button>
          </div>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10 italic">
            {DOCTOR_DATA.emergencyNotice}
          </div>
        </div>
      </div>
    </div>
  );
};
