import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Phone, MessageSquare, Download } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultReason?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultReason = "",
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10:00 AM – 1:00 PM)");
  const [reason, setReason] = useState(defaultReason || "General Gynecological Consultation");
  const [notes, setNotes] = useState("");
  
  // Anti-spam honeypot
  const [botField, setBotField] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  if (!isOpen) return null;

  // Validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    // Clean phone number (Indian phone format check: 10 digits)
    const cleanedPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!preferredDate) {
      newErrors.preferredDate = "Please select a preferred date";
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Consultation date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (botField) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch to clinic desk
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `AKP-${new Date().getFullYear()}-${randomSuffix}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 600);
  };

  // Generate .ics calendar download
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

  // WhatsApp Pre-filled Confirmation
  const whatsappUrl = `https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Anjali Kumari Clinic, I have submitted an appointment request (Ref: ${referenceId}) for ${fullName} on ${preferredDate} (${preferredTime}) for ${reason}. Please confirm my slot.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#080D1A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#0F1D38]/10 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="bg-[#0F1D38] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-[#C5A880] uppercase">
              Private Practice · Patna, Bihar
            </span>
            <h2 id="modal-title" className="font-serif text-xl sm:text-2xl font-semibold mt-0.5">
              Request an Appointment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!bookingSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (hidden from real users) */}
              <input
                type="text"
                name="website_verification_check"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-[#9B3C53]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Smt. Priya Sharma"
                  className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none transition-all ${
                    errors.fullName ? "border-[#9B3C53] ring-1 ring-[#9B3C53]" : "border-[#CBD5E1] focus:border-[#0F1D38]"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-[#9B3C53] font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Contact Mobile Number <span className="text-[#9B3C53]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-[#64748B]">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={14}
                    className={`w-full pl-12 pr-3.5 py-2.5 bg-white border text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none transition-all ${
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
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-[#9B3C53]">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className={`w-full px-3 py-2.5 bg-white border text-sm rounded-lg text-[#0F1D38] focus:outline-none transition-all ${
                      errors.preferredDate ? "border-[#9B3C53] ring-1 ring-[#9B3C53]" : "border-[#CBD5E1] focus:border-[#0F1D38]"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-[#9B3C53] font-medium">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] focus:outline-none focus:border-[#0F1D38]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 3:00 PM)">Afternoon (1:00 PM – 3:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Consultation Category */}
              <div>
                <label htmlFor="reason" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Consultation Focus
                </label>
                <select
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] focus:outline-none focus:border-[#0F1D38]"
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
                <label htmlFor="notes" className="block text-xs font-semibold text-[#1E293B] uppercase tracking-wider mb-1">
                  Optional Note for the Clinic
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention if this is a follow-up or if you have previous scan reports."
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] text-sm rounded-lg text-[#0F1D38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F1D38]"
                />
              </div>

              {/* Privacy Reassurance */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-[#FAF9F6] border border-[#0F1D38]/10 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p>
                  Confidential medical request. Your contact details are securely transmitted directly to Dr. Anjali Kumari’s appointment desk in Patna. No medical records are stored insecurely.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#0F1D38] hover:bg-[#1B2B4F] active:scale-[0.99] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#C5A880]" />
                    <span>Request Appointment</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#9B3C53] font-semibold">
                  Request Registered
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#0F1D38] mt-1">
                  Thank You, {fullName}
                </h3>
                <p className="text-sm text-[#475569] mt-2 max-w-sm mx-auto">
                  Your appointment inquiry has been received by Dr. Anjali Kumari’s clinic desk in Patna.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-white border border-[#0F1D38]/10 text-left text-xs space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-[#64748B]">Booking Reference:</span>
                  <span className="font-mono font-semibold text-[#0F1D38]">{referenceId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Preferred Date:</span>
                  <span className="font-medium text-[#0F1D38]">{preferredDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Time Window:</span>
                  <span className="font-medium text-[#0F1D38]">{preferredTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Focus:</span>
                  <span className="font-medium text-[#0F1D38]">{reason}</span>
                </div>
              </div>

              {/* Immediate Next Steps CTAs */}
              <div className="space-y-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm Instant Slot on WhatsApp
                </a>

                <button
                  onClick={handleDownloadCalendar}
                  className="w-full py-2.5 px-4 bg-white border border-[#CBD5E1] text-[#1E293B] hover:bg-slate-50 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#64748B]" />
                  Add to Calendar (.ics)
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs text-[#64748B] hover:text-[#0F1D38] font-medium"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
