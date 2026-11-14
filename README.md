# NovaTech Solutions - Enterprise Technology Web Application

> **Academic Submission for React JS Web Application Coursework**  
> **Student Developer:** Okoye Chiemeka David  
> **Matriculation Number:** 25/sci01/085  
> **Department:** Computer Science  
> **Project Title:** NovaTech Solutions - Enterprise Cloud, AI & Cybersecurity Web Application  
> **Selected Business Type:** Technology Company Website  

---

## 1. Student & Project Identification
- **Full Name:** Okoye Chiemeka David
- **Matriculation Number:** 25/sci01/085
- **Department:** Computer Science
- **Project Title:** NovaTech Solutions - Enterprise Cloud, AI & Cybersecurity Web Application
- **React Project Type / Selected Business:** Technology Company Website
- **GitHub Username:** `david-okoye` *(or student's active GitHub profile)*
- **GitHub Repository URL:** `https://github.com/david-okoye/novatech-solutions`
- **Live Application URL:** `https://novatech-solutions.vercel.app` *(or Netlify / GitHub Pages)*
- **Hosting Platform Used:** Vercel / Netlify
- **Mobile & Desktop Tested:** Yes (fully responsive across mobile, tablet, and desktop screens)
- **Application Execution Status:** Yes (runs and builds cleanly with zero errors)

---

## 2. Project Overview & Business Description
**NovaTech Solutions Inc.** is a modern enterprise technology engineering company specializing in:
- **Cloud Infrastructure & Kubernetes DevOps**
- **Applied Generative AI & Large Language Models (LLMs)**
- **Zero-Trust Cybersecurity & Compliance Audits (SOC 2, ISO 27001)**
- **High-Velocity Full-Stack Web & Mobile Engineering**
- **Modern Data Lakehouses & Real-Time Event Streaming**
- **IoT & Intelligent Edge Computing**

The web application introduces the company, articulates its mission, vision, and history, showcases its service catalog with interactive search, filtering, and quote calculation, and enables prospective enterprise clients to submit technical inquiries with complete validation.

---

## 3. Project Structure & Organization

```
novatech-solutions/
├── public/
│   ├── novatech-logo.svg        # Scalable Vector Graphics brand logo
│   └── vite.svg
├── src/
│   ├── assets/                  # Brand and visual assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx       # Responsive navigation bar with theme and cart toggles
│   │   │   └── Footer.jsx       # Global footer with student credits and quick links
│   │   ├── home/
│   │   │   ├── Hero.jsx         # Hero banner with terminal preview and CTAs
│   │   │   ├── StatCounter.jsx  # Animated company statistics strip
│   │   │   ├── InteractiveDemo.jsx # Architecture & ROI Estimator (Interactive element)
│   │   │   └── Testimonials.jsx # Client testimonials with ratings and metrics
│   │   ├── about/
│   │   │   ├── MissionVision.jsx# Mission, vision, and core value cards
│   │   │   ├── CompanyHistory.jsx# Milestone timeline from 2018 to 2026
│   │   │   └── TeamCard.jsx     # Reusable team member cards (featuring developer)
│   │   ├── services/
│   │   │   ├── ServiceCard.jsx  # Reusable service card with badge, rating, features
│   │   │   ├── ServiceFilter.jsx# Real-time search input and category filter pills
│   │   │   ├── ServiceDetailModal.jsx # Full specifications and deliverables modal
│   │   │   └── QuoteDrawer.jsx  # Interactive Project Scope Cart / Quote estimator
│   │   └── contact/
│   │       ├── ContactInfo.jsx  # Corporate contact details with interactive copy buttons
│   │       └── ContactForm.jsx  # Controlled form with validation & success state
│   ├── context/
│   │   ├── ThemeContext.jsx     # Global Dark/Light theme state with LocalStorage
│   │   └── InquiryContext.jsx   # Project Scope Cart state with LocalStorage
│   ├── data/
│   │   ├── companyData.js       # Company info, milestones, team members, testimonials
│   │   └── servicesData.js      # 6 comprehensive enterprise tech services
│   ├── pages/
│   │   ├── HomePage.jsx         # Home page with hero, stats, interactive demo, preview
│   │   ├── AboutPage.jsx        # About page with history, mission, vision, and team
│   │   ├── ServicesPage.jsx     # Services catalog with search, filter, modal, drawer
│   │   ├── ContactPage.jsx      # Contact page with controlled form and technical FAQ
│   │   └── NotFoundPage.jsx     # 404 Route handling
│   ├── styles/
│   │   ├── index.css            # Global CSS variables, typography, reset, grid
│   │   ├── Navbar.css           # Glassmorphism navbar & mobile drawer
│   │   ├── Hero.css             # Hero layout, terminal mockup, stats
│   │   ├── About.css            # Mission cards, timeline, team layout
│   │   ├── Services.css         # Service cards, filter toolbar, modal, drawer
│   │   ├── Contact.css          # Contact channels, form inputs, validation
│   │   └── Footer.css           # Multi-column footer & student credits
│   ├── App.jsx                  # Main application routing and context providers
│   └── main.jsx                 # Vite application entry point
├── .gitignore                   # Git exclusion rules
├── index.html                   # HTML template with Google Fonts (Plus Jakarta Sans)
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite build configuration
└── README.md                    # Comprehensive documentation and submission report
```

---

## 4. Key React JS Concepts Implemented

### A. Component-Based Architecture & Functional Components
- Modular, single-responsibility components (`Navbar`, `Footer`, `Hero`, `ServiceCard`, `TeamCard`, `ContactForm`, `InteractiveDemo`).
- Proper component separation between layout, pages, contexts, and UI primitives.

### B. Props & Reusability
- `ServiceCard`: Accepts individual `service` objects and `onViewDetails` callbacks.
- `TeamCard`: Accepts `member` objects and renders dynamically.
- `ServiceFilter`: Accepts `categories`, `selectedCategory`, `searchQuery`, and event handlers.
- `ServiceDetailModal`: Accepts `service`, `isOpen`, and `onClose` props.

### C. JSX & JavaScript Expressions
- Clean semantic HTML structure using modern JSX.
- Dynamic conditional rendering (`&&`, ternary `? :`).
- Dynamic styling classes using template literals (e.g., `` `nav-link ${isActive ? "active" : ""}` ``).
- Inline calculations and formatting (e.g. `currency.toLocaleString()`).

### D. JavaScript Array Methods (`.map()`, `.filter()`, `.reduce()`, `.some()`)
- **`.map()`**: Used extensively to render:
  - Navigation links
  - Company stats
  - History milestone timeline
  - Core values
  - Team members and skill badges
  - Service catalog cards
  - Service deliverables and features
  - Technology stack pills
  - Testimonial cards
  - FAQ accordion items
- **`.filter()`**: Real-time filtering of services by selected category and search keywords.
- **`.reduce()`**: Calculates total estimated project scope budget from selected services.
- **`.some()`**: Checks if a specific service is present in the inquiry scope cart.

### E. React Hooks & State Management
- **`useState`**:
  - Controlled inputs for Contact form fields (`fullName`, `email`, `subject`, `message`, `serviceInterest`).
  - Active search query and category filters on the Services page.
  - Interactive ROI and Architecture Estimator state (`scale`, `workload`, `volume`).
  - Mobile navigation drawer toggle (`mobileMenuOpen`).
  - Modal open/close state (`activeModalService`).
  - FAQ accordion expanded state (`openFaq`).
  - Interactive clipboard feedback state (`copiedKey`).
- **`useEffect`**:
  - Dynamically updates the document title (`document.title`) on page navigation.
  - Automatically restores scroll position to the top of the window on route change.
  - Listens to window scroll events to apply blurred glassmorphism shadows to the navbar.
  - Synchronizes user theme preferences and selected project scope with `localStorage`.
- **`useContext`**:
  - `ThemeContext`: Provides dark and light mode toggle across the entire application.
  - `InquiryContext`: Manages global project scope cart items, allows adding/removing services from anywhere, and exposes real-time cost calculation and toast notifications.
- **`useMemo`**:
  - Memoizes filtered services calculation to optimize rendering performance during active typing.

### F. Event Handling
- `onClick`: Button actions (theme toggle, category filter, modal triggers, drawer toggles, scope cart addition, scroll to top).
- `onChange`: Controlled inputs for form fields, search bar, and volume range slider.
- `onBlur`: Real-time form validation trigger when an input loses focus.
- `onSubmit`: Intercepts form submission, validates required fields, prevents default page refresh, and triggers simulated asynchronous transmission.
- `onKeyDown`: Listens for `Escape` key press to automatically close modal dialogs.

### G. Form Handling & Validation
- **Controlled Components**: Every input is driven by React state (`formData`).
- **Validation Rules**:
  - Full Name: Required, minimum 2 characters.
  - Corporate Email: Required, verified against a strict RFC-compliant regex pattern (`/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i`).
  - Subject: Required, minimum 4 characters.
  - Message: Required, minimum 15 characters to ensure meaningful technical details.
- **User Feedback**:
  - Inline error messages appear under invalid fields on blur or submit.
  - Loading spinner indicator during submission dispatch.
  - Success banner with unique reference tracking ticket ID (e.g., `NT-839201`).
  - Reset button to allow submitting another inquiry cleanly.

### H. React Router (`react-router-dom` v6)
- Client-side routing without full page reloads.
- Active route highlighting via `NavLink`.
- Dynamic programmatic navigation via `useNavigate()`.
- State passing between routes (`useLocation`): clicking "Request Proposal" in the Project Scope drawer automatically redirects the user to the Contact page with pre-filled subject and detailed message!
- Catch-all 404 Route (`NotFoundPage`) for unrecognized URLs.

### I. CSS & Responsive Design
- Comprehensive CSS design system utilizing CSS Custom Properties (`--bg-primary`, `--accent-blue`, etc.).
- Dual-theme support (Dark Mode default with high-tech slate/blue aesthetics + Light Mode).
- Fully responsive layouts using **CSS Grid** (`grid-template-columns: repeat(3, 1fr)`) and **Flexbox**.
- Mobile-first media queries (`@media (max-width: 1024px)`, `@media (max-width: 768px)`, `@media (max-width: 500px)`).
- Defensive styling preventing horizontal overflow (`overflow-x: hidden`).

---

## 5. How to Run the Project Locally

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm or yarn

### Installation Steps
1. Open your terminal and navigate to the project directory:
   ```bash
   cd novatech-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. To generate a production build:
   ```bash
   npm run build
   ```

6. To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 6. How to Deploy to GitHub & Live Hosting

### A. Uploading to GitHub
```bash
git init
git add .
git commit -m "Initial commit: NovaTech Solutions React Web Application"
git branch -M main
git remote add origin https://github.com/david-okoye/novatech-solutions.git
git push -u origin main
```

### B. Deploying to Vercel (Recommended)
1. Sign in to [Vercel](https://vercel.com) with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import the `novatech-solutions` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your application will be live in ~30 seconds with a free `.vercel.app` domain.

### C. Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Set Build command: `npm run build` and Publish directory: `dist`.
5. Click **"Deploy site"**.

---

## 7. Submission Checklist Verification
- [x] Full Name, Matriculation Number, Department clearly stated.
- [x] Technology company theme chosen and fully realized.
- [x] Home Page with introduction, images, navigation, and interactive ROI estimator.
- [x] About Page with company background, timeline, mission/vision, and team cards.
- [x] Services Page with 6 detailed products/services, `.map()`, search, and filter.
- [x] Contact Page with complete info, controlled form, validation, and feedback.
- [x] React Router implemented for seamless page transitions.
- [x] Functional components, JSX, props, state, hooks (`useState`, `useEffect`, `useContext`).
- [x] Responsive CSS tested across mobile, tablet, and desktop devices.
- [x] Production build tested and verified (`npm run build` exits with code 0).
