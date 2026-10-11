/**
 * Centralized Image Architecture for Dr. Anjali Kumari Practice
 * All visual assets are managed centrally to ensure zero broken images,
 * strict alt-text governance, and fast single-location replacement.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export const IMAGES = {
  branding: {
    logo: {
      src: '/images/branding/logo.svg',
      alt: 'Dr. Anjali Kumari, Gynecologist & Obstetrician Patna Brand Logo',
      title: 'Dr. Anjali Kumari Practice Logo',
    },
    logoMark: {
      src: '/images/branding/logo-mark.svg',
      alt: 'Asclepius and Maternal Care Medical Emblem',
      title: 'Dr. Anjali Kumari Medical Emblem',
    },
    favicon: {
      src: '/images/branding/favicon.svg',
      alt: 'Dr. Anjali Kumari Clinic Icon',
    },
  },
  doctor: {
    portrait: {
      src: '/images/doctor/anjali-kumari-portrait.jpg',
      alt: 'Dr. Anjali Kumari, Gynecologist and Obstetrician in Patna, Bihar',
      title: 'Dr. Anjali Kumari - Gynecologist & Obstetrician',
      aspectRatio: '3/4',
    },
  },
  clinic: {
    consultationRoom: {
      src: '/images/clinic/consultation-room.svg',
      alt: 'Private consultation suite of Dr. Anjali Kumari in Patna',
      title: 'Private Doctor Consultation Suite',
      aspectRatio: '16/9',
    },
    reception: {
      src: '/images/clinic/reception.svg',
      alt: 'Welcoming clinic reception and patient waiting lounge in Patna',
      title: 'Clinic Reception and Waiting Lounge',
      aspectRatio: '16/9',
    },
  },
  medical: {
    gynecology: {
      src: '/images/medical/gynecology-care.svg',
      alt: 'Gynecology consultation and clinical care in Patna',
      title: 'Comprehensive Gynecology Care',
      aspectRatio: '4/3',
    },
    pregnancy: {
      src: '/images/medical/pregnancy-care.svg',
      alt: 'Obstetrics and maternal pregnancy care in Patna',
      title: 'Obstetrics & Antenatal Healthcare',
      aspectRatio: '4/3',
    },
    womensHealth: {
      src: '/images/medical/womens-health.svg',
      alt: 'Preventive women\'s wellness and screening consultations',
      title: 'Preventive Women\'s Healthcare',
      aspectRatio: '4/3',
    },
  },
} as const;
