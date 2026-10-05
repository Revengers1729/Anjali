import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldAlert, Car, Bus, Calendar } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";
import { IMAGES } from "../lib/images";

interface LocationPageProps {
  onOpenBooking: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
          Practice Location · Patna
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F1D38] leading-tight">
          Clinic Location &amp; Directions
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Conveniently accessible across Patna and surrounding districts in Bihar. Centrally located with welcoming reception, private examination suites, and patient parking.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Clinic Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#0F1D38]/10 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-[#9B3C53] uppercase tracking-widest">
                Official Clinic Facility
              </span>
              <h2 className="font-serif text-2xl font-semibold text-[#0F1D38]">
                {DOCTOR_DATA.clinicName}
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9B3C53] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F1D38]">Address:</p>
                  <p>{DOCTOR_DATA.clinicAddress}</p>
                  <p className="text-[#64748B]">{DOCTOR_DATA.city}, {DOCTOR_DATA.state} - {DOCTOR_DATA.pincode}, {DOCTOR_DATA.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F1D38]">Prominent Landmark:</p>
                  <p className="text-[#64748B]">{DOCTOR_DATA.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0F1D38] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F1D38]">Consultation Schedule:</p>
                  <p>{DOCTOR_DATA.consultationDays}</p>
                  <p className="text-[#64748B]">{DOCTOR_DATA.consultationHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F1D38]">Clinic Telephone:</p>
                  <p>{DOCTOR_DATA.clinicPhone}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={DOCTOR_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#0F1D38] hover:bg-[#1B2B4F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                Get Directions on Google Maps
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-white border border-[#CBD5E1] hover:bg-slate-50 text-[#0F1D38] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#9B3C53]" />
                Book An In-Person Slot
              </button>
            </div>
          </div>

          {/* Transit & Accessibility Guide */}
          <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#0F1D38]/10 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#0F1D38]">
              Accessibility &amp; Parking in Patna
            </h3>
            <div className="space-y-3 text-xs text-[#475569]">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#9B3C53] shrink-0 mt-0.5" />
                <p>
                  <strong>Private Vehicles &amp; Cabs:</strong> Drop-off access directly at the clinic entrance with dedicated patient car parking.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Bus className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p>
                  <strong>Public Transit:</strong> Easily accessible via auto-rickshaws, e-rickshaws, and buses connecting Patna Junction, Boring Road, and Bailey Road.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map Viewer & Visual Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-[#0F1D38]/15 shadow-md bg-white">
            <div className="bg-[#0F1D38] px-6 py-4 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-semibold">
                  Google Maps Explorer
                </span>
                <h3 className="font-serif text-lg font-medium">Patna Practice Navigation</h3>
              </div>
              <a
                href={DOCTOR_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A880] hover:text-white flex items-center gap-1 font-medium underline"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="w-full h-96 sm:h-[450px] relative bg-slate-100">
              <iframe
                title="Dr. Anjali Kumari Practice Patna Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=Patna,+Bihar,+India&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              />

              {/* One-Tap Mobile Bar */}
              <div className="absolute bottom-4 inset-x-4">
                <a
                  href={DOCTOR_DATA.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#0F1D38]/95 backdrop-blur-md text-white text-xs font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-[#0F1D38]"
                >
                  <MapPin className="w-4 h-4 text-[#9B3C53]" />
                  <span>Open 1-Tap Google Maps Navigation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Consultation Suite Visual Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#0F1D38]/10 bg-[#0F1D38]">
              <img
                src={IMAGES.clinic.consultationRoom.src}
                alt={IMAGES.clinic.consultationRoom.alt}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 bg-[#0F1D38] text-white text-[11px]">
                Private Consultation Suite
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#0F1D38]/10 bg-[#0F1D38]">
              <img
                src={IMAGES.clinic.reception.src}
                alt={IMAGES.clinic.reception.alt}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 bg-[#0F1D38] text-white text-[11px]">
                Patient Reception &amp; Lounge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
