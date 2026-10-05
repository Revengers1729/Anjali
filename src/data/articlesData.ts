export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
    points?: string[];
  }[];
}

export const ARTICLES: Article[] = [
  {
    id: "when-to-visit",
    slug: "when-to-visit-gynecologist",
    title: "When Should You Schedule a Consultation with a Gynecologist?",
    category: "General Gynecology",
    readTime: "4 min read",
    publishedDate: "October 2026",
    summary: "Recognizing key symptoms and milestones that call for an unhurried, professional gynecological evaluation.",
    sections: [
      {
        heading: "Proactive Preventive Care",
        body: "Many women wait until acute discomfort arises before scheduling a visit. However, routine consultations provide an invaluable opportunity to establish baseline health, discuss preventive screenings, and identify subtle imbalances before they develop further."
      },
      {
        heading: "Key Indications for Consultation",
        body: "You should schedule a consultation if you notice any of the following persistent changes:",
        points: [
          "Unexplained pelvic, lower abdominal, or persistent back discomfort",
          "Irregular menstrual cycles, unusually heavy bleeding, or spotting between periods",
          "Unusual vaginal discharge accompanied by itching, odor, or burning sensation",
          "Severe menstrual cramping that interferes with daily school or work activities",
          "Planning for pregnancy or seeking pre-conception health optimization"
        ]
      },
      {
        heading: "A Reassuring, Confidential Space",
        body: "A consultation is fundamentally a safe, judgment-free clinical conversation. Dr. Anjali takes the time to listen thoroughly, review your health history, and explain recommendations step-by-step."
      }
    ]
  },
  {
    id: "menstrual-health-guide",
    slug: "understanding-menstrual-health",
    title: "Understanding Menstrual Health: Normal Variations vs. Warning Signs",
    category: "Menstrual Health",
    readTime: "5 min read",
    publishedDate: "October 2026",
    summary: "A practical clinical overview of what constitutes a normal cycle and when cycle irregularities require medical review.",
    sections: [
      {
        heading: "The Menstrual Cycle as a Health Vital Sign",
        body: "The menstrual cycle reflects a sensitive hormonal interplay involving the brain (hypothalamus and pituitary) and the ovaries. A typical menstrual cycle ranges from 21 to 35 days, with active bleeding lasting between 3 to 7 days."
      },
      {
        heading: "When to Seek Clinical Evaluation",
        body: "While slight cycle fluctuations of 2-3 days are normal due to travel, stress, or minor illness, the following patterns warrant medical review:",
        points: [
          "Bleeding that requires changing pads or tampons every 1–2 hours consecutively",
          "Passing blood clots larger than a coin or persistent prolonged bleeding past 8 days",
          "Cycles occurring less than 21 days apart or more than 35 days apart consistently",
          "Complete cessation of periods (amenorrhea) for three or more consecutive months",
          "Severe pain (dysmenorrhea) accompanied by nausea, dizziness, or vomiting"
        ]
      },
      {
        heading: "Approaching Diagnosis with Care",
        body: "Evaluation typically includes a detailed history, gentle clinical assessment, and targeted laboratory or ultrasound investigations to explore factors such as thyroid balance, PCOS, or uterine fibroids."
      }
    ]
  },
  {
    id: "pregnancy-care-basics",
    slug: "pregnancy-care-basics",
    title: "Pregnancy Care Fundamentals: Nurturing Health in the First Trimester",
    category: "Obstetrics",
    readTime: "5 min read",
    publishedDate: "October 2026",
    summary: "Essential guidance for the critical early weeks of pregnancy, focusing on nutrition, vitamins, and clinical checkups.",
    sections: [
      {
        heading: "The First Twelve Weeks",
        body: "The first trimester is a foundational window of rapid fetal organogenesis. Early clinical confirmation and individualized antenatal planning ensure both mother and developing baby receive optimal medical support from the start."
      },
      {
        heading: "Essential First-Trimester Priorities",
        body: "During early pregnancy, several clinical measures are universally recommended:",
        points: [
          "Folic acid supplementation (as prescribed by your doctor) to support neural tube development",
          "Early dating and viability ultrasound to confirm intrauterine pregnancy and gestational age",
          "Baseline maternal blood investigations, including complete blood count, blood typing, and thyroid profile",
          "Hydration and small, frequent nutritious meals to alleviate nausea and fatigue",
          "Avoiding unverified over-the-counter medications and herbal remedies without medical confirmation"
        ]
      },
      {
        heading: "When to Contact Your Obstetrician Promptly",
        body: "Any vaginal spotting, persistent sharp one-sided pelvic pain, severe unrelenting vomiting, or fever should be reported to your doctor immediately."
      }
    ]
  },
  {
    id: "preparing-for-consultation",
    slug: "preparing-for-first-consultation",
    title: "Preparing for Your Gynecological Consultation: A Patient's Guide",
    category: "Patient Resources",
    readTime: "3 min read",
    publishedDate: "October 2026",
    summary: "Simple steps to make your clinic visit calm, productive, and reassuring.",
    sections: [
      {
        heading: "Feeling at Ease",
        body: "It is entirely natural to feel slightly nervous before a gynecological visit. Knowing what to expect and having your health records organized helps ensure an unhurried, thorough consultation."
      },
      {
        heading: "What to Bring With You",
        body: "Having the following details readily available helps your physician provide the most accurate assessment:",
        points: [
          "The approximate start date of your last menstrual period (LMP)",
          "Any previous medical files, ultrasound images, Pap smear reports, or lab results",
          "A list of current prescription medicines, over-the-counter vitamins, and allergies",
          "A brief list of specific questions or concerns you would like to discuss"
        ]
      },
      {
        heading: "Comfort and Dignity First",
        body: "You are always in control of your examination. If an exam is recommended, the doctor will explain each step clearly beforehand and ensure maximum privacy."
      }
    ]
  }
];
