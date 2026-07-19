# 🏥 LifeCare Clinic

A modern, responsive healthcare clinic website built with React — designed to demonstrate clean UI, reusable component architecture, and smooth animations for a real-world style multi-page application.

🔗 **Live Demo:** [mridul-lifecare-clinic.netlify.app](https://mridul-lifecare-clinic.netlify.app)  
📦 **Repository:** [github.com/mridul2172/lifecare-clinic](https://github.com/mridul2172/lifecare-clinic)

---

## 📸 Overview

LifeCare Clinic is a fictional healthcare clinic website built as a practice/portfolio project. It showcases a full multi-page site — from a landing page with animated sections to a fully validated appointment booking form — built with a premium, glassmorphism-inspired design system in light blue, navy, and white.

---

## ✨ Features

- **11 fully built pages** — Home, About, Services, Doctors, Book Appointment, Gallery, Testimonials, Contact, Privacy Policy, Terms & Conditions, and a custom 404 page
- **Sticky glassmorphism navbar** with a responsive mobile menu
- **Dark / Light mode** toggle, persisted with `localStorage`
- **Appointment booking form** with real-time client-side validation
- **Interactive FAQ accordion** with smooth expand/collapse animation
- **Animated statistics, testimonials, and service cards**
- **WhatsApp floating button** and **scroll-to-top button**
- **Google Maps integration** on the contact section
- **Custom loading screen** on initial site load
- **SEO meta tags** on every page using `react-helmet-async`
- **Smooth page transitions** and scroll-triggered reveal animations
- **Fully responsive**, mobile-first layout across all breakpoints

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | React (Vite) |
| Routing | React Router DOM |
| Styling | SCSS Modules |
| Animation | Framer Motion |
| Icons | Lucide React |
| SEO | React Helmet Async |
| Deployment | Netlify |

---

## 📂 Project Structure
src/
├── assets/          # Images and static assets
├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
├── pages/            # Route-level page components
├── routes/           # App routing configuration
├── data/              # Static content (services, doctors, testimonials, FAQ)
├── hooks/             # Custom React hooks (theme, scroll-to-top)
└── styles/            # Global SCSS and design tokens

---

## 🚀 Getting Started

Clone the repository and run it locally:

```bash
git clone https://github.com/mridul2172/lifecare-clinic.git
cd lifecare-clinic
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary (Sky Blue) | `#0EA5E9` |
| Navy | `#0F172A` |
| Background | `#FFFFFF` |
| Border Radius | `16px` |
| Typography | Sora (headings), Plus Jakarta Sans (body) |

---

## 📝 Note

This project was built for learning and portfolio purposes. Forms and contact details are not connected to a live backend — form submissions are validated client-side only and are not sent or stored anywhere.

---

## 👤 Author

**Mridul Tiwari**  
GitHub: [@mridul2172](https://github.com/mridul2172)