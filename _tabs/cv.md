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
      <p class="cv-tagline">{{ site.tagline }}</p>
    </div>
    <a href="/assets/cv/cv.pdf" target="_blank" class="cv-download-btn">
      <i class="fas fa-download"></i>
      Download PDF
    </a>
  </div>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-item-title">Seoul National University</div>
        <span class="timeline-meta">Mar. 2026 – Present · Republic of Korea</span>
        <p class="timeline-text">Ph.D. in Materials Science and Engineering</p>
        <p class="timeline-text detail">Advised by <a href="https://scholar.google.com/citations?user=DYhDLrAAAAAJ&hl=ko" target="_blank">Prof. Seungwoo Han</a></p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Imperial College London</div>
        <span class="timeline-meta">Sep. 2018 – Sep. 2022 · United Kingdom</span>
        <p class="timeline-text">MEng in Materials Science and Engineering</p>
        <p class="timeline-text detail">Supervised by <a href="https://scholar.google.co.uk/citations?user=Ktvn91gAAAAJ&hl=en" target="_blank">Aron Walsh</a> and <a href="https://scholar.google.com/citations?user=nVJFXWwAAAAJ&hl=en" target="_blank">Alex Ganose</a></p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">North London Collegiate School Jeju</div>
        <span class="timeline-meta">Sep. 2016 – Jul. 2018 · Republic of Korea</span>
        <p class="timeline-text">International Baccalaureate Diploma Programme</p>
      </li>
    </ul>
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-briefcase"></i> Work Experience</h2>
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-item-title">E8IGHT Co., Ltd.</div>
        <span class="timeline-meta">Mar. 2023 – Mar. 2026 · Republic of Korea</span>
        <p class="timeline-text">Assistant Research Engineer</p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Korea Electronics Technology Institute (KETI)</div>
        <span class="timeline-meta">Oct. 2020 – Oct. 2021 · Republic of Korea</span>
        <p class="timeline-text">Research Engineer Intern, SW R&D Department</p>
      </li>
    </ul>
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-tools"></i> Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h4>Programming</h4>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">C++</span>
          <span class="skill-tag">MATLAB</span>
        </div>
      </div>
      <div class="skill-category">
        <h4>ML/DL Frameworks</h4>
        <div class="skill-tags">
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">TensorFlow</span>
          <span class="skill-tag">PyTorch Geometric</span>
        </div>
      </div>
      <div class="skill-category">
        <h4>Materials Science</h4>
        <div class="skill-tags">
          <span class="skill-tag">DFT</span>
          <span class="skill-tag">VASP</span>
          <span class="skill-tag">ASE</span>
          <span class="skill-tag">Pymatgen</span>
        </div>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title"><i class="fas fa-rocket"></i> Research Projects</h2>
    <ul class="timeline-list">
      <li class="timeline-item">
        <div class="timeline-item-title">Real-Time Fetal Monitor Tracking System</div>
        <span class="timeline-meta">Jan. 2023 – Feb. 2023</span>
        <p class="timeline-text">Personal Project</p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Machine Learning Prediction of Point Defect Properties</div>
        <span class="timeline-meta">Sep. 2021 – Jul. 2022</span>
        <p class="timeline-text">Imperial College London, MEng Thesis</p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">Heat–Mass Transfer Simulation (Exhaust Pipe Scenario)</div>
        <span class="timeline-meta">Jan. 2020 – Mar. 2020</span>
        <p class="timeline-text">Imperial College London</p>
      </li>
      <li class="timeline-item">
        <div class="timeline-item-title">2D/3D Binary Substitutional Alloy Simulation</div>
        <span class="timeline-meta">Nov. 2019 – Mar. 2020</span>
        <p class="timeline-text">Imperial College London</p>
      </li>
    </ul>
  </section>
</div>

<style>
.cv-page {
  max-width: 800px;
  margin: 0 auto;
}

.cv-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

.cv-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0 0 0.5rem;
}

.cv-tagline {
  font-size: 1rem;
  color: var(--text-muted-color);
  margin: 0;
}

.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--link-color);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.cv-download-btn:hover {
  opacity: 0.9;
  text-decoration: none;
}

.cv-section {
  margin-bottom: 2.5rem;
}

.cv-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.cv-section-title i {
  margin-right: 0.5rem;
  color: var(--link-color);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-category h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 0.75rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  background: rgba(var(--link-color-rgb, 99, 102, 241), 0.1);
  color: var(--link-color);
  border-radius: 6px;
}
</style>


