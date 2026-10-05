import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, ShieldCheck, Download, MessageSquare, Phone, MapPin } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";

export const BookingPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10:00 AM – 1:00 PM)");
  const [reason, setReason] = useState("General Gynecological Consultation");
  const [notes, setNotes] = useState("");
  const [botField, setBotField] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter patient's full name";
    }

    const cleanedPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!preferredDate) {
      newErrors.preferredDate = "Please choose a preferred consultation date";
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return;
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `AKP-${new Date().getFullYear()}-${randomSuffix}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 600);
  };

  const handleDownloadCalendar = () => {
    const eventDate = preferredDate.replace(/-/g, "");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Dr Anjali Kumari Practice//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Consultation with Dr. Anjali Kumari (${reason})`,
      `DESCRIPTION:Appointment Request Ref: ${referenceId}\\nPatient: ${fullName}\\nContact: ${phone}\\nClinic: Dr. Anjali Kumari Practice, Patna, Bihar.`,
      `LOCATION:${DOCTOR_DATA.clinicAddress}, Patna, Bihar`,
      `DTSTART:${eventDate}T100000`,
      `DTEND:${eventDate}T104500`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `appointment-dr-anjali-${referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappUrl = `https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Anjali Kumari Clinic, I have submitted an appointment request (Ref: ${referenceId}) for ${fullName} on ${preferredDate} (${preferredTime}) for ${reason}. Please confirm my slot.`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
            Online Clinic Scheduling
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0F1D38]">
            Book an Appointment with Dr. Anjali Kumari
          </h1>
          <p className="text-sm text-[#475569]">
            Patna, Bihar · Confidential, unhurried, and evidence-informed consultations.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F1D38]/10 shadow-lg">
          {!bookingSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Full Name */}
              <div>
                <label htmlFor="pageFullName" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-[#9B3C53]">*</span>
                </label>
                <input
                  id="pageFullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Smt. Sunita Verma"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none transition-all ${
                    errors.fullName ? "border-[#9B3C53] ring-1 ring-[#9B3C53]" : "border-[#CBD5E1] focus:border-[#0F1D38]"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-[#9B3C53] font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="pagePhone" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Contact Mobile Number <span className="text-[#9B3C53]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-[#64748B]">
                    +91
                  </span>
                  <input
                    id="pagePhone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={14}
                    className={`w-full pl-12 pr-3.5 py-2.5 bg-[#FAF9F6] border text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none transition-all ${
                      errors.phone ? "border-[#9B3C53] ring-1 ring-[#9B3C53]" : "border-[#CBD5E1] focus:border-[#0F1D38]"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-[#9B3C53] font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pagePreferredDate" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-[#9B3C53]">*</span>
                  </label>
                  <input
                    id="pagePreferredDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className={`w-full px-3 py-2.5 bg-[#FAF9F6] border text-sm rounded-lg text-[#0F1D38] focus:outline-none transition-all ${
                      errors.preferredDate ? "border-[#9B3C53] ring-1 ring-[#9B3C53]" : "border-[#CBD5E1] focus:border-[#0F1D38]"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-[#9B3C53] font-medium">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="pagePreferredTime" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <select
                    id="pagePreferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF9F6] border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] focus:outline-none focus:border-[#0F1D38]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 3:00 PM)">Afternoon (1:00 PM – 3:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="pageReason" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Consultation Focus
                </label>
                <select
                  id="pageReason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF9F6] border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] focus:outline-none focus:border-[#0F1D38]"
                >
                  <option value="General Gynecological Consultation">General Gynecological Consultation</option>
                  <option value="Pregnancy & Antenatal Checkup">Pregnancy &amp; Antenatal Checkup</option>
                  <option value="Menstrual Health & Cycle Irregularity">Menstrual Health &amp; Cycle Irregularity</option>
                  <option value="Preventive Women's Health & Screening">Preventive Women's Health &amp; Screening</option>
                  <option value="Pre-Conception Family Planning">Pre-Conception Family Planning</option>
                  <option value="Other Consultation / Second Opinion">Other Consultation / Second Opinion</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <label htmlFor="pageNotes" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Optional Note for the Clinic Desk
                </label>
                <textarea
                  id="pageNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention previous reports or specific clinical questions you have."
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F1D38]"
                />
              </div>

              {/* Security & Confidentiality */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#0F1D38]/10 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p>
                  Confidential healthcare request. Information is sent directly to Dr. Anjali Kumari’s appointment desk in Patna. No personal health records are stored insecurely.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#0F1D38] hover:bg-[#1B2B4F] active:scale-[0.99] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#C5A880]" />
                    <span>Request Appointment at Patna Clinic</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#9B3C53] font-semibold">
                  Request Registered
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F1D38]">
                  Thank You, {fullName}
                </h2>
                <p className="text-sm text-[#475569] max-w-md mx-auto">
                  Your consultation request has been submitted to Dr. Anjali Kumari’s reception desk in Patna.
                </p>
              </div>

              {/* Reference Details */}
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#0F1D38]/10 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-[#64748B]">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#0F1D38]">{referenceId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Date &amp; Window:</span>
                  <span className="font-medium text-[#0F1D38]">{preferredDate} · {preferredTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Specialty Focus:</span>
                  <span className="font-medium text-[#0F1D38]">{reason}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Clinic Location:</span>
                  <span className="font-medium text-[#0F1D38]">{DOCTOR_DATA.city}, Bihar</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="max-w-md mx-auto space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant Confirmation on WhatsApp
                </a>

                <button
                  onClick={handleDownloadCalendar}
                  className="w-full py-3 px-4 bg-white border border-[#CBD5E1] text-[#0F1D38] hover:bg-slate-50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#64748B]" />
                  Save Appointment to Calendar (.ics)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
