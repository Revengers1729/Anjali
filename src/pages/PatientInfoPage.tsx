import React, { useState } from "react";
import { BookOpen, CheckCircle, ShieldAlert, ArrowRight, Calendar, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { ARTICLES, Article } from "../data/articlesData";

interface PatientInfoPageProps {
  initialArticleId?: string;
  onOpenBooking: () => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({
  initialArticleId,
  onOpenBooking,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(
    initialArticleId || ARTICLES[0].id
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#7E263E] uppercase bg-[#9B3C53]/10 px-3 py-1 rounded-full">
          Educational Resources
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F1D38] leading-tight">
          Patient Health &amp; Clinical Information
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Medically responsible guidance prepared to help women and families in Patna better understand reproductive wellness, pregnancy milestones, and preparation for clinical care.
        </p>
      </div>

      {/* Mandatory Medical Disclaimer Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm space-y-1">
          <p className="font-semibold text-amber-900">
            Medical Disclaimer &amp; Notice of Educational Intent:
          </p>
          <p className="text-amber-800 leading-relaxed">
            This information is provided solely for educational purposes and does not replace in-person consultation with a qualified medical professional. Online information cannot diagnose personal health symptoms or formulate medical prescriptions.
          </p>
        </div>
      </div>

      {/* Articles Grid / Expandable Library */}
      <div className="space-y-6">
        {ARTICLES.map((article) => {
          const isExpanded = expandedId === article.id;
          return (
            <div
              key={article.id}
              className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                isExpanded
                  ? "bg-white border-[#0F1D38]/20 shadow-md"
                  : "bg-white/80 border-[#0F1D38]/10 hover:border-[#C5A880]/50"
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
                className="p-6 cursor-pointer flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#64748B]">
                    <span className="text-[#9B3C53] font-semibold uppercase tracking-wider text-[11px]">
                      {article.category}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0F1D38]">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    {article.summary}
                  </p>
                </div>

                <button
                  className="p-2 rounded-full hover:bg-slate-100 text-[#0F1D38] transition-colors"
                  aria-label={isExpanded ? "Collapse article" : "Expand article"}
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded Article Body */}
              {isExpanded && (
                <div className="px-6 pb-8 pt-2 border-t border-slate-100 space-y-6">
                  {article.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-serif text-lg font-semibold text-[#0F1D38]">
                        {sec.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                        {sec.body}
                      </p>
                      {sec.points && (
                        <ul className="space-y-2 pt-1 pl-1">
                          {sec.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                              <CheckCircle className="w-4 h-4 text-[#9B3C53] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* Consultation prompt footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#64748B] italic">
                      Have questions regarding these symptoms? Schedule an unhurried consultation with Dr. Anjali Kumari in Patna.
                    </p>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 bg-[#0F1D38] hover:bg-[#1B2B4F] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
