import urllib.parse

vacancies = [
  {
    'name': 'JKSSB Junior Assistant & Executive Cadre Recruitment 2026',
    'department': 'J&K Services Selection Board (General Administration Dept, J&K UT)',
    'eligibility': 'Graduate in Any Discipline with 35 WPM Typing Speed & 6-Month Computer Diploma',
    'totalPosts': '2,450+ Vacancies Across District, Divisional & UT Cadres',
    'lastDate': '08 Oct 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'urgent',
    'statusLabel': 'Closing Soon',
    'docs': [
      'J&K UT Domicile Certificate (Mandatory)',
      'Graduation Degree / Consolidated Marksheets',
      '10th Class Diploma / Marksheet (DOB Proof)',
      '12th Standard Marks Card (JKBOSE / CBSE)',
      '6-Month Computer Application Diploma',
      'Valid Reserved Category Certificate (RBA, SC, ST, OSC/OBC, EWS, PSP, ALC/IB)',
      'Aadhaar Card & 4 Recent Passport Size Photographs'
    ]
  },
  {
    'name': 'J&K Police Constable Bharti (Executive, Armed & SDRF)',
    'department': 'J&K Police Recruitment Board (JKPRB)',
    'eligibility': '10th / 12th Standard Pass • Age: 18 - 28 Years (Physical Endurance & Measurement Test)',
    'totalPosts': '4,022+ Constable Posts Across Jammu & Kashmir',
    'lastDate': '15 Oct 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'active',
    'statusLabel': 'Active Registration',
    'docs': [
      'Permanent Domicile Certificate of J&K UT',
      '10th & 12th Marks Statements & Passing Certificate',
      'Date of Birth Certificate / Matriculation Diploma',
      'Category Certificate (RBA, ALC/IB, SC, ST, OSC, EWS if applicable)',
      'Aadhaar Card (Linked with active mobile)',
      'Recent Clear Color Passport Photographs & Signature'
    ]
  },
  {
    'name': 'J&K Bank Banking Associate & Probationary Officer (PO)',
    'department': 'The Jammu & Kashmir Bank Ltd.',
    'eligibility': 'Bachelor\'s Degree in Any Discipline (Min. 55% Aggregate) • Permanent Resident of J&K / Ladakh',
    'totalPosts': '1,250+ Banking Associates & PO Positions',
    'lastDate': '20 Oct 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'active',
    'statusLabel': 'Registration Open',
    'docs': [
      'J&K / Ladakh Domicile Certificate',
      'Graduation Final Degree & All Semester Marksheets',
      '10th Standard Marks Card (Date of Birth Verification)',
      'Aadhaar Card & PAN Card',
      'Passport Size Photograph (White Background)',
      'Candidate Signature & Left Thumb Impression on Clean White Paper'
    ]
  },
  {
    'name': 'JKPSC Combined Competitive Examination (CCE / KAS 2026)',
    'department': 'J&K Public Service Commission (JKPSC)',
    'eligibility': 'Bachelor\'s Degree in Any Field • Age: 21 - 32 Years (Age relaxation for reserved categories)',
    'totalPosts': '275+ Administrative, Police & Account Services (JKS / JKPS)',
    'lastDate': '28 Oct 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'active',
    'statusLabel': 'Official Notification Active',
    'docs': [
      'J&K UT Domicile Certificate',
      'Graduation Degree & Detailed Marks Certificates',
      'Matriculation (10th) Certificate / DOB Proof',
      'Competent Authority Category Certificate (RBA, SC, ST, EWS, PSP, Social Caste)',
      'Aadhaar Card',
      'Color Passport Photograph & Scanned Signature'
    ]
  },
  {
    'name': 'JKSSB Female Supervisor & Social Welfare Department',
    'department': 'Social Welfare Department, Govt. of Jammu & Kashmir',
    'eligibility': 'Graduation (Preference for candidates with Home Science, Sociology, or Child Development)',
    'totalPosts': '201 Posts Across J&K Districts',
    'lastDate': '30 Sep 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'urgent',
    'statusLabel': 'Closing in 5 Days',
    'docs': [
      'J&K Domicile Certificate',
      'Graduation Degree with Subject Proof',
      '10th & 12th Marks Cards (JKBOSE / CBSE)',
      'Aadhaar Card',
      'Reserved Category Certificate (if applicable)',
      'Recent Passport Size Photos'
    ]
  },
  {
    'name': 'High Court of J&K and Ladakh Non-Gazetted Staff',
    'department': 'High Court of Jammu & Kashmir and Ladakh',
    'eligibility': 'Graduate with Computer Typing (35 WPM) & Shorthand Knowledge',
    'totalPosts': '150+ Stenographer, Reader & Junior Assistant Posts',
    'lastDate': '05 Nov 2026',
    'category': 'jk-state',
    'categoryLabel': 'JAMMU & KASHMIR (J&K UT) RECRUITMENT',
    'status': 'upcoming',
    'statusLabel': 'Upcoming Notification',
    'docs': [
      'J&K / Ladakh UT Domicile Certificate',
      'Graduation Degree & Typing / Shorthand Speed Certificate',
      '10th & 12th Academic Records',
      'Aadhaar Card',
      'Scanned Photograph & Signature'
    ]
  },
  {
    'name': 'SSC CHSL (10+2) Recruitment 2026',
    'department': 'Staff Selection Commission (Govt. of India)',
    'eligibility': '12th Standard Pass (Any Stream) • Age Limit: 18 - 27 Years',
    'totalPosts': '3,712+ Vacancies (LDC, JSA, DEO)',
    'lastDate': '28 Sep 2026',
    'category': 'central',
    'categoryLabel': 'CENTRAL RECRUITMENT',
    'status': 'urgent',
    'statusLabel': 'Closing in 3 Days',
    'docs': [
      '10th & 12th Marksheets / Passing Certificates',
      'Aadhaar Card (Original / Digital Copy)',
      'Recent Passport Size Photograph (White Background)',
      'Candidate Signature on clean unlined paper',
      'Category Certificate (OBC, SC, ST, EWS if applicable)'
    ]
  },
  {
    'name': 'Railway RRB NTPC & Group D Recruitment',
    'department': 'Railway Recruitment Control Board (RRB)',
    'eligibility': '10th Pass / 12th Pass / Bachelor\'s Degree • Age: 18 - 33 Years',
    'totalPosts': '11,558+ Positions Across Zones',
    'lastDate': '20 Oct 2026',
    'category': 'central',
    'categoryLabel': 'CENTRAL RECRUITMENT',
    'status': 'active',
    'statusLabel': 'Active Registration',
    'docs': [
      '10th Standard Marksheet (Date of Birth Proof)',
      '12th / Graduation Degree Certificate',
      'Aadhaar Card (Mobile Number Linked)',
      'Color Passport Size Photograph',
      'Candidate Signature & Left Thumb Impression',
      'Active Bank Account Details (Fee Refund)'
    ]
  },
  {
    'name': 'Indian Army Agniveer Rally Recruitment 2026',
    'department': 'Join Indian Army (Ministry of Defence)',
    'eligibility': '8th / 10th / 12th Pass (Min. 45% Aggregate) • Age: 17.5 - 21 Years',
    'totalPosts': 'All India Zonal Recruitment Drives',
    'lastDate': '15 Oct 2026',
    'category': 'defense',
    'categoryLabel': 'DEFENSE RECRUITMENT',
    'status': 'active',
    'statusLabel': 'Registration Open',
    'docs': [
      'Academic Marksheet (8th / 10th / 12th)',
      'Aadhaar Card (Linked with DigiLocker for OTP)',
      'State Domicile / Nativity Certificate',
      'Caste Certificate signed by Tehsildar',
      'Unmarried Certificate from Local Representative',
      'Recent Clear Passport Photographs (White BG)'
    ]
  },
  {
    'name': 'NEET (UG) 2027 Medical Entrance Examination',
    'department': 'National Testing Agency (NTA)',
    'eligibility': '12th Standard Passed or Appearing with Physics, Chemistry & Biology',
    'totalPosts': 'National MBBS, BDS & Allied Medical Admissions',
    'lastDate': '25 Oct 2026',
    'category': 'entrance',
    'categoryLabel': 'ENTRANCE EXAMINATION',
    'status': 'active',
    'statusLabel': 'Registration Open',
    'docs': [
      '10th & 12th Standard Marksheet & Passing Certificate',
      'Aadhaar Card or Government Photo Identity',
      'Passport Size & Postcard Size (4x6) Photographs',
      'Signature in Running Handwriting',
      'Left & Right Hand Fingers and Thumb Impressions'
    ]
  },
  {
    'name': 'PM Yashasvi & National Scholarship Portal 2026',
    'department': 'Ministry of Social Justice & Empowerment',
    'eligibility': 'Students currently enrolled in Class 9, 10, 11, 12 or College',
    'totalPosts': 'Direct Benefit Transfer Financial Grant',
    'lastDate': '30 Sep 2026',
    'category': 'scholarship',
    'categoryLabel': 'SCHOLARSHIP PORTAL',
    'status': 'urgent',
    'statusLabel': 'Closing in 5 Days',
    'docs': [
      'Previous Academic Year Marksheet',
      'Aadhaar Card (Applicant & Guardian)',
      'Competent Authority Income Certificate',
      'Bank Passbook (Applicant\'s Aadhaar-seeded account)',
      'School / College Bonafide Certificate & Fee Receipt'
    ]
  }
]

out = []
for v in vacancies:
    badge_cls = 'badge-active'
    if v['status'] == 'urgent': badge_cls = 'badge-urgent'
    elif v['status'] == 'upcoming': badge_cls = 'badge-upcoming'
    
    docs_html = ''.join([f'<span class="doc-pill"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg><span>{d}</span></span>' for d in v['docs']])
    
    msg = f"*APPLICATION INQUIRY - BHAT CYBER CAFE*\n\nHello BHAT CYBER CAFE,\nI would like to apply for *{v['name']}* ({v['department']}).\n\nEligibility: {v['eligibility']}\nLast Date: {v['lastDate']}\n\nRequired Documents:\n" + '\n'.join([f'- {d}' for d in v['docs']])
    wa_url = 'https://wa.me/919419145664?text=' + urllib.parse.quote(msg)
    
    card = f'''        <article class="vacancy-card" data-category="{v['category']}">
          <div class="v-top-row">
            <div class="v-title-area">
              <span class="v-badge-category">{v['categoryLabel']}</span>
              <h3 class="v-title">{v['name']}</h3>
              <span class="v-dept">{v['department']} • <strong>{v['totalPosts']}</strong></span>
            </div>
            <div class="v-dates-badges">
              <span class="last-date-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Deadline: {v['lastDate']}</span>
              </span>
              <span class="status-badge {badge_cls}">{v['statusLabel']}</span>
            </div>
          </div>
          <div class="v-info-bar">
            <div class="v-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              <span><strong>Eligibility Criteria:</strong> {v['eligibility']}</span>
            </div>
          </div>
          <div class="v-docs-section">
            <div class="v-docs-header">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <span>Mandatory Documents Required for Application:</span>
            </div>
            <div class="v-docs-pills">
              {docs_html}
            </div>
          </div>
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
              <a href="{wa_url}" target="_blank" rel="noopener" class="btn-apply-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Send Documents on WhatsApp</span>
              </a>
            </div>
          </div>
        </article>'''
    out.append(card)

cards_html = '\n'.join(out)

# Now read index.html and inject into vacancies-list
html = open('index.html', encoding='utf-8').read()

target = '<div class="vacancies-container" id="vacancies-list">\n        <!-- Rendered dynamically via script.js -->\n      </div>'
replacement = f'<div class="vacancies-container" id="vacancies-list">\n{cards_html}\n      </div>'

if target in html:
    new_html = html.replace(target, replacement)
    # Also bump version
    new_html = new_html.replace('script.js?v=3', 'script.js?v=20260903_v5')
    new_html = new_html.replace('styles.css?v=3', 'styles.css?v=20260903_v5')
    open('index.html', 'w', encoding='utf-8').write(new_html)
    print('SUCCESS: Injected vacancies into index.html!')
else:
    print('TARGET NOT FOUND, searching...')
    import re
    m = re.search(r'<div class="vacancies-container" id="vacancies-list">[\s\S]*?</div>', html)
    if m:
        new_html = html[:m.start()] + f'<div class="vacancies-container" id="vacancies-list">\n{cards_html}\n      </div>' + html[m.end():]
        new_html = new_html.replace('script.js?v=3', 'script.js?v=20260903_v5')
        new_html = new_html.replace('styles.css?v=3', 'styles.css?v=20260903_v5')
        open('index.html', 'w', encoding='utf-8').write(new_html)
        print('SUCCESS VIA REGEX!')
    else:
        print('FAILED TO FIND VACANCIES CONTAINER')
