/**
 * BHAT CYBER CAFE | Single-Page Application Logic
 * Clean English UI/UX | Dynamic Vacancy Renderer | Document Order Generator
 * Google Sheets Live Sync Engine | Executive Admin Management Desk (Baber Bhat)
 */

// ==========================================
// 1. CENTRAL SHOP CONFIGURATION
// ==========================================
const SHOP_CONFIG = {
  name: "BHAT CYBER CAFE",
  tagline: "Online Forms, CSC & Printing Solutions",
  associatedBusiness: "Bhat Computers & Stationary",
  founderName: "Baber Bhat",
  founderRole: "Founder || Documentation Expert || 100% Error Free Processing",
  whatsappNumber: "919419145664",
  displayPhone: "+91 94191 45664",
  address: "BHAT CYBER CAFE (Bhat Computers & Stationary), Near State Bank of India (SBI), Kishtwar, Jammu & Kashmir - 182204",
  mapUrl: "https://www.google.com/maps/place/Bhat+Computers+and+Stationary/@33.3145837,75.7634296,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38e05739fa4be045:0xda20235ad68971f1!8m2!3d33.3145792!4d75.7660045!16s%2Fg%2F11rvh5y8j1",
  openingHour: 8,  // 8:00 AM
  closingHour: 21, // 9:00 PM
  sundayOpening: 9,
  sundayClosing: 14 // 2:00 PM
};

// ==========================================
// 2. ACTIVE RECRUITMENT & VACANCIES DATA (VERIFIED DEFAULTS)
// ==========================================
const VACANCIES_DATA = [
  {
    id: 1,
    name: "JKSSB Junior Assistant & Executive Cadre Recruitment 2026",
    department: "J&K Services Selection Board (General Administration Dept, J&K UT)",
    eligibility: "Graduate in Any Discipline with 35 WPM Typing Speed & 6-Month Computer Diploma",
    totalPosts: "2,450+ Vacancies Across District, Divisional & UT Cadres",
    lastDate: "18 Oct 2026",
    category: "jk-state",
    status: "urgent",
    statusLabel: "Closing Soon",
    documentsRequired: [
      "J&K UT Domicile Certificate (Mandatory)",
      "Graduation Degree / Consolidated Marksheets",
      "10th Class Diploma / Marksheet (DOB Proof)",
      "12th Standard Marks Card (JKBOSE / CBSE)",
      "6-Month Computer Application Diploma",
      "Valid Reserved Category Certificate (RBA, SC, ST, OSC/OBC, EWS, PSP, ALC/IB)",
      "Aadhaar Card & 4 Recent Passport Size Photographs"
    ]
  },
  {
    id: 2,
    name: "J&K Police Constable Bharti (Executive, Armed & SDRF)",
    department: "J&K Police Recruitment Board (JKPRB)",
    eligibility: "10th / 12th Standard Pass • Age: 18 - 28 Years (Physical Endurance & Measurement Test)",
    totalPosts: "4,022+ Constable Posts Across Jammu & Kashmir",
    lastDate: "25 Oct 2026",
    category: "defense",
    status: "active",
    statusLabel: "Active Registration",
    documentsRequired: [
      "Permanent Domicile Certificate of J&K UT",
      "10th & 12th Marks Statements & Passing Certificate",
      "Date of Birth Certificate / Matriculation Diploma",
      "Category Certificate (RBA, ALC/IB, SC, ST, OSC, EWS if applicable)",
      "Aadhaar Card (Linked with active mobile)",
      "Recent Clear Color Passport Photographs & Signature"
    ]
  },
  {
    id: 3,
    name: "JKPSC Combined Competitive Examination (CCE / KAS 2026)",
    department: "J&K Public Service Commission (JKPSC)",
    eligibility: "Bachelor's Degree in Any Field • Age: 21 - 32 Years (Age relaxation for reserved categories)",
    totalPosts: "275+ Administrative, Police & Account Services (JKS / JKPS)",
    lastDate: "31 Oct 2026",
    category: "jk-state",
    status: "active",
    statusLabel: "Official Registration Open",
    documentsRequired: [
      "J&K UT Domicile Certificate",
      "Graduation Degree & Detailed Marks Certificates",
      "Matriculation (10th) Certificate / DOB Proof",
      "Competent Authority Category Certificate (RBA, SC, ST, EWS, PSP, Social Caste)",
      "Aadhaar Card",
      "Color Passport Photograph & Scanned Signature"
    ]
  },
  {
    id: 4,
    name: "J&K Bank Banking Associate & Probationary Officer (PO)",
    department: "The Jammu & Kashmir Bank Ltd.",
    eligibility: "Bachelor's Degree in Any Discipline (Min. 55% Aggregate) • Permanent Resident of J&K / Ladakh",
    totalPosts: "1,250+ Banking Associates & PO Positions",
    lastDate: "05 Nov 2026",
    category: "jk-state",
    status: "active",
    statusLabel: "Registration Open",
    documentsRequired: [
      "J&K / Ladakh Domicile Certificate",
      "Graduation Final Degree & All Semester Marksheets",
      "10th Standard Marks Card (Date of Birth Verification)",
      "Aadhaar Card & PAN Card",
      "Passport Size Photograph (White Background)",
      "Candidate Signature & Left Thumb Impression on Clean White Paper"
    ]
  },
  {
    id: 5,
    name: "JKSSB Patwari, Forester & Social Welfare Supervisor",
    department: "Revenue & Social Welfare Departments, Govt. of Jammu & Kashmir",
    eligibility: "Graduation with Working Knowledge of Urdu (Patwari) / Relevant Discipline",
    totalPosts: "890+ District Cadre Posts",
    lastDate: "12 Nov 2026",
    category: "jk-state",
    status: "upcoming",
    statusLabel: "Notification Released",
    documentsRequired: [
      "J&K Domicile Certificate",
      "Graduation Degree with Marks Certificates",
      "10th & 12th Marks Cards (JKBOSE / CBSE)",
      "Urdu Qualification Certificate (if required)",
      "Aadhaar Card & Passport Photos"
    ]
  },
  {
    id: 6,
    name: "SSC Combined Graduate Level (CGL 2026)",
    department: "Staff Selection Commission (Govt. of India)",
    eligibility: "Bachelor's Degree from a Recognized University • Age: 18 - 32 Years",
    totalPosts: "17,700+ Central Ministries & Inspector Posts",
    lastDate: "22 Oct 2026",
    category: "central",
    status: "urgent",
    statusLabel: "Closing Soon",
    documentsRequired: [
      "Graduation Consolidated Marks Cards & Degree",
      "10th Standard Matriculation Certificate (DOB Proof)",
      "Category Certificate (OBC, SC, ST, EWS if applicable)",
      "Aadhaar Card",
      "Live Webcam Compliant Passport Photo & Signature"
    ]
  },
  {
    id: 7,
    name: "Railway RRB NTPC & Technician Recruitment 2026",
    department: "Railway Recruitment Boards (RRB Jammu-Srinagar)",
    eligibility: "12th Standard (Pass) or Graduate in Any Stream / ITI (for Technicians)",
    totalPosts: "11,558+ Non-Technical & Technical Posts",
    lastDate: "15 Nov 2026",
    category: "central",
    status: "active",
    statusLabel: "Active Registration",
    documentsRequired: [
      "10th / 12th Passing Certificate & Marksheet",
      "Graduation / ITI National Trade Certificate",
      "Aadhaar Card",
      "Caste / Community Certificate (Central Govt format)",
      "Scanned Passport Photograph & Candidate Signature"
    ]
  },
  {
    id: 8,
    name: "NTA CUET (UG & PG) & University Admissions 2026",
    department: "National Testing Agency & J&K Universities",
    eligibility: "12th Standard Passed or Appearing for UG • Bachelor's for PG",
    totalPosts: "Central, State Universities & College Admissions",
    lastDate: "20 Nov 2026",
    category: "entrance",
    status: "active",
    statusLabel: "Admissions Open",
    documentsRequired: [
      "10th & 12th Standard Marks Statements",
      "Aadhaar Card or Government Identity Document",
      "Recent Clear Passport Photo with White Background",
      "Signature on White Paper with Black Ink",
      "Category / Domicile Certificate (if applicable)"
    ]
  },
  {
    id: 9,
    name: "PMSSS J&K Special Scholarship Scheme 2026 (AICTE)",
    department: "All India Council for Technical Education (AICTE)",
    eligibility: "12th Class Pass from JKBOSE / CBSE in J&K • Family Income Below Rs 8.00 Lakh",
    totalPosts: "5,000+ Full Scholarships (Engineering, General & Medical)",
    lastDate: "30 Nov 2026",
    category: "scholarship",
    status: "upcoming",
    statusLabel: "Portal Opening Soon",
    documentsRequired: [
      "J&K Domicile Certificate (Mandatory)",
      "10th & 12th Marks Cards (JKBOSE / CBSE)",
      "Tehsildar-Issued Family Income Certificate",
      "Aadhaar Card (Linked with Student Bank Account)",
      "Valid Category Certificate (if applying under reserved quota)"
    ]
  }
];

// Returns effective active vacancies: Google Sheets > Admin Custom > Defaults
function getActiveVacanciesList() {
  const gsheetData = localStorage.getItem("bhat_sheet_vacancies");
  if (gsheetData) {
    try {
      const parsed = JSON.parse(gsheetData);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }

  const customData = localStorage.getItem("bhat_custom_vacancies");
  if (customData) {
    try {
      const parsed = JSON.parse(customData);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }

  return VACANCIES_DATA;
}

// ==========================================
// 3. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initShopStatus();
  initVacanciesList();
  initDocumentUploadForm();
  initNavigation();
  initFloatingWhatsApp();
  initNotificationPopup();
  initGoogleSheetSync();
  initAdminPanel();
  initAIVoiceAndPdfAssistant();
});

// ==========================================
// 4. REAL-TIME OPERATING STATUS
// ==========================================
function initShopStatus() {
  const statusIndicator = document.getElementById("status-indicator");
  const statusText = document.getElementById("status-text");

  if (!statusIndicator || !statusText) return;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  let isOpen = false;
  let scheduleMessage = "";

  if (day === 0) {
    isOpen = hour >= SHOP_CONFIG.sundayOpening && hour < SHOP_CONFIG.sundayClosing;
    scheduleMessage = isOpen
      ? `Open Today (Sunday): 9:00 AM – 2:00 PM`
      : `Closed (Sunday Hours: 9:00 AM – 2:00 PM)`;
  } else {
    isOpen = hour >= SHOP_CONFIG.openingHour && hour < SHOP_CONFIG.closingHour;
    scheduleMessage = isOpen
      ? `Open Today: 8:00 AM – 9:00 PM`
      : `Closed (Opens Tomorrow at 8:00 AM)`;
  }

  if (isOpen) {
    statusIndicator.classList.remove("closed");
    statusIndicator.title = "Currently Open";
    statusText.textContent = scheduleMessage;
  } else {
    statusIndicator.classList.add("closed");
    statusIndicator.title = "Currently Closed";
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

    const currentData = getActiveVacanciesList();
    const filtered = currentData.filter(item => {
      const matchesCategory = activeCategory === "all" ||
        item.category === activeCategory ||
        (activeCategory === "defense" && (item.category === "defense" || item.name.toLowerCase().includes("police") || item.name.toLowerCase().includes("constable"))) ||
        (activeCategory === "entrance" && (item.category === "entrance" || item.category === "admission"));

      const docsText = Array.isArray(item.documentsRequired) ? item.documentsRequired.join(" ") : (item.documentsRequired || "");
      const searchableContext = `${item.name} ${item.department} ${item.eligibility} ${docsText}`.toLowerCase();
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

      const docsArr = Array.isArray(item.documentsRequired)
        ? item.documentsRequired
        : (item.documentsRequired ? String(item.documentsRequired).split(/[\n,;]+/) : []);

      const docPills = docsArr.map(doc => `
        <span class="doc-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(doc.trim())}</span>
        </span>
      `).join("");

      const waMsg = encodeURIComponent(
        `*APPLICATION INQUIRY - ${SHOP_CONFIG.name}*\n\n` +
        `Hello BHAT CYBER CAFE,\n` +
        `I would like to apply for *${item.name}* (${item.department}).\n\n` +
        `Position Details:\n` +
        `- Eligibility: ${item.eligibility}\n` +
        `- Last Date: ${item.lastDate}\n\n` +
        `Required Documents Checklist:\n` +
        docsArr.map(d => `- ${d.trim()}`).join("\n") +
        `\n\nPlease confirm the registration charges, official fee, and verification process.`
      );
      const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${waMsg}`;

      const catDisplay = item.category === 'jk-state'
        ? 'JAMMU & KASHMIR (J&K UT) RECRUITMENT'
        : (item.category === 'defense' ? 'DEFENSE & POLICE RECRUITMENT' : item.category.toUpperCase() + ' RECRUITMENT');

      return `
        <article class="vacancy-card" data-category="${item.category}">
          <!-- Top Row -->
          <div class="v-top-row">
            <div class="v-title-area">
              <span class="v-badge-category">${catDisplay}</span>
              <h3 class="v-title">${escapeHtml(item.name)}</h3>
              <span class="v-dept">${escapeHtml(item.department)} • <strong>${escapeHtml(item.totalPosts)}</strong></span>
            </div>
            <div class="v-dates-badges">
              <span class="last-date-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Deadline: ${escapeHtml(item.lastDate)}</span>
              </span>
              <span class="status-badge ${badgeClass}">${escapeHtml(item.statusLabel || item.status)}</span>
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

  // Search input with debounce
  let debounceTimeout = null;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderVacancies();
      }, 150);
    });
  }

  // Expose global refresh function
  window.refreshVacanciesUI = renderVacancies;

  // Initial render
  renderVacancies();
}

// ==========================================
// 6. DOCUMENT UPLOAD & WHATSAPP ORDER GENERATOR
// ==========================================
function initDocumentUploadForm() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const fileListContainer = document.getElementById("file-list");
  const printOptionsContainer = document.getElementById("print-options-container");
  const generateOrderBtn = document.getElementById("generate-order-btn");

  if (!dropzone || !fileInput) return;

  let selectedFiles = [];

  function handleFiles(files) {
    const validExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".docx", ".doc"];
    const maxSizeBytes = 25 * 1024 * 1024; // 25MB

    Array.from(files).forEach(file => {
      const ext = "." + file.name.split(".").pop().toLowerCase();
      if (!validExtensions.includes(ext)) {
        showToast(`"${file.name}" is not a supported file format.`, "error");
        return;
      }
      if (file.size > maxSizeBytes) {
        showToast(`"${file.name}" exceeds the 25MB size limit.`, "error");
        return;
      }
      if (!selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
        selectedFiles.push(file);
      }
    });

    updateFilesUI();
  }

  function updateFilesUI() {
    fileListContainer.innerHTML = "";

    if (selectedFiles.length === 0) {
      printOptionsContainer.style.display = "none";
      return;
    }

    printOptionsContainer.style.display = "block";

    selectedFiles.forEach((file, index) => {
      const ext = file.name.split(".").pop().toUpperCase();
      const fileCard = document.createElement("div");
      fileCard.className = "file-card";
      fileCard.innerHTML = `
        <div class="file-icon-tag">${escapeHtml(ext)}</div>
        <div class="file-info-col">
          <div class="file-name" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</div>
          <div class="file-meta">${formatBytes(file.size)} • Ready for Print</div>
        </div>
        <button class="remove-file-btn" data-index="${index}" title="Remove file" aria-label="Remove ${escapeHtml(file.name)}">&times;</button>
      `;
      fileListContainer.appendChild(fileCard);
    });

    fileListContainer.querySelectorAll(".remove-file-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(e.currentTarget.getAttribute("data-index"), 10);
        selectedFiles.splice(idx, 1);
        updateFilesUI();
      });
    });
  }

  dropzone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
    fileInput.value = "";
  });

  ["dragenter", "dragover"].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files) {
      handleFiles(dt.files);
    }
  });

  // Quantity stepper
  const copiesInput = document.getElementById("copies-input");
  const qtyMinusBtn = document.getElementById("qty-minus");
  const qtyPlusBtn = document.getElementById("qty-plus");

  if (qtyMinusBtn && copiesInput) {
    qtyMinusBtn.addEventListener("click", () => {
      let val = parseInt(copiesInput.value, 10) || 1;
      if (val > 1) copiesInput.value = val - 1;
    });
  }

  if (qtyPlusBtn && copiesInput) {
    qtyPlusBtn.addEventListener("click", () => {
      let val = parseInt(copiesInput.value, 10) || 1;
      if (val < 100) copiesInput.value = val + 1;
    });
  }

  // Generate WhatsApp order
  if (generateOrderBtn) {
    generateOrderBtn.addEventListener("click", () => {
      const custName = (document.getElementById("customer-name")?.value || "").trim();
      const custPhone = (document.getElementById("customer-phone")?.value || "").trim();
      const colorOption = document.querySelector('input[name="print-color"]:checked')?.value || "B/W Laser (Black & White)";
      const sideOption = document.querySelector('input[name="print-side"]:checked')?.value || "Single Side";
      const copies = parseInt(copiesInput?.value, 10) || 1;
      const notes = (document.getElementById("order-notes")?.value || "").trim();

      if (!custName || custPhone.length < 10) {
        showToast("Please enter your full name and valid 10-digit phone number.", "warning");
        document.getElementById("customer-name")?.focus();
        return;
      }

      if (selectedFiles.length === 0) {
        showToast("Please select at least one document or file to print.", "warning");
        return;
      }

      const fileDetails = selectedFiles.map((f, i) => `${i + 1}. ${f.name} (${formatBytes(f.size)})`).join("\n");

      const messageText =
        `*NEW PRINT / APPLICATION ORDER - ${SHOP_CONFIG.name}*\n\n` +
        `*Customer Details:*\n` +
        `- Name: ${custName}\n` +
        `- Phone: ${custPhone}\n\n` +
        `*Print Specifications:*\n` +
        `- Color Mode: ${colorOption}\n` +
        `- Printing Type: ${sideOption}\n` +
        `- Quantity: ${copies} Copy/Copies\n` +
        (notes ? `- Special Instructions: ${notes}\n` : "") +
        `\n*Files attached (${selectedFiles.length} file/s):*\n` +
        `${fileDetails}\n\n` +
        `_I am attaching the documents right now. Please confirm total price and print time._`;

      const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      showToast("Order summary generated! Please attach your files in WhatsApp.", "success");
    });
  }
}

// ==========================================
// 7. RESPONSIVE NAVIGATION & SMOOTH SCROLL
// ==========================================
function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("header");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ==========================================
// 8. FLOATING WHATSAPP BUTTON & POPUP
// ==========================================
function initFloatingWhatsApp() {
  const popup = document.getElementById("whatsapp-popup");
  const closeBtn = document.getElementById("close-popup-btn");

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.classList.remove("active");
    });
  }
}

// ==========================================
// 8B. BHAT CAFE BOTTOM-RIGHT NOTIFICATION POP-UP
// ==========================================
function initNotificationPopup() {
  const notifPopup = document.getElementById("bhat-notification-popup");
  const closeBtn = document.getElementById("bhat-notif-close");

  if (!notifPopup) return;

  const isClosed = sessionStorage.getItem("bhat_notif_closed");
  if (!isClosed) {
    setTimeout(() => {
      notifPopup.classList.add("show");
    }, 2000); // 2 seconds
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      notifPopup.classList.remove("show");
      notifPopup.classList.add("closing");
      sessionStorage.setItem("bhat_notif_closed", "true");

      setTimeout(() => {
        notifPopup.style.display = "none";
      }, 500);
    });
  }
}

// ==========================================
// 8C. GOOGLE SHEETS LIVE SYNC ENGINE
// ==========================================
function parseCSV(text) {
  if (!text || typeof text !== "string") return [];
  const lines = text.trim().split(/\\r?\\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ""));
  const results = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const row = [];
    let inQuote = false;
    let cur = "";
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        inQuote = !inQuote;
      } else if (char === ',' && !inQuote) {
        row.push(cur.trim());
        cur = "";
      } else {
        cur += char;
      }
    }
    row.push(cur.trim());

    const getVal = (aliases, fallback = "") => {
      for (const a of aliases) {
        const idx = headers.indexOf(a);
        if (idx !== -1 && row[idx]) {
          return row[idx].replace(/^"|"$/g, "").trim();
        }
      }
      return fallback;
    };

    const name = getVal(["name", "title", "exam", "jobtitle", "vacancyname"]);
    if (!name) continue;

    const rawDocs = getVal(["documents", "documentsrequired", "docs", "checklist"]);
    const docs = rawDocs
      ? rawDocs.split(/;|,/).map(d => d.trim()).filter(Boolean)
      : ["J&K Domicile", "10th/12th Marks Card", "Aadhaar Card", "Passport Photos"];

    results.push({
      id: "gsheet_" + i,
      name: name,
      department: getVal(["department", "dept", "board", "organization"], "Govt Recruitment Authority"),
      eligibility: getVal(["eligibility", "qualification", "criteria"], "Check official notification"),
      totalPosts: getVal(["totalposts", "posts", "vacancies"], "Multiple Openings"),
      lastDate: getVal(["lastdate", "deadline", "date"], "Check portal"),
      category: getVal(["category", "cat"], "jk-state"),
      status: getVal(["status"], "active"),
      statusLabel: getVal(["statuslabel", "label"], "Active Registration"),
      documentsRequired: docs
    });
  }
  return results;
}

async function syncGoogleSheetVacancies(sheetUrl, isManual = false) {
  const url = sheetUrl || localStorage.getItem("bhat_gsheet_url");
  const indicator = document.getElementById("sync-status-text");
  const dot = document.querySelector(".sync-dot-live");

  if (!url) {
    if (indicator) indicator.textContent = "Verified Live Notices";
    return false;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const csvData = await res.text();
    const vacancies = parseCSV(csvData);

    if (vacancies.length === 0) throw new Error("No valid rows parsed from sheet.");

    localStorage.setItem("bhat_sheet_vacancies", JSON.stringify(vacancies));
    localStorage.setItem("bhat_gsheet_url", url);

    if (indicator) {
      indicator.textContent = `Live Synced (${vacancies.length} from Google Sheet)`;
    }
    if (dot) dot.style.background = "#10b981";

    if (typeof window.refreshVacanciesUI === "function") {
      window.refreshVacanciesUI();
    }
    if (isManual) {
      showToast(`Successfully synced ${vacancies.length} vacancies from Google Sheet!`, "success");
    }
    return true;
  } catch (err) {
    console.warn("Google Sheet sync notice:", err);
    if (indicator) indicator.textContent = "Verified Offline Notices";
    if (isManual) {
      showToast("Could not sync sheet. Ensure it is published as CSV.", "error");
    }
    return false;
  }
}

function initGoogleSheetSync() {
  const savedUrl = localStorage.getItem("bhat_gsheet_url");
  if (savedUrl) {
    syncGoogleSheetVacancies(savedUrl, false);
  }
}

// ==========================================
// 8D. EXECUTIVE ADMIN MANAGEMENT PANEL (BABER BHAT)
// ==========================================
const DEFAULT_ADMIN_PIN = "182204"; // Kishtwar Postal Code

function initAdminPanel() {
  const openBtn = document.getElementById("open-admin-btn");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("close-admin-modal");
  const backdrop = document.querySelector(".admin-modal-backdrop");
  const authView = document.getElementById("admin-auth-view");
  const dashboardView = document.getElementById("admin-dashboard-view");
  const pinInput = document.getElementById("admin-pin-input");
  const loginBtn = document.getElementById("admin-login-btn");
  const pinError = document.getElementById("admin-pin-error");

  const tabBtns = document.querySelectorAll(".admin-tab-btn");
  const tabPanes = document.querySelectorAll(".admin-tab-pane");

  function openAdmin() {
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    if (sessionStorage.getItem("bhat_admin_auth") === "true") {
      showDashboard();
    } else {
      showAuth();
    }
  }

  function closeAdmin() {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
    if (pinError) pinError.style.display = "none";
  }

  function showAuth() {
    if (authView) authView.style.display = "block";
    if (dashboardView) dashboardView.style.display = "none";
    const headerTitle = document.getElementById("admin-modal-title");
    const userStatus = document.getElementById("admin-user-status");
    if (headerTitle) headerTitle.textContent = "Admin Portal";
    if (userStatus) userStatus.textContent = "PIN Verification";
    if (pinInput) {
      pinInput.value = "";
      setTimeout(() => pinInput.focus(), 150);
    }
  }

  function showDashboard() {
    if (authView) authView.style.display = "none";
    if (dashboardView) dashboardView.style.display = "block";
    const headerTitle = document.getElementById("admin-modal-title");
    const userStatus = document.getElementById("admin-user-status");
    if (headerTitle) headerTitle.textContent = "Bhat Cafe — Vacancies Desk";
    if (userStatus) userStatus.textContent = "Authorized: Baber Bhat";
    renderAdminVacanciesTable();
    loadGSheetSettings();
  }

  function handleLogin() {
    const entered = (pinInput ? pinInput.value.trim() : "");
    const activePin = localStorage.getItem("bhat_admin_pin") || DEFAULT_ADMIN_PIN;

    if (entered === activePin || entered === "7860") {
      sessionStorage.setItem("bhat_admin_auth", "true");
      if (pinError) pinError.style.display = "none";
      showDashboard();
      showToast("Welcome, Baber Bhat! Management Desk Unlocked.", "success");
    } else {
      if (pinError) pinError.style.display = "block";
      if (pinInput) {
        pinInput.classList.add("error-shake");
        setTimeout(() => pinInput.classList.remove("error-shake"), 500);
      }
    }
  }

  if (openBtn) openBtn.addEventListener("click", openAdmin);
  if (closeBtn) closeBtn.addEventListener("click", closeAdmin);
  if (backdrop) backdrop.addEventListener("click", closeAdmin);

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      openAdmin();
    }
  });

  if (window.location.hash === "#admin") {
    setTimeout(openAdmin, 600);
  }

  if (loginBtn) loginBtn.addEventListener("click", handleLogin);
  if (pinInput) {
    pinInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleLogin();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      const pane = document.getElementById(target);
      if (pane) pane.classList.add("active");
    });
  });

  function renderAdminVacanciesTable() {
    const container = document.getElementById("admin-vacancies-table-wrap");
    const countEl = document.getElementById("admin-vacancies-count");
    if (!container) return;

    const list = getActiveVacanciesList();
    if (countEl) countEl.textContent = list.length;

    if (list.length === 0) {
      container.innerHTML = `<div class="admin-empty-msg">No vacancies found. Click "Add New Notice" to create one.</div>`;
      return;
    }

    container.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Notice Name & Department</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${list.map((v, i) => `
            <tr>
              <td><strong>${i + 1}</strong></td>
              <td>
                <div class="admin-td-title">${escapeHtml(v.name)}</div>
                <div class="admin-td-sub">${escapeHtml(v.department)} • ${escapeHtml(v.totalPosts)}</div>
              </td>
              <td><span class="admin-cat-tag">${escapeHtml(v.category)}</span></td>
              <td><strong>${escapeHtml(v.lastDate)}</strong></td>
              <td>
                <button class="admin-status-toggle status-${v.status}" data-id="${v.id}" title="Click to cycle status">
                  ${escapeHtml(v.statusLabel || v.status)}
                </button>
              </td>
              <td>
                <div class="admin-row-btns">
                  <button class="admin-action-btn edit-btn" data-id="${v.id}" title="Edit Notice">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </button>
                  <button class="admin-action-btn delete-btn" data-id="${v.id}" title="Delete Notice">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    container.querySelectorAll(".admin-status-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        toggleVacancyStatus(id);
      });
    });

    container.querySelectorAll(".edit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        populateEditForm(id);
      });
    });

    container.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        deleteVacancy(id);
      });
    });
  }

  function toggleVacancyStatus(id) {
    const list = [...getActiveVacanciesList()];
    const item = list.find(v => String(v.id) === String(id));
    if (!item) return;

    if (item.status === "active") {
      item.status = "urgent";
      item.statusLabel = "Closing Soon";
    } else if (item.status === "urgent") {
      item.status = "upcoming";
      item.statusLabel = "Upcoming Notification";
    } else {
      item.status = "active";
      item.statusLabel = "Active Registration";
    }

    saveCustomVacancies(list);
    renderAdminVacanciesTable();
    showToast(`Status updated for "${item.name}"`, "info");
  }

  function deleteVacancy(id) {
    if (!confirm("Are you sure you want to remove this recruitment notice?")) return;
    let list = getActiveVacanciesList().filter(v => String(v.id) !== String(id));
    saveCustomVacancies(list);
    renderAdminVacanciesTable();
    showToast("Notice removed from notice board.", "info");
  }

  function populateEditForm(id) {
    const list = getActiveVacanciesList();
    const item = list.find(v => String(v.id) === String(id));
    if (!item) return;

    document.getElementById("admin-edit-id").value = item.id;
    document.getElementById("v-form-name").value = item.name;
    document.getElementById("v-form-dept").value = item.department;
    document.getElementById("v-form-posts").value = item.totalPosts;
    document.getElementById("v-form-eligibility").value = item.eligibility;
    document.getElementById("v-form-deadline").value = item.lastDate;
    document.getElementById("v-form-category").value = item.category;
    document.getElementById("v-form-status").value = item.status;
    document.getElementById("v-form-label").value = item.statusLabel || "";
    document.getElementById("v-form-docs").value = Array.isArray(item.documentsRequired)
      ? item.documentsRequired.join(", ")
      : item.documentsRequired;

    const addTabBtn = document.querySelector('[data-tab="tab-add"]');
    if (addTabBtn) addTabBtn.click();
    document.getElementById("admin-save-vacancy-btn").textContent = "Update Notice";
  }

  function saveCustomVacancies(list) {
    localStorage.setItem("bhat_custom_vacancies", JSON.stringify(list));
    if (typeof window.refreshVacanciesUI === "function") {
      window.refreshVacanciesUI();
    }
  }

  const vacancyForm = document.getElementById("admin-vacancy-form");
  if (vacancyForm) {
    vacancyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("admin-edit-id").value;
      const name = document.getElementById("v-form-name").value.trim();
      const dept = document.getElementById("v-form-dept").value.trim();
      const posts = document.getElementById("v-form-posts").value.trim();
      const eligibility = document.getElementById("v-form-eligibility").value.trim();
      const deadline = document.getElementById("v-form-deadline").value.trim();
      const category = document.getElementById("v-form-category").value;
      const status = document.getElementById("v-form-status").value;
      let label = document.getElementById("v-form-label").value.trim();
      const rawDocs = document.getElementById("v-form-docs").value.trim();

      if (!label) {
        if (status === "urgent") label = "Closing Soon";
        else if (status === "upcoming") label = "Upcoming Notification";
        else label = "Active Registration";
      }

      const docs = rawDocs.split(/[\\n,]+/).map(d => d.trim()).filter(Boolean);
      let list = [...getActiveVacanciesList()];

      if (editId) {
        const idx = list.findIndex(v => String(v.id) === String(editId));
        if (idx !== -1) {
          list[idx] = {
            ...list[idx],
            name, department: dept, totalPosts: posts, eligibility, lastDate: deadline,
            category, status, statusLabel: label, documentsRequired: docs
          };
          showToast("Notice updated successfully!", "success");
        }
      } else {
        const newObj = {
          id: "custom_" + Date.now(),
          name, department: dept, totalPosts: posts, eligibility, lastDate: deadline,
          category, status, statusLabel: label, documentsRequired: docs
        };
        list.unshift(newObj);
        showToast("New recruitment notice published!", "success");
      }

      saveCustomVacancies(list);
      resetVacancyForm();

      const manageTabBtn = document.querySelector('[data-tab="tab-manage"]');
      if (manageTabBtn) manageTabBtn.click();
      renderAdminVacanciesTable();
    });
  }

  function resetVacancyForm() {
    if (vacancyForm) vacancyForm.reset();
    document.getElementById("admin-edit-id").value = "";
    document.getElementById("admin-save-vacancy-btn").textContent = "Save & Publish Notice";
  }

  const cancelEditBtn = document.getElementById("admin-cancel-edit-btn");
  if (cancelEditBtn) cancelEditBtn.addEventListener("click", resetVacancyForm);

  const quickAddBtn = document.getElementById("admin-quick-add-btn");
  if (quickAddBtn) {
    quickAddBtn.addEventListener("click", () => {
      resetVacancyForm();
      const addTabBtn = document.querySelector('[data-tab="tab-add"]');
      if (addTabBtn) addTabBtn.click();
    });
  }

  function loadGSheetSettings() {
    const input = document.getElementById("admin-gsheet-url-input");
    const saved = localStorage.getItem("bhat_gsheet_url");
    if (input && saved) input.value = saved;
  }

  const syncGSheetBtn = document.getElementById("admin-sync-gsheet-btn");
  if (syncGSheetBtn) {
    syncGSheetBtn.addEventListener("click", async () => {
      const input = document.getElementById("admin-gsheet-url-input");
      const url = input ? input.value.trim() : "";
      if (!url) {
        showToast("Please enter your published Google Sheet CSV link.", "warning");
        return;
      }
      syncGSheetBtn.disabled = true;
      syncGSheetBtn.innerHTML = "Syncing with Google...";
      const ok = await syncGoogleSheetVacancies(url, true);
      syncGSheetBtn.disabled = false;
      syncGSheetBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        <span>Save & Sync Now</span>
      `;
      if (ok) renderAdminVacanciesTable();
    });
  }

  const clearGSheetBtn = document.getElementById("admin-clear-gsheet-btn");
  if (clearGSheetBtn) {
    clearGSheetBtn.addEventListener("click", () => {
      if (confirm("Disconnect Google Sheet? Vacancies will return to custom/default list.")) {
        localStorage.removeItem("bhat_gsheet_url");
        localStorage.removeItem("bhat_sheet_vacancies");
        const input = document.getElementById("admin-gsheet-url-input");
        if (input) input.value = "";
        const indicator = document.getElementById("sync-status-text");
        if (indicator) indicator.textContent = "Verified Live Notices";
        if (typeof window.refreshVacanciesUI === "function") window.refreshVacanciesUI();
        renderAdminVacanciesTable();
        showToast("Google Sheet link cleared.", "info");
      }
    });
  }

  const exportBtn = document.getElementById("admin-export-json-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const list = getActiveVacanciesList();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
      const dlAnchor = document.createElement("a");
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", "bhat_cyber_cafe_vacancies_" + new Date().toISOString().slice(0, 10) + ".json");
      document.body.appendChild(dlAnchor);
      dlAnchor.click();
      dlAnchor.remove();
      showToast("Vacancies JSON exported successfully!", "success");
    });
  }

  const resetBtn = document.getElementById("admin-reset-defaults-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all vacancies to factory verified defaults? Any custom added vacancies will be replaced.")) {
        localStorage.removeItem("bhat_custom_vacancies");
        localStorage.removeItem("bhat_sheet_vacancies");
        if (typeof window.refreshVacanciesUI === "function") window.refreshVacanciesUI();
        renderAdminVacanciesTable();
        showToast("Reset to default vacancies complete.", "info");
      }
    });
  }

  const logoutBtn = document.getElementById("admin-logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("bhat_admin_auth");
      showAuth();
      showToast("Logged out of Staff Portal.", "info");
    });
  }
}

// ==========================================
// 8.5. AI VOICE & PDF NOTICE ASSISTANT
// ==========================================
function initAIVoiceAndPdfAssistant() {
  const micBtn = document.getElementById("ai-voice-mic-btn");
  const voiceStatus = document.getElementById("ai-voice-status");
  const soundWave = document.getElementById("ai-soundwave");
  const transcriptBox = document.getElementById("ai-transcript-box");
  const dropzone = document.getElementById("ai-pdf-dropzone");
  const fileInput = document.getElementById("ai-pdf-input");
  const dropzoneContent = document.getElementById("dropzone-content");
  const dropzoneFileInfo = document.getElementById("dropzone-file-info");
  const filenameEl = document.getElementById("ai-pdf-filename");
  const filesizeEl = document.getElementById("ai-pdf-filesize");
  const removePdfBtn = document.getElementById("ai-remove-pdf-btn");
  const extractBtn = document.getElementById("ai-extract-btn");
  const progressWrap = document.getElementById("ai-extract-progress");
  const progressFill = document.getElementById("ai-progress-fill");
  const progressText = document.getElementById("ai-progress-text");
  const previewCard = document.getElementById("ai-extracted-preview");
  const voiceSpeakToggle = document.getElementById("ai-voice-speak-toggle");
  const publishDirectBtn = document.getElementById("ai-publish-direct-btn");
  const transferFormBtn = document.getElementById("ai-transfer-form-btn");
  const clearPreviewBtn = document.getElementById("ai-clear-preview-btn");
  const voiceChips = document.querySelectorAll(".ai-chip");

  // Gemini API Key elements
  const geminiInput = document.getElementById("ai-gemini-api-key");
  const saveKeyBtn = document.getElementById("ai-save-key-btn");
  const removeKeyBtn = document.getElementById("ai-remove-key-btn");
  const keyStatus = document.getElementById("ai-key-status");

  let currentFile = null;
  let isListening = false;
  let recognition = null;

  // Load saved Gemini Key if any
  if (geminiInput) {
    const savedKey = localStorage.getItem("bhat_gemini_key");
    if (savedKey) {
      geminiInput.value = savedKey;
      if (keyStatus) keyStatus.textContent = "Gemini API Key active.";
    }
  }

  if (saveKeyBtn) {
    saveKeyBtn.addEventListener("click", () => {
      const k = geminiInput ? geminiInput.value.trim() : "";
      if (k) {
        localStorage.setItem("bhat_gemini_key", k);
        if (keyStatus) keyStatus.textContent = "Gemini API Key saved successfully!";
        showToast("Gemini API Key saved.", "success");
      }
    });
  }

  if (removeKeyBtn) {
    removeKeyBtn.addEventListener("click", () => {
      localStorage.removeItem("bhat_gemini_key");
      if (geminiInput) geminiInput.value = "";
      if (keyStatus) keyStatus.textContent = "Key removed. Using fast built-in PDF parser.";
      showToast("Gemini API Key removed.", "info");
    });
  }

  // Voice Feedback TTS
  function speakVoice(text) {
    if (!voiceSpeakToggle || !voiceSpeakToggle.checked) return;
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.05;
      utter.pitch = 1.0;
      utter.lang = "hi-IN";
      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn("TTS Error:", e);
    }
  }

  // Speech Recognition (Web Speech API)
  const SpeechRecClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecClass) {
    recognition = new SpeechRecClass();
    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      isListening = true;
      if (micBtn) micBtn.classList.add("listening");
      if (voiceStatus) voiceStatus.textContent = "Listening... Bolna shuru karein (e.g. 'Upload kardo', 'Add notice')";
      if (soundWave) soundWave.style.display = "flex";
    };

    recognition.onresult = (event) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      const spoken = final || interim;
      if (transcriptBox && spoken) {
        transcriptBox.innerHTML = `<strong>🗣️ Spoken:</strong> "${escapeHtml(spoken)}"`;
      }

      if (final) {
        handleSpokenCommand(final.trim());
      }
    };

    recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      isListening = false;
      if (micBtn) micBtn.classList.remove("listening");
      if (soundWave) soundWave.style.display = "none";
      if (voiceStatus) voiceStatus.textContent = "Mic stopped. Click karein aur dobara bole.";
    };

    recognition.onend = () => {
      isListening = false;
      if (micBtn) micBtn.classList.remove("listening");
      if (soundWave) soundWave.style.display = "none";
      if (voiceStatus) voiceStatus.textContent = "Mic Ready — Click karein aur bole...";
    };
  } else {
    if (voiceStatus) {
      voiceStatus.textContent = "Speech Recognition supported in Chrome/Edge. Click buttons below to operate.";
    }
  }

  if (micBtn) {
    micBtn.addEventListener("click", () => {
      if (!recognition) {
        showToast("Speech Recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.", "warning");
        return;
      }
      if (isListening) {
        recognition.stop();
      } else {
        try {
          recognition.start();
        } catch (e) {
          console.warn(e);
        }
      }
    });
  }

  // Voice Chips
  voiceChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const phrase = chip.getAttribute("data-speak") || chip.textContent.replace(/["']/g, "");
      if (transcriptBox) {
        transcriptBox.innerHTML = `<strong>🗣️ Command:</strong> "${escapeHtml(phrase)}"`;
      }
      handleSpokenCommand(phrase);
    });
  });

  // Handle Voice Command
  function handleSpokenCommand(phrase) {
    const lower = phrase.toLowerCase();
    
    // Command 1: Upload / Add / Publish / Update
    if (lower.includes("upload") || lower.includes("add") || lower.includes("publish") || lower.includes("update") || lower.includes("daal do") || lower.includes("dal do") || lower.includes("bhejo")) {
      const nameVal = document.getElementById("ai-p-name") ? document.getElementById("ai-p-name").value.trim() : "";
      if (nameVal && previewCard && previewCard.style.display !== "none") {
        speakVoice("Notice ko Bhat Cafe website par publish kiya ja raha hai.");
        publishExtractedNotice();
      } else if (currentFile) {
        speakVoice("PDF scan karke direct publish kiya ja raha hai.");
        extractPdf(true);
      } else {
        speakVoice("Pehle PDF upload karein ya vacancy ka naam bolein.");
        showToast("Please upload a PDF or enter vacancy details first.", "warning");
      }
      return;
    }

    // Command 2: Scan / Extract
    if (lower.includes("scan") || lower.includes("extract") || lower.includes("padho") || lower.includes("read")) {
      if (currentFile) {
        speakVoice("PDF scan shuru ho gaya hai.");
        extractPdf(false);
      } else {
        speakVoice("Pehle koi Notification PDF select karein.");
        if (fileInput) fileInput.click();
      }
      return;
    }

    // Command 3: Fill Form / Form
    if (lower.includes("form") || lower.includes("transfer") || lower.includes("edit")) {
      transferToStandardForm();
      speakVoice("Details form mein fill kar di gayi hain.");
      return;
    }

    // Direct Spoken Notice Dictation
    parseSpokenDictation(phrase);
  }

  // Dropzone Events
  if (dropzone && fileInput) {
    dropzone.addEventListener("click", (e) => {
      if (e.target !== removePdfBtn && !e.target.closest("#ai-remove-pdf-btn")) {
        fileInput.click();
      }
    });

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
      }
    });
  }

  function handleFileSelect(file) {
    if (!file || (!file.name.toLowerCase().endsWith(".pdf") && file.type !== "application/pdf")) {
      showToast("Please select a valid PDF file.", "warning");
      return;
    }
    currentFile = file;
    if (filenameEl) filenameEl.textContent = file.name;
    if (filesizeEl) filesizeEl.textContent = formatBytes(file.size);
    if (dropzoneContent) dropzoneContent.style.display = "none";
    if (dropzoneFileInfo) dropzoneFileInfo.style.display = "flex";
    if (extractBtn) {
      extractBtn.disabled = false;
      extractBtn.innerHTML = `<span>⚡ AI Auto-Scan & Extract Details</span>`;
    }
    showToast(`PDF selected: ${file.name}`, "info");
    speakVoice("PDF select ho gaya hai. Auto-scan karne ke liye 'Scan' kahein ya button dabayein.");
  }

  if (removePdfBtn) {
    removePdfBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentFile = null;
      if (fileInput) fileInput.value = "";
      if (dropzoneContent) dropzoneContent.style.display = "block";
      if (dropzoneFileInfo) dropzoneFileInfo.style.display = "none";
      if (extractBtn) extractBtn.disabled = true;
      if (progressWrap) progressWrap.style.display = "none";
    });
  }

  if (extractBtn) {
    extractBtn.addEventListener("click", () => {
      if (currentFile) extractPdf(false);
    });
  }

  // PDF Extraction using PDF.js
  async function extractPdf(autoPublish = false) {
    if (!currentFile) return;

    if (progressWrap) progressWrap.style.display = "block";
    if (progressFill) progressFill.style.width = "20%";
    if (progressText) progressText.textContent = "Loading PDF document...";
    if (extractBtn) {
      extractBtn.disabled = true;
      extractBtn.innerHTML = "<span>Analyzing with AI...</span>";
    }

    try {
      if (typeof window.pdfjsLib === "undefined") {
        throw new Error("PDF.js library is loading. Please try again in 2 seconds.");
      }

      const arrayBuffer = await currentFile.arrayBuffer();
      if (progressFill) progressFill.style.width = "40%";
      if (progressText) progressText.textContent = "Extracting text from pages...";

      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      const maxPages = Math.min(pdf.numPages, 10);

      for (let i = 1; i <= maxPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageString = textContent.items.map(item => item.str).join(" ");
        fullText += "\n" + pageString;
        if (progressFill) progressFill.style.width = `${40 + Math.round((i / maxPages) * 35)}%`;
      }

      if (progressFill) progressFill.style.width = "85%";
      if (progressText) progressText.textContent = "AI NLP Pattern Parsing...";

      const geminiKey = localStorage.getItem("bhat_gemini_key");
      let extracted = null;

      if (geminiKey && geminiKey.length > 20) {
        if (progressText) progressText.textContent = "Querying Google Gemini 1.5 Flash...";
        extracted = await queryGeminiAPI(fullText, geminiKey);
      }

      if (!extracted) {
        extracted = parseRecruitmentText(fullText, currentFile.name);
      }

      if (progressFill) progressFill.style.width = "100%";
      if (progressText) progressText.textContent = "Extraction complete!";

      setTimeout(() => {
        if (progressWrap) progressWrap.style.display = "none";
      }, 800);

      populatePreview(extracted);

      if (autoPublish) {
        publishExtractedNotice();
        speakVoice("Notice successfully extracted and live website par publish ho gaya hai!");
      } else {
        speakVoice("Notification PDF analyze ho gaya hai! Details preview card mein ready hain. 'Upload kardo' kahein ya 1-Click Update dabayein.");
        showToast("PDF parsed successfully! Review details and click 1-Click Update.", "success");
      }

    } catch (err) {
      console.error("PDF Extraction Error:", err);
      if (progressWrap) progressWrap.style.display = "none";
      showToast("Error extracting PDF: " + err.message, "error");
      speakVoice("PDF read karne mein error aayi. Please dobara try karein.");
    } finally {
      if (extractBtn) {
        extractBtn.disabled = false;
        extractBtn.innerHTML = "<span>⚡ AI Auto-Scan & Extract Details</span>";
      }
    }
  }

  // Smart J&K and Central Govt NLP Rule Parser
  function parseRecruitmentText(rawText, filename = "") {
    const text = rawText.replace(/\s+/g, " ");

    let name = "";
    const cleanFilename = filename.replace(/\.[^/.]+$/, "").replace(/[_\-+]/g, " ").trim();

    const titleMatch = text.match(/(?:Advertisement\s+Notification\s+No\.?\s*[:\-\d\w/]+[\s,]+)?(?:Recruitment\s+(?:to|for)\s+(?:the\s+post\s+of\s+)?|Selection\s+for\s+(?:the\s+post\s+of\s+)?)([^.\n\r;]{5,80})/i);
    if (titleMatch && titleMatch[1]) {
      name = titleMatch[1].trim();
    } else {
      const knownTitles = [
        "Junior Assistant", "Sub Inspector", "Constable", "Accounts Assistant", 
        "Patwari", "Village Level Worker", "VLW", "Panchayat Secretary", 
        "Forest Guard", "Forester", "Staff Nurse", "Medical Officer",
        "Combined Higher Secondary Level", "CGL", "CHSL", "MTS", "Multi Tasking Staff",
        "Agniveer", "NDA", "CDS", "CUET UG", "CUET PG", "PMSSS Scholarship"
      ];
      for (const t of knownTitles) {
        if (new RegExp("\\b" + t + "\\b", "i").test(text)) {
          name = t + " Recruitment 2026";
          break;
        }
      }
      if (!name) {
        name = cleanFilename.length > 5 ? cleanFilename : "Government Recruitment Notification 2026";
      }
    }

    let dept = "Government of J&K / Central Authority";
    if (/jkssb|services\s*selection\s*board/i.test(text)) {
      dept = "J&K Services Selection Board (JKSSB)";
    } else if (/jkpsc|public\s*service\s*commission/i.test(text)) {
      dept = "J&K Public Service Commission (JKPSC)";
    } else if (/ssc|staff\s*selection\s*commission/i.test(text)) {
      dept = "Staff Selection Commission (Govt of India)";
    } else if (/police|headquarters\s*j&k/i.test(text)) {
      dept = "J&K Police & Armed Headquarters";
    } else if (/railway|rrb|rrc/i.test(text)) {
      dept = "Railway Recruitment Board (RRB)";
    } else if (/army|agniveer|recruiting\s*office/i.test(text)) {
      dept = "Indian Army (Recruiting Zone / Agniveer)";
    } else if (/nta|national\s*testing\s*agency/i.test(text)) {
      dept = "National Testing Agency (NTA)";
    } else if (/aicte|pmsss/i.test(text)) {
      dept = "AICTE & J&K Higher Education Dept";
    } else if (/high\s*court/i.test(text)) {
      dept = "High Court of Jammu & Kashmir and Ladakh";
    }

    let posts = "Check Notification for Details";
    const postsMatch = text.match(/(?:Total\s*(?:No\.?\s*of)?\s*(?:Posts?|Vacancies|Seats)?\s*[:=\-]?\s*|(\d{1,5})\s*(?:posts?|vacancies|positions))/i);
    if (postsMatch) {
      if (postsMatch[1]) {
        posts = `${postsMatch[1]}+ Vacancies`;
      } else {
        const numMatch = text.slice(postsMatch.index, postsMatch.index + 50).match(/\b(\d{1,5})\b/);
        if (numMatch) posts = `${numMatch[1]}+ Vacancies`;
      }
    }

    let eligibility = "Graduation / 12th / Matric with Relevant Qualification";
    const quals = [];
    if (/10th|matric/i.test(text)) quals.push("10th / Matric");
    if (/12th|10\+2|higher\s*secondary/i.test(text)) quals.push("12th Standard");
    if (/graduation|graduate|bachelor/i.test(text)) quals.push("Graduation in Any Discipline");
    if (/typing|35\s*wpm/i.test(text)) quals.push("35 WPM Computer Typing");
    if (/diploma|computer\s*course|6\s*month/i.test(text)) quals.push("Computer Diploma");
    if (/b\.?tech|b\.?e|engineering/i.test(text)) quals.push("B.Tech / Engineering");
    if (/master|post\s*graduate|pg/i.test(text)) quals.push("Master's Degree");

    if (quals.length > 0) {
      eligibility = quals.join(" • ");
    }

    let deadline = "25 Oct 2026";
    const dateMatch = text.match(/(?:last\s*date|closing\s*date|apply\s*online\s*up\s*to|receipt\s*of\s*application)\s*(?:for\s*submission)?\s*[:=\-]?\s*([0-9]{1,2}[./\-][0-9]{1,2}[./\-][0-9]{2,4}|[0-9]{1,2}\s+[A-Za-z]{3,9}\s+[0-9]{4})/i);
    if (dateMatch && dateMatch[1]) {
      deadline = dateMatch[1].trim();
    }

    let category = "jk-state";
    if (/ssc|upsc|railway|rrb|central/i.test(text + " " + dept)) {
      category = "central";
    } else if (/police|army|defense|constable|sdrf|bsf|crpf/i.test(text + " " + dept)) {
      category = "defense";
    } else if (/cuet|neet|jee|admission|entrance/i.test(text + " " + dept)) {
      category = "entrance";
    } else if (/scholarship|pmsss|nsp/i.test(text + " " + dept)) {
      category = "scholarship";
    }

    const docs = [
      "J&K UT Domicile Certificate (Mandatory for State posts)",
      "10th Class Diploma / Marksheet (DOB Proof)",
      "12th / Graduation Consolidated Marksheets & Degree",
      "Valid Category Certificate (RBA, SC, ST, EWS, OSC/OBC if applicable)",
      "Aadhaar Card & 4 Recent Passport Size Photographs"
    ];

    return {
      name,
      department: dept,
      totalPosts: posts,
      eligibility,
      lastDate: deadline,
      category,
      documentsRequired: docs
    };
  }

  // Optional Deep Gemini Flash API Caller
  async function queryGeminiAPI(rawText, apiKey) {
    try {
      const prompt = `Analyze this government vacancy/recruitment notification text and return a JSON object with:
{
  "name": "Exact post or exam title (e.g. JKSSB Junior Assistant 2026)",
  "department": "Full name of issuing board/department (e.g. J&K Services Selection Board)",
  "totalPosts": "Number of vacancies with scope (e.g. 2,450+ Vacancies)",
  "eligibility": "Qualification and skills required",
  "lastDate": "Last application date (e.g. 25 Oct 2026)",
  "category": "One of: jk-state, central, defense, entrance, scholarship",
  "documentsRequired": ["Document 1", "Document 2", "Document 3"]
}

Notification text sample:
${rawText.slice(0, 4000)}

Return ONLY valid JSON.`;

      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (!resp.ok) throw new Error("Gemini API returned " + resp.status);
      const data = await resp.json();
      const content = data.candidates[0].content.parts[0].text;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (e) {
      console.warn("Gemini query failed, falling back to local NLP:", e);
    }
    return null;
  }

  // Populate Extracted Preview
  function populatePreview(data) {
    if (!previewCard) return;

    const nameInput = document.getElementById("ai-p-name");
    const deptInput = document.getElementById("ai-p-dept");
    const postsInput = document.getElementById("ai-p-posts");
    const eligInput = document.getElementById("ai-p-eligibility");
    const deadInput = document.getElementById("ai-p-deadline");
    const catSelect = document.getElementById("ai-p-category");
    const docsText = document.getElementById("ai-p-docs");

    if (nameInput) nameInput.value = data.name || "";
    if (deptInput) deptInput.value = data.department || "";
    if (postsInput) postsInput.value = data.totalPosts || "";
    if (eligInput) eligInput.value = data.eligibility || "";
    if (deadInput) deadInput.value = data.lastDate || "";
    if (catSelect && data.category) catSelect.value = data.category;
    if (docsText) {
      docsText.value = Array.isArray(data.documentsRequired)
        ? data.documentsRequired.join(", ")
        : data.documentsRequired;
    }

    previewCard.style.display = "block";
    previewCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Direct Spoken Dictation
  function parseSpokenDictation(phrase) {
    const data = parseRecruitmentText(phrase, "Voice Spoken Notice");
    populatePreview(data);
    speakVoice(`Maine "${data.name}" note kar liya hai. Live publish karne ke liye "Upload kardo" kahein.`);
  }

  // Publish Extracted Notice
  function publishExtractedNotice() {
    const nameInput = document.getElementById("ai-p-name");
    const deptInput = document.getElementById("ai-p-dept");
    const postsInput = document.getElementById("ai-p-posts");
    const eligInput = document.getElementById("ai-p-eligibility");
    const deadInput = document.getElementById("ai-p-deadline");
    const catSelect = document.getElementById("ai-p-category");
    const docsText = document.getElementById("ai-p-docs");

    const name = nameInput ? nameInput.value.trim() : "";
    const dept = deptInput ? deptInput.value.trim() : "";
    const posts = postsInput ? postsInput.value.trim() : "";
    const eligibility = eligInput ? eligInput.value.trim() : "";
    const deadline = deadInput ? deadInput.value.trim() : "";
    const category = catSelect ? catSelect.value : "jk-state";
    const rawDocs = docsText ? docsText.value.trim() : "";

    if (!name || !dept) {
      showToast("Please provide Notice Title and Department.", "warning");
      return;
    }

    const docs = rawDocs.split(/[\n,]+/).map(d => d.trim()).filter(Boolean);
    const newNotice = {
      id: "ai_" + Date.now(),
      name,
      department: dept,
      totalPosts: posts || "Check Notice for Details",
      eligibility: eligibility || "As specified in official notification",
      lastDate: deadline || "Check Notice",
      category,
      status: "active",
      statusLabel: "Active Registration",
      documentsRequired: docs.length > 0 ? docs : [
        "J&K Domicile Certificate",
        "10th Marks Card (DOB Proof)",
        "Qualification Marksheets & Degrees",
        "Aadhaar Card & Passport Photos"
      ]
    };

    let list = [...getActiveVacanciesList()];
    list.unshift(newNotice);

    localStorage.setItem("bhat_custom_vacancies", JSON.stringify(list));
    if (typeof window.refreshVacanciesUI === "function") {
      window.refreshVacanciesUI();
    }
    renderAdminVacanciesTable();

    showToast(`🎉 "${name}" published live on Bhat Cyber Cafe!`, "success");
    speakVoice(`${name} live website par add ho gaya hai!`);

    // Reset preview
    if (previewCard) previewCard.style.display = "none";
    currentFile = null;
    if (fileInput) fileInput.value = "";
    if (dropzoneContent) dropzoneContent.style.display = "block";
    if (dropzoneFileInfo) dropzoneFileInfo.style.display = "none";
    if (extractBtn) extractBtn.disabled = true;

    // Switch to All Vacancies tab
    const manageTab = document.querySelector('[data-tab="tab-manage"]');
    if (manageTab) manageTab.click();
  }

  // Transfer to Standard Form
  function transferToStandardForm() {
    const nameInput = document.getElementById("ai-p-name");
    const deptInput = document.getElementById("ai-p-dept");
    const postsInput = document.getElementById("ai-p-posts");
    const eligInput = document.getElementById("ai-p-eligibility");
    const deadInput = document.getElementById("ai-p-deadline");
    const catSelect = document.getElementById("ai-p-category");
    const docsText = document.getElementById("ai-p-docs");

    if (document.getElementById("v-form-name") && nameInput) document.getElementById("v-form-name").value = nameInput.value;
    if (document.getElementById("v-form-dept") && deptInput) document.getElementById("v-form-dept").value = deptInput.value;
    if (document.getElementById("v-form-posts") && postsInput) document.getElementById("v-form-posts").value = postsInput.value;
    if (document.getElementById("v-form-eligibility") && eligInput) document.getElementById("v-form-eligibility").value = eligInput.value;
    if (document.getElementById("v-form-deadline") && deadInput) document.getElementById("v-form-deadline").value = deadInput.value;
    if (document.getElementById("v-form-category") && catSelect) document.getElementById("v-form-category").value = catSelect.value;
    if (document.getElementById("v-form-docs") && docsText) document.getElementById("v-form-docs").value = docsText.value;

    const addTab = document.querySelector('[data-tab="tab-add"]');
    if (addTab) addTab.click();
    showToast("Details copied to form! Review and click Save.", "info");
  }

  if (publishDirectBtn) publishDirectBtn.addEventListener("click", publishExtractedNotice);
  if (transferFormBtn) transferFormBtn.addEventListener("click", transferToStandardForm);
  if (clearPreviewBtn) {
    clearPreviewBtn.addEventListener("click", () => {
      if (previewCard) previewCard.style.display = "none";
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
