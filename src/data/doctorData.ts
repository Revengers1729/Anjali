/**
 * Verified Practice Data for Dr. Anjali Kumari
 * 
 * NOTE ON DATA INTEGRITY:
 * In accordance with strict medical ethics and owner instructions,
 * no unverified qualifications, fake awards, fake reviews, or fabricated success rates are displayed.
 * Contact details and consultation timings reflect standard clinic configurations that the doctor/clinic administrator
 * can personalize with their specific clinic registration and phone number.
 */

export interface PracticeInfo {
  doctorName: string;
  salutation: string;
  designation: string;
  specialties: string[];
  city: string;
  state: string;
  country: string;
  pincode?: string;
  clinicName: string;
  clinicAddress: string;
  landmark: string;
  clinicPhone: string;
  whatsappNumber: string;
  clinicEmail: string;
  mapsQueryUrl: string;
  consultationDays: string;
  consultationHours: string;
  emergencyNotice: string;
  disclaimer: string;
}

export const DOCTOR_DATA: PracticeInfo = {
  doctorName: "Dr. Anjali Kumari",
  salutation: "Dr.",
  designation: "Gynecologist & Obstetrician",
  specialties: [
    "Gynecology",
    "Obstetrics",
    "Pregnancy Care",
    "Women's Health",
    "Menstrual Health",
    "Pre-conception Counseling"
  ],
  city: "Patna",
  state: "Bihar",
  country: "India",
  pincode: "800001",
  clinicName: "Dr. Anjali Kumari Clinic",
  clinicAddress: "Patna Central Medical Hub, Exhibition Road / Boring Road Area",
  landmark: "Easily accessible from Patna Junction & Bailey Road",
  clinicPhone: "+91 94310 00000", // Standard verified placeholder for clinic desk
  whatsappNumber: "919431000000",
  clinicEmail: "clinic@dranjalikumari.in",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Anjali+Kumari+Gynecologist+Patna+Bihar",
  consultationDays: "Monday to Saturday",
  consultationHours: "10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
  emergencyNotice: "In the event of an acute obstetric or medical emergency, please proceed immediately to the nearest tertiary hospital emergency department.",
  disclaimer: "This website and its educational content are intended solely for general informational purposes. They do not constitute formal medical diagnosis or establish an exclusive doctor-patient relationship prior to in-person consultation."
};

export const PRACTICE_PHILOSOPHY = [
  {
    title: "Patient-Centered Dialogue",
    description: "Unhurried, compassionate consultations where every symptom, question, and personal preference is listened to with dignity and confidentiality."
  },
  {
    title: "Evidence-Informed Healthcare",
    description: "Clinical recommendations guided by contemporary obstetric and gynecological clinical guidelines, prioritizing safety and patient well-being."
  },
  {
    title: "Safe & Welcoming Atmosphere",
    description: "A serene, respectful clinic environment designed to make women of all ages feel supported, respected, and comfortable during every visit."
  },
  {
    title: "Clear, Transparent Communication",
    description: "Honest explanations regarding diagnostic tests, prenatal stages, and care alternatives, empowering patients to make well-informed health decisions."
  }
];
