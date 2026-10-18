
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppointmentModal } from "./components/AppointmentModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SpecialtiesPage } from "./pages/SpecialtiesPage";
import { PatientInfoPage } from "./pages/PatientInfoPage";
import { LocationPage } from "./pages/LocationPage";
import { ContactPage } from "./pages/ContactPage";
import { BookingPage } from "./pages/BookingPage";
import { updatePageSeo } from "./lib/seo";
import { DOCTOR_DATA } from "./data/doctorData";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<
    string | undefined
  >(undefined);

  // Sync with browser URL / history on initial load and popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || "/";
      setCurrentPath(path);
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);

    return () =>
      window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Update SEO metadata whenever currentPath changes
  useEffect(() => {
    switch (currentPath) {
      case "/about":
        updatePageSeo({
          title: "Meet Dr. Anjali Kumari | Gynecologist & Obstetrician Patna",
          description:
            "Learn about Dr. Anjali Kumari's clinical philosophy, women-centered approach, and evidence-informed obstetrics and gynecology practice in Patna, Bihar.",
          path: "/about",
          schemaType: "AboutPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        });
        break;

      case "/gynecology":
        updatePageSeo({
          title: "Gynecology Consultations | Dr. Anjali Kumari Patna",
          description:
            "Routine gynecological examinations, pelvic health evaluations, cervical screening, and cycle management by Dr. Anjali Kumari in Patna, Bihar.",
          path: "/gynecology",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Gynecology", path: "/gynecology" },
          ],
        });
        break;

      case "/obstetrics":
        updatePageSeo({
          title: "Obstetrics & Antenatal Care | Dr. Anjali Kumari Patna",
          description:
            "Comprehensive prenatal monitoring, fetal health surveillance, and compassionate maternal care in Patna with Dr. Anjali Kumari.",
          path: "/obstetrics",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Obstetrics", path: "/obstetrics" },
          ],
        });
        break;

      case "/pregnancy-care":
        updatePageSeo({
          title: "Pregnancy Care & Maternal Guidance | Dr. Anjali Kumari Patna",
          description:
            "Trimester-by-trimester prenatal guidance, maternal wellness checkups, and nutritional counseling in Patna, Bihar.",
          path: "/pregnancy-care",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Pregnancy Care", path: "/pregnancy-care" },
          ],
        });
        break;

      case "/womens-health":
        updatePageSeo({
          title: "Preventive Women's Health Clinic | Dr. Anjali Kumari Patna",
          description:
            "Annual wellness evaluations, cervical health, adolescent health, and peri-menopausal counseling in Patna, Bihar.",
          path: "/womens-health",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Women's Health", path: "/womens-health" },
          ],
        });
        break;

      case "/patient-information":
        updatePageSeo({
          title: "Patient Information & Health Resources | Dr. Anjali Kumari Patna",
          description:
            "Medically responsible patient guides on menstrual health, pregnancy care fundamentals, and preparing for your gynecology visit in Patna.",
          path: "/patient-information",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Patient Information", path: "/patient-information" },
          ],
        });
        break;

      case "/location":
        updatePageSeo({
          title: "Clinic Location & Directions | Dr. Anjali Kumari Patna, Bihar",
          description:
            "Find Dr. Anjali Kumari's private medical practice in Patna. Address, landmarks, Google Maps navigation, and consultation timings.",
          path: "/location",
          schemaType: "MedicalClinic",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Location", path: "/location" },
          ],
        });
        break;

      case "/contact":
        updatePageSeo({
          title: "Contact Clinic Desk | Dr. Anjali Kumari Patna",
          description:
            "Contact Dr. Anjali Kumari's consultation desk in Patna. Phone, WhatsApp appointment inquiries, and clinic schedule details.",
          path: "/contact",
          schemaType: "ContactPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ],
        });
        break;

      case "/book-appointment":
        updatePageSeo({
          title: "Book an Appointment | Dr. Anjali Kumari Gynecologist Patna",
          description:
            "Schedule a confidential consultation with Dr. Anjali Kumari, Gynecologist & Obstetrician in Patna, Bihar.",
          path: "/book-appointment",
          schemaType: "MedicalWebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Book Appointment", path: "/book-appointment" },
          ],
        });
        break;

      default:
        updatePageSeo({
          title: "Dr. Anjali Kumari | Gynecologist & Obstetrician Patna, Bihar",
          description:
            "Dr. Anjali Kumari is a Gynecologist and Obstetrician practicing in Patna, Bihar, offering compassionate, evidence-based women's healthcare, pregnancy care, and gynecological consultations.",
          path: "/",
          schemaType: "Physician",
          breadcrumbs: [{ name: "Home", path: "/" }],
        });
        break;
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render view depending on route
  const renderCurrentView = () => {
    switch (currentPath) {
      case "/about":
        return (
          <AboutPage
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handleNavigate}
          />
        );

      case "/gynecology":
        return (
          <SpecialtiesPage
            initialSlug="gynecology"
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/obstetrics":
        return (
          <SpecialtiesPage
            initialSlug="obstetrics"
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/pregnancy-care":
        return (
          <SpecialtiesPage
            initialSlug="pregnancy-care"
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/womens-health":
        return (
          <SpecialtiesPage
            initialSlug="womens-health"
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/menstrual-health":
        return (
          <SpecialtiesPage
            initialSlug="menstrual-health"
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/patient-information":
        return (
          <PatientInfoPage
            initialArticleId={selectedArticleId}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case "/location":
        return <LocationPage onOpenBooking={() => setIsBookingOpen(true)} />;

      case "/contact":
        return <ContactPage onOpenBooking={() => setIsBookingOpen(true)} />;

      case "/book-appointment":
        return <BookingPage />;

      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              handleNavigate("/patient-information");
            }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B]">
      {/* Top Clinical Announcement Bar */}
      <aside
        aria-label="Practice announcement"
        className="bg-[#080D1A] text-slate-300 py-1.5 px-4 text-center text-[11px] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="text-[#C5A880] hidden sm:inline">
            Patna, Bihar · Private Medical Practice
          </span>

          <span className="mx-auto sm:mx-0">
            Consultations by appointment · {DOCTOR_DATA.consultationDays}
          </span>
        </div>
      </aside>

      {/* Sticky Premium Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 pb-16">{renderCurrentView()}</main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Floating Mobile Bottom Booking Button */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-30">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="w-full py-3 px-4 bg-[#0F1D38] hover:bg-[#1B2B4F] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-2xl flex items-center justify-center gap-2 border border-[#C5A880]/30 cursor-pointer active:scale-[0.99]"
        >
          <span className="text-[#C5A880]">📅</span>
          <span>Book Appointment · Patna Clinic</span>
        </button>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
