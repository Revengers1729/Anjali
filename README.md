# DR. ANJALI KUMARI — GYNECOLOGIST & OBSTETRICIAN (PATNA, BIHAR)
## Premium Private Medical Practice Website & Technical SEO System

This codebase is a production-grade, highly trustworthy, high-performance medical practice website designed specifically for **Dr. Anjali Kumari**, Gynecologist & Obstetrician practicing in **Patna, Bihar, India**.

Built with an international healthcare aesthetic (deep navy, ivory linen, warm champagne gold, and muted rose), strict medical ethics compliance (zero fabricated claims, zero fake reviews, zero fake awards), and comprehensive Google Search & Google Images technical SEO.

---

## TABLE OF CONTENTS
1. [What You Have To Do (Immediate Owner Action Checklist)](#1-what-you-have-to-do-immediate-owner-action-checklist)
2. [Image Replacement & Centralized Assets](#2-image-replacement--centralized-assets)
3. [Connecting Your Custom Domain](#3-connecting-your-custom-domain)
4. [Google Search Console Verification & Sitemap Submission](#4-google-search-console-verification--sitemap-submission)
5. [Google Business Profile Setup (Patna Local SEO)](#5-google-business-profile-setup-patna-local-seo)
6. [Requesting Indexation on Google](#6-requesting-indexation-on-google)
7. [Ongoing SEO Maintenance & Integrity](#7-ongoing-seo-maintenance--integrity)
8. [Codebase Architecture & File Structure](#8-codebase-architecture--file-structure)

---

## 1. WHAT YOU HAVE TO DO (IMMEDIATE OWNER ACTION CHECKLIST)

As the practice owner or clinic administrator, here is your exact checklist to transition this site from preview to live public practice:

### A. Personalize Clinic Information (Takes 5 minutes)
Open `src/data/doctorData.ts` and update the verified fields:
1. **`clinicPhone`**: Replace `+91 94310 00000` with your clinic landline or official reception mobile number.
2. **`whatsappNumber`**: Replace `919431000000` with your clinic's WhatsApp number (in international format without `+`, e.g. `919835012345`).
3. **`clinicAddress`**: Enter your exact street, building, clinic room/floor, and prominent Patna landmark (e.g. Boring Road / Bailey Road / Exhibition Road / Kankarbagh).
4. **`consultationHours`**: Adjust your days and morning/evening OPD timings (e.g. `10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM`).
5. **Medical Registration**: If you wish to display your State Medical Council or National Medical Commission registration number, add it to `doctorData.ts`.

### B. Replace or Retain Portrait & Clinic Photography
The website currently includes custom vector artwork and SVG portraits of Dr. Anjali Kumari and clinic facilities.
If you have official high-resolution studio photographs of Dr. Anjali Kumari and the clinic, simply place them into:
- `/public/images/doctor/anjali-kumari-portrait.webp`
- `/public/images/clinic/consultation-room.webp`
- `/public/images/clinic/reception.webp`

See [Section 2](#2-image-replacement--centralized-assets) for exact dimensions.

### C. Connect Domain & Launch
Follow [Section 3](#3-connecting-your-custom-domain) to point your domain (e.g., `dranjalikumari.in`) to your hosting.

---

## 2. IMAGE REPLACEMENT & CENTRALIZED ASSETS

All visual assets in this application are governed centrally in `src/lib/images.ts` and located in `/public/images/`.

### Directory Layout
```
public/
  images/
    branding/
      logo.svg                  <-- Full brand logo with typography
      logo-mark.svg             <-- Asclepius & maternal care emblem
      favicon.svg               <-- Browser favicon & Google Search favicon
    doctor/
      anjali-kumari-portrait.svg <-- Main doctor portrait (3:4 aspect ratio)
    clinic/
      consultation-room.svg     <-- Doctor's private consultation suite (16:9)
      reception.svg             <-- Reception & waiting lounge (16:9)
    medical/
      gynecology-care.svg       <-- Gynecology consultation visual (4:3)
      pregnancy-care.svg        <-- Obstetrics & antenatal visual (4:3)
      womens-health.svg         <-- Preventive health visual (4:3)
```

### How to Replace Images:
1. Export your photograph as modern **WebP** or **JPEG**.
2. Save it in the designated folder (e.g. `public/images/doctor/anjali-kumari-portrait.webp`).
3. Open `src/lib/images.ts` and update the `src` path:
   ```ts
   portrait: {
     src: '/images/doctor/anjali-kumari-portrait.webp',
     alt: 'Dr. Anjali Kumari, Gynecologist and Obstetrician in Patna, Bihar',
     title: 'Dr. Anjali Kumari - Gynecologist & Obstetrician',
     aspectRatio: '3/4',
   }
   ```
4. Never change images in multiple places—updating `images.ts` automatically updates all pages.

---

## 3. CONNECTING YOUR CUSTOM DOMAIN

Recommended domain names for local authority:
- `www.dranjalikumari.in` (Best for India)
- `www.dranjalikumari.com`
- `www.dranjalipatanagynae.com`

### DNS Setup Steps:
1. Purchase the domain from an accredited registrar (e.g., Google Domains/Squarespace, Namecheap, or GoDaddy).
2. In your hosting platform (Cloud Run, Vercel, Netlify, or VPS):
   - Add your custom domain.
3. In your registrar DNS Manager, add:
   - **Type**: `A`, **Name**: `@`, **Value**: Your hosting IP address.
   - **Type**: `CNAME`, **Name**: `www`, **Value**: Your hosting domain or app URL.
4. SSL/TLS is provisioned automatically. Once active, your site will serve securely via `https://`.

---

## 4. GOOGLE SEARCH CONSOLE VERIFICATION & SITEMAP SUBMISSION

To establish your presence for searches like `Dr Anjali Kumari Patna`, `Dr Anjali Kumari Gynecologist`, and `Gynecologist in Patna`:

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Sign in with your clinic Google Account.
3. Click **Add Property** and enter your domain (e.g., `dranjalikumari.in`).
4. Choose **DNS verification**:
   - Copy the `TXT` record provided by Google.
   - Paste it into your DNS settings at your domain registrar.
   - Click **Verify**.
5. Once verified, navigate to **Sitemaps** in the left menu:
   - In the "Add a new sitemap" box, type: `sitemap.xml` and click **Submit**.
   - Type: `image-sitemap.xml` and click **Submit**.
6. Google will report "Success" and begin crawling your pages and images.

---

## 5. GOOGLE BUSINESS PROFILE SETUP (PATNA LOCAL SEO)

For local patients in Patna searching on mobile Google and Google Maps, your Google Business Profile is critical:

1. Visit [Google Business Profile](https://www.google.com/business).
2. Enter your business name: **Dr. Anjali Kumari - Gynecologist & Obstetrician**.
3. Categories:
   - Primary: **Gynecologist-Obstetrician**
   - Secondary: **Women's Health Clinic**
4. Address: Match the exact address used in `src/data/doctorData.ts`.
5. Service Area: Patna, Bihar.
6. Phone: Match your verified clinic mobile/landline.
7. Website: Add `https://dranjalikumari.in`.
8. Complete verification (video recording of your clinic board/prescription pad, or postcard).
9. Upload high quality photos of the clinic exterior, reception, and doctor's room.

---

## 6. REQUESTING INDEXATION ON GOOGLE

Once your site is live:
1. In Google Search Console, click on the **URL Inspection** search bar at the very top.
2. Enter your homepage: `https://dranjalikumari.in/`.
3. Click **Test Live URL**.
4. Once the live test passes, click **Request Indexing**.
5. Repeat for:
   - `https://dranjalikumari.in/about`
   - `https://dranjalikumari.in/gynecology`
   - `https://dranjalikumari.in/obstetrics`
   - `https://dranjalikumari.in/pregnancy-care`
   - `https://dranjalikumari.in/location`
   - `https://dranjalikumari.in/patient-information`

Google typically indexes within 24 to 72 hours.

---

## 7. ONGOING SEO MAINTENANCE & INTEGRITY

- **NAP Consistency**: Ensure your Name (Dr. Anjali Kumari), Address (Patna, Bihar), and Phone number match identically on your website, Google Maps, Practo, and medical directories.
- **Genuine Patient Reviews**: Encourage satisfied patients to leave an honest review on your official Google Business Profile. Never buy or fabricate reviews.
- **Educational Content Updates**: Periodically add new patient education guides or maternal care tips in `src/data/articlesData.ts`.
- **Disclaimer Enforcement**: Maintain the statutory disclaimer that online content is educational and does not constitute individual medical prescription without clinical examination.

---

## 8. CODEBASE ARCHITECTURE & FILE STRUCTURE

```
dr-anjali-kumari/
├── public/
│   ├── images/
│   │   ├── branding/ (logo.svg, logo-mark.svg, favicon.svg)
│   │   ├── clinic/   (consultation-room.svg, reception.svg)
│   │   ├── doctor/   (anjali-kumari-portrait.svg)
│   │   └── medical/  (gynecology-care.svg, pregnancy-care.svg, womens-health.svg)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── image-sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── AppointmentModal.tsx (Validated booking, WhatsApp dispatch & .ics calendar)
│   │   ├── ClinicGallery.tsx    (Lightbox gallery with keyboard navigation)
│   │   ├── EcgWaveform.tsx      (Subtle heartbeat pulse SVG animation)
│   │   ├── Footer.tsx           (Ethical disclaimer, navigation & legal modals)
│   │   ├── Header.tsx           (Strict 3-zone contract, mobile drawer navigation)
│   │   ├── HeroVisual.tsx       (Doctor portrait with orbital rings & medical geometry)
│   │   └── OwnerSetupGuide.tsx  (In-app interactive checklist for the doctor)
│   ├── data/
│   │   ├── doctorData.ts        (Verified practice details & philosophy)
│   │   ├── articlesData.ts      (Medically responsible patient guides)
│   │   └── specialtiesData.ts   (Gynecology, Obstetrics & pregnancy care scopes)
│   ├── lib/
│   │   ├── images.ts            (Centralized image architecture)
│   │   └── seo.ts               (Dynamic Schema.org JSON-LD & meta tag manager)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SpecialtiesPage.tsx
│   │   ├── PatientInfoPage.tsx
│   │   ├── LocationPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── BookingPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── metadata.json
├── package.json
└── README.md
```
