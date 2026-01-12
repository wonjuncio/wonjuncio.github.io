---
layout: page
title: CV
icon: fas fa-user-graduate
order: 3
---

<div class="cv-page">
  <div class="cv-header">
    <div class="cv-title-section">
      <h1 class="cv-name">{{ site.social.name | default: site.title }}</h1>
      <p class="cv-role">Ph.D. Student in Materials Science & Engineering</p>
      <p class="cv-focus">Graph ML for Materials · AI4Materials · Computational Discovery</p>
    </div>
    <a href="/assets/cv.pdf" target="_blank" class="cv-download-btn">
      <i class="fas fa-download"></i>
      Download PDF
    </a>
  </div>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-item-title">Seoul National University</div>
        <p class="timeline-degree">Ph.D. in Materials Science and Engineering</p>
        <span class="timeline-meta">Mar. 2026 – Present · Republic of Korea</span>
        <p class="timeline-text detail">Advised by <a href="https://scholar.google.com/citations?user=DYhDLrAAAAAJ&hl=ko" target="_blank">Prof. Seungwoo Han</a></p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Imperial College London</div>
        <p class="timeline-degree">MEng in Materials Science and Engineering</p>
        <span class="timeline-meta">Sep. 2018 – Sep. 2022 · United Kingdom</span>
        <p class="timeline-text detail">Supervised by <a href="https://scholar.google.co.uk/citations?user=Ktvn91gAAAAJ&hl=en" target="_blank">Aron Walsh</a> and <a href="https://scholar.google.com/citations?user=nVJFXWwAAAAJ&hl=en" target="_blank">Alex Ganose</a></p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">North London Collegiate School Jeju</div>
        <p class="timeline-degree">International Baccalaureate Diploma Programme</p>
        <span class="timeline-meta">Sep. 2016 – Jul. 2018 · Republic of Korea</span>
      </li>
    </ul>
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-briefcase"></i> Work Experience</h2>
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-item-title">E8IGHT Co., Ltd.</div>
        <p class="timeline-degree">Assistant Research Engineer</p>
        <span class="timeline-meta">Mar. 2023 – Mar. 2026 · Republic of Korea</span>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Korea Electronics Technology Institute (KETI)</div>
        <p class="timeline-degree">Research Engineer Intern, SW R&D Department</p>
        <span class="timeline-meta">Oct. 2020 – Oct. 2021 · Republic of Korea</span>
      </li>
    </ul>
  </section>

  <section class="cv-section cv-section--flat">
    <h2 class="cv-section-title"><i class="fas fa-rocket"></i> Research Projects</h2>
    <div class="projects-list">
      <div class="project-item">
        <div class="project-header">
          <span class="project-title">Real-Time Fetal Monitor Tracking System</span>
          <span class="project-date">Jan. 2023 – Feb. 2023</span>
        </div>
        <p class="project-desc">Personal Project</p>
      </div>
      <div class="project-item">
        <div class="project-header">
          <span class="project-title">Machine Learning Prediction of Point Defect Properties</span>
          <span class="project-date">Sep. 2021 – Jul. 2022</span>
        </div>
        <p class="project-desc">Imperial College London, MEng Thesis</p>
      </div>
      <div class="project-item">
        <div class="project-header">
          <span class="project-title">Heat–Mass Transfer Simulation (Exhaust Pipe Scenario)</span>
          <span class="project-date">Jan. 2020 – Mar. 2020</span>
        </div>
        <p class="project-desc">Imperial College London</p>
      </div>
      <div class="project-item">
        <div class="project-header">
          <span class="project-title">2D/3D Binary Substitutional Alloy Simulation</span>
          <span class="project-date">Nov. 2019 – Mar. 2020</span>
        </div>
        <p class="project-desc">Imperial College London</p>
      </div>
    </div>
  </section>

  <section class="cv-section cv-section--flat">
    <h2 class="cv-section-title"><i class="fas fa-tools"></i> Skills</h2>
    <div class="skills-compact">
      <div class="skill-row">
        <span class="skill-label">Programming</span>
        <span class="skill-content">Python, C++, CUDA, MATLAB</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">ML/DL</span>
        <span class="skill-content">PyTorch, TensorFlow, PyTorch Geometric</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">Materials Science</span>
        <span class="skill-content">DFT, VASP, ASE, Pymatgen</span>
      </div>
    </div>
  </section>

  <section class="cv-section cv-section--flat">
    <h2 class="cv-section-title"><i class="fas fa-language"></i> Languages</h2>
    <div class="languages-list">
      <div class="lang-item">
        <span class="lang-name">Korean</span>
        <span class="lang-level native">Native</span>
      </div>
      <div class="lang-item">
        <span class="lang-name">English</span>
        <span class="lang-level fluent">Business Fluent</span>
      </div>
      <div class="lang-item">
        <span class="lang-name">Spanish</span>
        <span class="lang-level basic">Basic Conversational</span>
      </div>
    </div>
  </section>
</div>

<style>
.cv-page {
  max-width: 800px;
  margin: 0 auto;
}

/* ================================
   Hero Header - Improved
   ================================ */
.cv-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
}

.cv-title-section {
  flex: 1;
  min-width: 280px;
}

.cv-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.cv-role {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--link-color);
  margin: 0 0 0.35rem;
}

.cv-focus {
  font-size: 0.9rem;
  color: var(--text-muted-color);
  margin: 0;
  letter-spacing: 0.02em;
}

.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  color: var(--link-color);
  text-decoration: none;
  border: 1.5px solid var(--link-color);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.cv-download-btn:hover {
  background: var(--link-color);
  color: #fff;
  text-decoration: none;
}

/* ================================
   Section Styles
   ================================ */
.cv-section {
  margin-bottom: 2.5rem;
}

.cv-section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.cv-section-title i {
  margin-right: 0.5rem;
  color: var(--link-color);
  font-size: 0.95em;
}

/* ================================
   Timeline (Education / Work only)
   ================================ */
.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 40px;
  position: relative;
}

.timeline-item {
  position: relative;
  padding-bottom: 0.25rem;
}

.timeline-item:not(:last-child) {
  margin-bottom: 1.25rem;
}

/* Timeline dot */
.timeline-item::after {
  content: "";
  position: absolute;
  left: -32px;
  top: 4px;
  width: 14px;
  height: 14px;
  background: var(--main-bg, #14161a);
  border: 2.5px solid var(--link-color);
  border-radius: 50%;
  z-index: 2;
  transition: transform 0.2s ease;
}

/* Timeline line */
.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  left: -26px;
  top: 22px;
  bottom: -20px;
  width: 2px;
  background: var(--link-color);
  opacity: 0.25;
  border-radius: 999px;
  z-index: 1;
}

.timeline-item:hover::after {
  transform: scale(1.15);
}

/* Title - strongest emphasis */
.timeline-item-title {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--heading-color);
  margin-bottom: 2px;
}

/* Degree/Role - secondary emphasis */
.timeline-degree {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-color);
  margin: 0 0 4px;
}

/* Date/Location - lightest */
.timeline-meta {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--text-muted-color);
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 4px;
}

/* Detail text (advisor) */
.timeline-text.detail {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--text-muted-color);
  opacity: 0.75;
  margin: 4px 0 0;
}

.timeline-text.detail a {
  color: var(--link-color);
  text-decoration: none;
}

.timeline-text.detail a:hover {
  text-decoration: underline;
}

/* ================================
   Flat Sections (Projects, Skills)
   ================================ */
.cv-section--flat .projects-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-item {
  padding: 1rem 1.25rem;
  background: var(--card-bg, rgba(255,255,255,0.02));
  border: 1px solid var(--border-color);
  border-radius: 10px;
  transition: border-color 0.2s ease;
}

.project-item:hover {
  border-color: var(--link-color);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.project-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--heading-color);
}

.project-date {
  font-size: 0.8rem;
  color: var(--text-muted-color);
  opacity: 0.75;
  white-space: nowrap;
}

.project-desc {
  font-size: 0.85rem;
  color: var(--text-muted-color);
  margin: 0;
}

/* ================================
   Skills - Compact Layout
   ================================ */
.skills-compact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.skill-label {
  flex-shrink: 0;
  width: 130px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--link-color);
}

.skill-content {
  font-size: 0.9rem;
  color: var(--text-color);
}

/* ================================
   Languages
   ================================ */
.languages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: var(--card-bg, rgba(255,255,255,0.02));
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.lang-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--heading-color);
}

.lang-level {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.lang-level.native {
  background: rgba(var(--link-color-rgb, 99, 102, 241), 0.15);
  color: var(--link-color);
}

.lang-level.fluent {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.lang-level.basic {
  background: rgba(251, 191, 36, 0.15);
  color: #f59e0b;
}

/* ================================
   Responsive
   ================================ */
@media (max-width: 600px) {
  .cv-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cv-download-btn {
    margin-top: 0.5rem;
  }
  
  .timeline-list {
    margin-left: 28px;
  }
  
  .timeline-item::after {
    left: -22px;
    width: 12px;
    height: 12px;
  }
  
  .timeline-item:not(:last-child)::before {
    left: -17px;
    top: 18px;
  }
  
  .skill-row {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .skill-label {
    width: auto;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>

