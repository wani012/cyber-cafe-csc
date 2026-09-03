# Digital Seva Kendra & Cyber Cafe - Single-Page Website

A modern, fast-loading, mobile-first single-page website built for Cyber Cafes and Common Service Centers (CSC Kendras).

---

## ✨ Features Included

1. **Hero Section**:
   - Prominent shop name and punchline: *"Online Forms, CSC & Printing Solutions"*
   - Government authorized CSC trust badges and live statistics
   - Instant **"Send on WhatsApp"** button and quick-action desk.

2. **4 Core Services Grid**:
   - 📘 **Online Exam & Job Forms** (SSC, NEET, Railway, Police, Admit cards)
   - 🏛️ **CSC & Gov Services** (PAN card, Aadhaar PVC & updates, Income/Caste/Domicile certificates)
   - 🖨️ **Printing & Photostat** (B/W & Color xerox, Lamination, Spiral Binding, Urgent Passport Photos)
   - 🎫 **Ticketing & Bill Payments** (IRCTC Train tickets, Flights, Electricity/Water bills, FASTag)
   - Direct WhatsApp inquiry button for each service.

3. **Live Updates Board ("Latest Forms & Last Dates")**:
   - Interactive search bar to filter exams by name or department.
   - Category filter pills (*All Vacancies*, *Central Govt*, *State Jobs*, *Admissions*, *Scholarships*).
   - Real-time status tags (`Closing Soon`, `Active`, `Notification Out`).
   - One-click **"Apply via Us"** button prefilling WhatsApp inquiry with the exact exam title.

4. **Document Upload / Order Section**:
   - Drag-and-drop file upload with live file name and size preview.
   - Print specification picker (Color / B&W, Single or Double-sided, number of copies, special notes).
   - Print rate list displayed prominently.
   - Generates formatted order summary and launches WhatsApp ready to send with the document attached.

5. **Footer & Location**:
   - Shop address, landmark, and daily operating hours.
   - Real-time **Open / Closed status indicator** dynamically calculated based on current time.
   - Embedded Google Map with a direct link to open the map app.
   - Floating WhatsApp button with notification bubble.
   - Mobile bottom navigation bar for quick access on smartphones.

---

## 🚀 How to Run

1. **Direct Launch**:
   - Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

2. **Using a Local Server (Recommended)**:
   ```bash
   cd "C:\Users\LEGION\.gemini\antigravity\scratch\cyber-cafe-csc"
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your web browser.

---

## ⚙️ Easy Customization Guide

All shop details and phone numbers are centralized at the top of [`script.js`](./script.js):

```javascript
const SHOP_CONFIG = {
  name: "Digital Seva Kendra & Cyber Cafe",
  whatsappNumber: "919419145664", // Enter your 10-digit number with country code (91)
  displayPhone: "+91 94191 45664",
  address: "BHAT CYBER CAFE (Bhat Computers & Stationary), Near State Bank of India (SBI), Kishtwar, Jammu & Kashmir",
  openingHour: 8,  // 8 AM
  closingHour: 21, // 9 PM
};
```

To add or modify vacancies on the **Notice Board**, simply edit the `VACANCIES_DATA` array in [`script.js`](./script.js).
