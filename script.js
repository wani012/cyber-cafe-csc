/**
 * BHAT CYBER CAFE - Main Application Script
 * Clean English UI/UX | Dynamic Vacancy Renderer | Document Order Generator
 * Zero AI Emojis | Production-Grade Code Quality
 */

// ==========================================
// 1. CONFIGURATION
// ==========================================
const SHOP_CONFIG = {
  name: "BHAT CYBER CAFE",
  tagline: "Online Forms, CSC & Printing Solutions",
  associatedBusiness: "Bhat Computers & Stationary",
  whatsappNumber: "919419145664",
  displayPhone: "+91 94191 45664",
  address: "BHAT CYBER CAFE (Bhat Computers & Stationary), Near State Bank of India (SBI), Kishtwar, Jammu & Kashmir - 182204",
  mapUrl: "https://www.google.com/maps/place/Bhat+Computers+and+Stationary/@33.3145837,75.7634296,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391d0b18ed53913b:0x3e8cdea05a5c6052!8m2!3d33.3145792!4d75.7660045!16s%2Fg%2F11fpfn1vn9",
  openingHour: 8,  // 8:00 AM
  closingHour: 21, // 9:00 PM
  sundayOpening: 9,
  sundayClosing: 14 // 2:00 PM
};

// ==========================================
// 2. ACTIVE RECRUITMENT & VACANCIES DATA
// ==========================================
const VACANCIES_DATA = [
  {
    id: 1,
    name: "SSC CHSL (10+2) Recruitment 2026",
    department: "Staff Selection Commission (Govt. of India)",
    eligibility: "12th Standard Pass (Any Stream) • Age Limit: 18 - 27 Years",
    totalPosts: "3,712+ Vacancies (LDC, JSA, DEO)",
    lastDate: "28 Sep 2026",
    category: "central",
    status: "urgent",
    statusLabel: "Closing in 3 Days",
    documentsRequired: [
      "10th & 12th Marksheets / Passing Certificates",
      "Aadhaar Card (Original / Digital Copy)",
      "Recent Passport Size Photograph (White Background)",
      "Candidate Signature on clean unlined paper",
      "Category Certificate (OBC, SC, ST, EWS if applicable)"
    ]
  },
  {
    id: 2,
    name: "Railway RRB NTPC & Group D Recruitment",
    department: "Railway Recruitment Control Board (RRB)",
    eligibility: "10th Pass / 12th Pass / Bachelor's Degree • Age: 18 - 33 Years",
    totalPosts: "11,558+ Positions Across Zones",
    lastDate: "20 Oct 2026",
    category: "central",
    status: "active",
    statusLabel: "Active Registration",
    documentsRequired: [
      "10th Standard Marksheet (Date of Birth Proof)",
      "12th / Graduation Degree Certificate",
      "Aadhaar Card (Mobile Number Linked)",
      "Color Passport Size Photograph",
      "Candidate Signature & Left Thumb Impression",
      "Active Bank Account Details (Fee Refund)"
    ]
  },
  {
    id: 3,
    name: "State Police Constable & Sub-Inspector (SI)",
    department: "Police Recruitment & Promotion Board",
    eligibility: "10th / 12th Standard • Physical & Height Standards Apply",
    totalPosts: "4,200+ Constable & SI Posts",
    lastDate: "05 Oct 2026",
    category: "defense",
    status: "urgent",
    statusLabel: "Closing Soon",
    documentsRequired: [
      "10th & 12th Marks Statements & Certificates",
      "Permanent Resident Certificate (PRC / State Domicile)",
      "Aadhaar Card",
      "Recent Color Passport Photographs",
      "Reserved Category Certificate (if applicable)",
      "Character Verification / Ward Clearance"
    ]
  },
  {
    id: 4,
    name: "Indian Army Agniveer Rally Recruitment 2026",
    department: "Join Indian Army (Ministry of Defence)",
    eligibility: "8th / 10th / 12th Pass (Min. 45% Aggregate) • Age: 17.5 - 21 Years",
    totalPosts: "All India Zonal Recruitment Drives",
    lastDate: "15 Oct 2026",
    category: "defense",
    status: "active",
    statusLabel: "Registration Open",
    documentsRequired: [
      "Academic Marksheet (8th / 10th / 12th)",
      "Aadhaar Card (Linked with DigiLocker for OTP)",
      "State Domicile / Nativity Certificate",
      "Caste Certificate signed by Tehsildar",
      "Unmarried Certificate from Local Representative",
      "Recent Clear Passport Photographs (White BG)"
    ]
  },
  {
    id: 5,
    name: "NEET (UG) 2027 Medical Entrance Examination",
    department: "National Testing Agency (NTA)",
    eligibility: "12th Standard Passed or Appearing with Physics, Chemistry & Biology",
    totalPosts: "National MBBS, BDS & Allied Medical Admissions",
    lastDate: "25 Oct 2026",
    category: "entrance",
    status: "active",
    statusLabel: "Registration Open",
    documentsRequired: [
      "10th & 12th Standard Marksheet & Passing Certificate",
      "Aadhaar Card or Government Photo Identity",
      "Passport Size & Postcard Size (4x6) Photographs",
      "Signature in Running Handwriting",
      "Left & Right Hand Fingers and Thumb Impressions"
    ]
  },
  {
    id: 6,
    name: "State Subordinate Services (JKSSB / State PSC)",
    department: "General Administration & Revenue Services",
    eligibility: "Graduation in Any Stream / 12th Pass • State Domicile Mandatory",
    totalPosts: "1,850+ Junior Assistant & Executive Posts",
    lastDate: "30 Oct 2026",
    category: "state",
    status: "active",
    statusLabel: "Special Recruitment Drive",
    documentsRequired: [
      "Valid State Domicile Certificate",
      "10th, 12th & Graduation Degree / Marksheets",
      "Aadhaar Card",
      "Passport Size Photograph & Candidate Signature",
      "Category Certificate (RBA, SC, ST, OSC, EWS)"
    ]
  },
  {
    id: 7,
    name: "PM Yashasvi & National Scholarship Portal 2026",
    department: "Ministry of Social Justice & Empowerment",
    eligibility: "Students currently enrolled in Class 9, 10, 11, 12 or College",
    totalPosts: "Direct Benefit Transfer Financial Grant",
    lastDate: "30 Sep 2026",
    category: "scholarship",
    status: "urgent",
    statusLabel: "Closing in 5 Days",
    documentsRequired: [
      "Previous Academic Year Marksheet",
      "Aadhaar Card (Applicant & Guardian)",
      "Competent Authority Income Certificate",
      "Bank Passbook (Applicant's Aadhaar-seeded account)",
      "School / College Bonafide Certificate & Fee Receipt"
    ]
  },
  {
    id: 8,
    name: "IBPS Bank Clerk & Probationary Officer (PO-XV)",
    department: "Institute of Banking Personnel Selection",
    eligibility: "Bachelor's Degree in Any Discipline • Basic Computer Literacy",
    totalPosts: "6,128 Banking Vacancies Across Participating Banks",
    lastDate: "08 Oct 2026",
    category: "central",
    status: "active",
    statusLabel: "Active Registration",
    documentsRequired: [
      "Graduation Degree Marksheets & Provisional Certificate",
      "Aadhaar Card / PAN Card",
      "Passport Photograph (4.5cm x 3.5cm)",
      "Signature (Standard Case)",
      "Left Thumb Impression on Plain White Paper",
      "Official Handwritten Declaration Text"
    ]
  }
];

// ==========================================
// 3. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initShopStatus();
  initVacanciesList();
  initDocumentUploadForm();
  initNavigation();
  initFloatingWhatsApp();
});

// ==========================================
// 4. REAL-TIME OPERATING STATUS
// ==========================================
function initShopStatus() {
  const statusIndicator = document.getElementById("status-indicator");
  const statusText = document.getElementById("status-text");

  if (!statusIndicator || !statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  let isOpen = false;
  let scheduleMessage = "";

  if (day === 0) {
    // Sunday Schedule
    if (currentTimeDec >= SHOP_CONFIG.sundayOpening && currentTimeDec < SHOP_CONFIG.sundayClosing) {
      isOpen = true;
      scheduleMessage = "Open Today (Sunday): Closes at 2:00 PM";
    } else {
      scheduleMessage = "Closed Now: Opens Monday at 8:00 AM (WhatsApp Inquiries Accepted 24/7)";
    }
  } else {
    // Monday – Saturday Schedule
    if (currentTimeDec >= SHOP_CONFIG.openingHour && currentTimeDec < SHOP_CONFIG.closingHour) {
      isOpen = true;
      scheduleMessage = "Open Today: 8:00 AM – 9:00 PM";
    } else {
      scheduleMessage = "Closed Now: Opens Tomorrow at 8:00 AM (Send Documents via WhatsApp Anytime)";
    }
  }

  if (isOpen) {
    statusIndicator.style.backgroundColor = "var(--success)";
    statusIndicator.classList.add("pulse");
    statusText.textContent = scheduleMessage;
  } else {
    statusIndicator.style.backgroundColor = "var(--warning)";
    statusIndicator.classList.remove("pulse");
    statusText.textContent = scheduleMessage;
  }
}

// ==========================================
// 5. VACANCIES & REQUIRED DOCUMENTS RENDERER
// ==========================================
function initVacanciesList() {
  const container = document.getElementById("vacancies-list");
  const searchInput = document.getElementById("vacancy-search");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeCategory = "all";
  let searchQuery = "";

  function renderVacancies() {
    if (!container) return;

    const filtered = VACANCIES_DATA.filter(item => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const searchableContext = `${item.name} ${item.department} ${item.eligibility} ${item.documentsRequired.join(" ")}`.toLowerCase();
      const matchesSearch = searchableContext.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="background:var(--white); border-radius:12px; padding:3rem 1.5rem; text-align:center; border:1px solid var(--neutral-200);">
          <p style="font-size:1.05rem; color:var(--neutral-900); font-weight:700; margin-bottom:0.4rem;">
            No recruitment notices found matching "${escapeHtml(searchQuery)}"
          </p>
          <p style="color:var(--neutral-500); font-size:0.9rem; margin-bottom:1.5rem;">
            Need help with an unlisted exam or university registration? Contact our desk directly on WhatsApp.
          </p>
          <a href="https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=Hello%20BHAT%20CYBER%20CAFE,%20I%20would%20like%20to%20inquire%20about%20an%20unlisted%20recruitment%20form." target="_blank" class="btn btn-whatsapp-sm">
            Contact on WhatsApp
          </a>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      let badgeClass = "badge-active";
      if (item.status === "urgent") badgeClass = "badge-urgent";
      if (item.status === "upcoming") badgeClass = "badge-upcoming";

      const docPills = item.documentsRequired.map(doc => `
        <span class="doc-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(doc)}</span>
        </span>
      `).join("");

      // English WhatsApp formatted message
      const waMsg = encodeURIComponent(
        `*APPLICATION INQUIRY - ${SHOP_CONFIG.name}*\n\n` +
        `Hello BHAT CYBER CAFE,\n` +
        `I would like to apply for *${item.name}* (${item.department}).\n\n` +
        `Position Details:\n` +
        `- Eligibility: ${item.eligibility}\n` +
        `- Last Date: ${item.lastDate}\n\n` +
        `Required Documents Checklist:\n` +
        item.documentsRequired.map(d => `- ${d}`).join("\n") +
        `\n\nPlease confirm the registration charges, official fee, and verification process.`
      );
      const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${waMsg}`;

      return `
        <article class="vacancy-card" data-category="${item.category}">
          <!-- Top Row -->
          <div class="v-top-row">
            <div class="v-title-area">
              <span class="v-badge-category">${item.category.toUpperCase()} RECRUITMENT</span>
              <h3 class="v-title">${escapeHtml(item.name)}</h3>
              <span class="v-dept">${escapeHtml(item.department)} • <strong>${escapeHtml(item.totalPosts)}</strong></span>
            </div>
            <div class="v-dates-badges">
              <span class="last-date-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Deadline: ${escapeHtml(item.lastDate)}</span>
              </span>
              <span class="status-badge ${badgeClass}">${escapeHtml(item.statusLabel)}</span>
            </div>
          </div>

          <!-- Eligibility Bar -->
          <div class="v-info-bar">
            <div class="v-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              <span><strong>Eligibility Criteria:</strong> ${escapeHtml(item.eligibility)}</span>
            </div>
          </div>

          <!-- Mandatory Documents Box -->
          <div class="v-docs-section">
            <div class="v-docs-header">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Mandatory Documents Required for Application:</span>
            </div>
            <div class="v-docs-pills">
              ${docPills}
            </div>
          </div>

          <!-- Action Row -->
          <div class="v-action-row">
            <div class="v-shop-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Visit <strong>BHAT CYBER CAFE</strong> in Kishtwar or submit documents via WhatsApp.</span>
            </div>
            <div class="v-cta-buttons">
              <a href="#location" class="btn-visit-cafe">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                <span>View Center Location</span>
              </a>
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn-apply-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Send Documents on WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // Filter category buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderVacancies();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderVacancies();
    });
  }

  // Initial render
  renderVacancies();
}

// ==========================================
// 6. DOCUMENT UPLOAD & ORDER FORM
// ==========================================
function initDocumentUploadForm() {
  const form = document.getElementById("print-order-form");
  const fileInput = document.getElementById("file-input");
  const dropZone = document.getElementById("drop-zone");
  const previewBar = document.getElementById("file-preview-bar");
  const filenameEl = document.getElementById("preview-filename");
  const filesizeEl = document.getElementById("preview-filesize");
  const removeFileBtn = document.getElementById("remove-file-btn");

  let selectedFile = null;

  function handleFile(file) {
    if (!file) return;

    // Size limit: 25MB
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      showToast("File size exceeds 25 MB limit. Please select a smaller file.", "error");
      return;
    }

    selectedFile = file;
    filenameEl.textContent = file.name;
    filesizeEl.textContent = formatBytes(file.size);
    previewBar.classList.remove("hidden");
    dropZone.style.display = "none";
  }

  function clearFile() {
    selectedFile = null;
    if (fileInput) fileInput.value = "";
    previewBar.classList.add("hidden");
    dropZone.style.display = "block";
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });
  }

  if (removeFileBtn) {
    removeFileBtn.addEventListener("click", clearFile);
  }

  // Drag & drop handlers
  if (dropZone) {
    ["dragenter", "dragover"].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add("dragover");
      }, false);
    });

    ["dragleave", "drop"].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove("dragover");
      }, false);
    });

    dropZone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files[0]) {
        handleFile(files[0]);
      }
    });
  }

  // Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cust-name").value.trim();
      const phone = document.getElementById("cust-phone").value.trim();
      const service = document.getElementById("service-type").value;
      const notes = document.getElementById("cust-notes").value.trim();

      if (!name || !phone) {
        showToast("Please enter your full name and valid 10-digit phone number.", "warning");
        return;
      }

      // Format clean English WhatsApp order message
      let message = `*NEW ONLINE APPLICATION / PRINT REQUEST - ${SHOP_CONFIG.name}*\n\n`;
      message += `Applicant Name: ${name}\n`;
      message += `Contact Number: ${phone}\n`;
      message += `Requested Service: ${service}\n`;

      if (selectedFile) {
        message += `Attached Document: ${selectedFile.name} (${formatBytes(selectedFile.size)})\n`;
      } else {
        message += `Attached Document: (Transferring document directly via this chat)\n`;
      }

      if (notes) {
        message += `Additional Notes: ${notes}\n`;
      }

      message += `\nPlease verify portal fees, service charges, and estimated completion time.`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodedMsg}`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(message).catch(() => {});
      }

      showToast("Request formatted. Launching WhatsApp...", "success");

      setTimeout(() => {
        window.open(waUrl, "_blank");
        form.reset();
        clearFile();
      }, 700);
    });
  }
}

// ==========================================
// 7. NAVIGATION
// ==========================================
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// ==========================================
// 8. FLOATING WHATSAPP BUTTON & POPUP
// ==========================================
function initFloatingWhatsApp() {
  const popup = document.getElementById("whatsapp-popup");
  const closeBtn = document.getElementById("close-popup-btn");

  setTimeout(() => {
    if (popup) popup.classList.add("active");
  }, 3500);

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.classList.remove("active");
    });
  }
}

// ==========================================
// 9. UTILITIES
// ==========================================
function formatBytes(bytes, decimals = 1) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function escapeHtml(string) {
  const div = document.createElement("div");
  div.textContent = string;
  return div.innerHTML;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  let iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  if (type === "success") {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else if (type === "warning") {
    iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
  }

  toast.innerHTML = `<span class="toast-icon-svg">${iconSvg}</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}
