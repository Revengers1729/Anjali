import React, { useState } from "react";
import { X, CheckCircle, Globe, Search, MapPin, Phone, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { DOCTOR_DATA } from "../data/doctorData";

interface OwnerSetupGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerSetupGuide: React.FC<OwnerSetupGuideProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    {
      step: 1,
      title: "",
      icon: Phone,
      description: "",
      checklist: [
        "Open `src/data/doctorData.ts`",
        "",
        "",
        "",
        "",
        "Just chill"
      ]
    },
    {
      step: 2,
      title: "",
      icon: Globe,
      description: "",
      checklist: [
        "".
        ""
      ]
    },
    {
      step: 3,
      title: "",
      icon: Search,
      description: "",
      checklist: [
       "",
        ""
      ]
    },
    {
      step: 4,
      title: "",
      icon: MapPin,
      description: "",
      checklist: [
       "",
        ""
      ]
    },
    {
      step: 5,
      title: "",
      icon: FileText,
      description: "",
      checklist: [
       "",
        "Respond courteously to all genuine patient reviews received on Google Business Profile"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#080D1A]/75 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#0F1D38]/10 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0F1D38] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C5A880]/20 text-[#C5A880]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-[#C5A880] uppercase">
                Practice Launch Guide
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold">
                What You Have To Do (Owner Checklist)
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
            aria-label="Close owner guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Step Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-[#0F1D38]/10 flex gap-2 overflow-x-auto">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeStep === s.step
                  ? "bg-[#0F1D38] text-white shadow-sm"
                  : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              Step {s.step}: {s.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="p-6">
          {steps.map((s) => {
            if (s.step !== activeStep) return null;
            const Icon = s.icon;
            return (
              <div key={s.step} className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0F1D38]/5 text-[#0F1D38] shrink-0 mt-0.5">
                    <Icon className="w-6 h-6 text-[#9B3C53]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#0F1D38]">
                      Step {s.step}: {s.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1">{s.description}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#0F1D38]/10 space-y-2.5">
                  <h4 className="text-xs font-bold text-[#0F1D38] uppercase tracking-wider">
                    Action Items:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#334155]">
                    {s.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Bottom Actions */}
          <div className="mt-6 pt-4 border-t border-[#0F1D38]/10 flex items-center justify-between">
            <div className="text-[11px] text-[#64748B]">
              Step {activeStep} of {steps.length}
            </div>
            <div className="flex gap-2">
              {activeStep > 1 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-3.5 py-2 text-xs font-semibold text-[#0F1D38] bg-slate-100 hover:bg-slate-200 rounded-md"
                >
                  Previous
                </button>
              )}
              {activeStep < steps.length ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0F1D38] hover:bg-[#1B2B4F] rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md"
                >
                  Got It, Ready to Launch
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
