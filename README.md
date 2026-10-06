# Siang Royal School — Modern CBSE School Web Platform

An institutional, modern, accessible, and responsive CBSE school website platform engineered for **Siang Royal School**, located at Mirbuk Pekung, East Siang, Arunachal Pradesh - 791102.

Built using **HTML5, CSS3, JavaScript, and React 18**, strictly adhering to the **CBSE SARAS 7.0 Mandatory Public Disclosure (Circular No: 09/2021, Appendix-IX)** as the verified source of truth.

---

## 🏛️ School Verification Details (CBSE SARAS 7.0)

| Institutional Field | Verified Detail |
|---|---|
| **School Name** | Siang Royal School |
| **CBSE Affiliation No.** | **2230091** |
| **School Code** | **35089** |
| **Complete Address** | Mirbuk Pekung, East Siang, Arunachal Pradesh - 791102 |
| **Principal Name** | Ashish Pokhrel Chetr |
| **Principal Qualification** | MSc, B.Ed |
| **Official Email** | siangroyalschool@gmail.com |
| **Official Contact** | 7002857014 |
| **Total Campus Area** | **14,136.70 sq. meters** |
| **Number of Classrooms** | **19** (Standard size: 60 sq. m each) |
| **Number of Laboratories** | **6** (Standard size: 56 sq. m each) |
| **Internet Facility** | **Yes** (Active campus connectivity) |
| **Sanitation Facilities** | 5 Girls Toilets / 5 Boys Toilets |
| **Total Teaching Staff** | **23** (10 PGT, 6 TGT, 5 PRT) |
| **Teacher-Section Ratio** | **1 : 1.5** |
| **Special Educator** | Kumar Chetry |
| **Wellness & Counsellor** | Soihiam Phaomei |
| **SARAS Inspection Video** | [https://www.youtube.com/watch?v=wu6lETIMQhY](https://www.youtube.com/watch?v=wu6lETIMQhY) |

---

## 🚀 Architectural Design & Dual-Mode Structure

The website is engineered with a **dual architecture** giving you total flexibility:

1. **React 18 Single-Page Application (`index.html`)**:
   - Zero-build, instant execution directly in any web browser.
   - Client-side routing between all 11 pages with URL hash synchronization (`#home`, `#about`, `#academics`, `#admissions`, `#facilities`, `#faculty`, `#events`, `#gallery`, `#notices`, `#disclosure`, `#contact`).
   - Animated number counters for campus area (14,136.70 m²), classrooms (19), labs (6), and faculty (23).
   - Real-time search and category filtering for notices and events.
   - Interactive Lightbox with keyboard navigation (`Esc`, `←`, `→`).
   - Modal admission enquiry desk with client-side form validation.
   - Responsive YouTube inspection video embed (`wu6lETIMQhY`).

2. **Standalone Multi-Page Edition (`pages/*.html`)**:
   - Discrete, static HTML5 pages for search engine crawlers, static file servers, or legacy environments.
   - Powered by modular vanilla JavaScript engines (`js/main.js`, `js/navigation.js`, `js/gallery.js`, `js/notices.js`, `js/events.js`).

---

## 📁 Project Directory Structure

```text
siang-royal-school/
│
├── index.html                   # Master React 18 Application (all 11 pages)
├── package.json                 # Project manifest
├── README.md                    # Institutional documentation and deployment guide
│
├── pages/                       # Multi-page standalone HTML edition
│   ├── about.html               # Institutional identity, ethos & values
│   ├── academics.html           # CBSE curriculum framework & annual calendar
│   ├── admissions.html          # 5-step timeline, document checklist & FAQs
│   ├── faculty.html             # Verified SARAS faculty metrics & specialists
│   ├── facilities.html          # Campus specs, labs, sanitation & inspection video
│   ├── events.html              # School calendar, sports & cultural functions
│   ├── gallery.html             # Categorized photo gallery with lightbox
│   ├── notices.html             # Circulars board with live search & filters
│   ├── disclosure.html          # CBSE SARAS 7.0 Appendix-IX Mandatory Disclosure
│   └── contact.html             # Address, contact details & validated enquiry form
│
├── css/
│   ├── style.css                # Global design system, color tokens & components
│   ├── responsive.css           # Viewport engine (320px, 768px, 1024px, 1440px+)
│   └── animations.css           # Subtle educational animations & reduced-motion support
│
├── js/
│   ├── schoolData.js            # Central source-of-truth data store
│   ├── navigation.js            # Sticky navbar & mobile drawer engine
│   ├── main.js                  # IntersectionObserver counters & modal controls
│   ├── gallery.js               # Gallery category filters & lightbox engine
│   ├── notices.js               # Real-time search & notice category filtering
│   └── events.js                # Events category tabs & details modal
│
├── assets/
│   ├── logo/
│   │   ├── logo.svg             # Vector academic crest & affiliation seal
│   │   └── favicon.svg          # Crisp browser favicon
│   └── images/
│       ├── hero/
│       │   └── hero-campus.svg  # Campus architectural hero artwork
│       ├── faculty/
│       │   └── principal-placeholder.svg # Principal profile portrait artwork
│       ├── campus/
│       │   ├── campus-area.svg  # 14,136.70 sq. m campus grounds illustration
│       │   ├── classroom.svg    # 60 sq. m classroom infrastructure illustration
│       │   ├── laboratory.svg   # 56 sq. m science & computer lab illustration
│       │   ├── sanitation.svg   # Dedicated health & sanitation illustration
│       │   └── inspection-preview.svg # Video inspection preview card
│       └── gallery/             # High-res vector artwork for all gallery categories
│
└── docs/                        # Folder structure for physical PDF uploads
    ├── affiliation/
    ├── certificates/
    ├── academics/
    └── notices/
```

---

## 🎨 Global Design System

* **Primary Color**: `#0F2C59` (Deep Royal Educational Blue)
* **Secondary Color**: `#D4AF37` (Academic Warm Gold)
* **Accent Color**: `#1E6091` (Siang River Azure)
* **Background**: `#F8FAFC` (Clean Slate)
* **Surface**: `#FFFFFF` (Pure White)
* **Typography**:
  - Headings: `'Poppins', sans-serif`
  - Body: `'Inter', sans-serif`
  - Responsive clamp sizing: `clamp(2rem, 1.6rem + 2vw, 3.25rem)`

---

## 💡 How to Run the Website

### Option 1: Direct Browser Launch (No Server Needed)
Simply double-click `index.html` in your file manager or open it in any modern browser:
```text
file:///C:/Users/INU/.gemini/antigravity/scratch/siang-royal-school/index.html
```

### Option 2: Local HTTP Server
Using Python:
```bash
python -m http.server 8000
```
Or using Node.js / npx:
```bash
npx serve .
```
Then visit `http://localhost:8000` or `http://localhost:3000`.

---

## 📝 Placeholder & Customization Guide

As mandated by the SARAS 7.0 disclosure guidelines, all data is strictly non-fabricated. When updating real photographs or records:

1. **Photographs**: Replace SVG visuals in `assets/images/` with real photographic JPG/PNG/WebP assets.
2. **Documents & Certificates**: Upload verified PDFs to `docs/` and update URLs in `js/schoolData.js`.
3. **Board Examination Results**: Update `data.boardResults.classX` and `data.boardResults.classXII` in `js/schoolData.js` once official board percentages are published.
