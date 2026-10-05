export interface Specialty {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  detailedOverview: string;
  keyAreas: string[];
  patientPreparation: string[];
  image: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "gynecology",
    slug: "gynecology",
    title: "Comprehensive Gynecology",
    shortDesc: "Routine preventive checkups, screening, infection care, and pelvic health consultations.",
    detailedOverview: "Dr. Anjali Kumari provides compassionate gynecological consultations for women at every stage of adulthood. Consultations focus on clinical evaluation, preventive wellness, pelvic health, and evidence-informed management of common gynecological symptoms.",
    keyAreas: [
      "Pelvic health evaluation & discomfort investigation",
      "Vaginal infection management & hygiene counseling",
      "Cervical health screening & Pap test advisory",
      "Fibroid and ovarian cyst clinical assessment",
      "Uterine health & benign condition monitoring",
      "Menopausal transition support & symptom guidance"
    ],
    patientPreparation: [
      "Bring any prior ultrasound scans, blood tests, or pelvic examination reports.",
      "Note the date of your last menstrual period (LMP).",
      "List any ongoing medications or allergies."
    ],
    image: "/images/medical/gynecology-care.svg"
  },
  {
    id: "obstetrics",
    slug: "obstetrics",
    title: "Obstetrics & Antenatal Care",
    shortDesc: "Comprehensive prenatal monitoring, maternal wellness tracking, and delivery planning support.",
    detailedOverview: "Dedicated obstetric care designed to guide expectant mothers through conception, pregnancy trimesters, and safe delivery planning. Dr. Anjali emphasizes gentle monitoring, nutritional guidance, and proactive maternal health surveillance.",
    keyAreas: [
      "First trimester viability & gestational progress checks",
      "Routine blood pressure and fetal growth surveillance",
      "Antenatal screening schedule guidance (scans & bloodwork)",
      "Gestational diabetes & hypertension surveillance",
      "Labor readiness & birth planning counseling",
      "Postnatal recovery & maternal debriefing"
    ],
    patientPreparation: [
      "Carry your antenatal card, previous pregnancy records, and current scan reports.",
      "Wear comfortable, loose-fitting clothing.",
      "Prepare any questions regarding diet, exercise, or physical discomforts."
    ],
    image: "/images/medical/pregnancy-care.svg"
  },
  {
    id: "pregnancy-care",
    slug: "pregnancy-care",
    title: "Pregnancy Care & Maternal Guidance",
    shortDesc: "Trimester-by-trimester nutritional advice, lifestyle modifications, and fetal well-being checks.",
    detailedOverview: "Every pregnancy is unique. Dr. Anjali provides patient-focused counseling emphasizing maternal comfort, emotional reassurance, fetal developmental milestones, and timely diagnostic checkups.",
    keyAreas: [
      "Trimester 1: Early development, morning sickness management, folate support",
      "Trimester 2: Anomaly scan coordination, maternal nutrition, iron balance",
      "Trimester 3: Fetal movement monitoring, delivery preparedness, hydration",
      "Postpartum: Lactation support and physical pelvic floor recovery"
    ],
    patientPreparation: [
      "Keep a log of daily fetal kicks (if in third trimester).",
      "Bring all current prenatal vitamin supplements for verification."
    ],
    image: "/images/medical/pregnancy-care.svg"
  },
  {
    id: "womens-health",
    slug: "womens-health",
    title: "Preventive Women's Health",
    shortDesc: "Annual wellness checkups, adolescent health guidance, hormonal balance, and lifestyle advisory.",
    detailedOverview: "Holistic preventive health consultations to support women through life transitions. From adolescent menstrual initiation to peri-menopause and senior bone health, Dr. Anjali fosters proactive wellness habits.",
    keyAreas: [
      "Annual preventive pelvic & breast clinical examinations",
      "Adolescent health & puberty transition guidance",
      "Peri-menopausal hot flash & mood transition support",
      "Preventive calcium, vitamin D & bone density screening advisory",
      "Healthy lifestyle, nutrition, and stress management guidance"
    ],
    patientPreparation: [
      "Document any family history of breast, ovarian, or gynecological conditions.",
      "List symptoms such as fatigue, weight fluctuations, or mood changes."
    ],
    image: "/images/medical/womens-health.svg"
  },
  {
    id: "menstrual-health",
    slug: "menstrual-health",
    title: "Menstrual Health & Cycle Evaluation",
    shortDesc: "Evaluation for irregular periods, dysmenorrhea (painful cycles), heavy bleeding, and PCOS guidance.",
    detailedOverview: "Clear, supportive medical evaluation for irregular menstrual patterns, severe cramps, premenstrual tension, and polycystic ovarian morphology.",
    keyAreas: [
      "Irregular, delayed, or absent period investigation",
      "Dysmenorrhea (painful cramping) evaluation & relief plans",
      "Heavy menstrual bleeding (menorrhagia) diagnostic workup",
      "Polycystic Ovary Syndrome (PCOS) lifestyle & medical guidance",
      "Premenstrual Dysphoric Disorder (PMDD) counseling"
    ],
    patientPreparation: [
      "Track your cycle dates, duration, and flow intensity for the last 3-6 months.",
      "Record any accompanying symptoms like acne, hirsutism, or pain peaks."
    ],
    image: "/images/medical/gynecology-care.svg"
  }
];
