---
layout: page
title: About
icon: fas fa-user
order: 4
---

<div class="about-page-simple">
  <div class="about-intro">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  <section class="about-section">
    <h2>Research Philosophy</h2>
    <p>
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      Integer in mauris eu nibh euismod gravida.
      Duis ac tellus et risus vulputate vehicula.
      Donec lobortis risus a elit.
    </p>
  </section>

  <section class="about-section">
    <h2>Beyond Research</h2>
    <p>
      Curabitur pretium tincidunt lacus.
      Nulla gravida orci a odio.
      Nullam varius, turpis et commodo pharetra,
      est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
    </p>
  </section>

  <section class="about-section">
    <h2>Connect</h2>
    <div class="about-links">
      <a href="mailto:wonjun.choi@snu.ac.kr" class="about-link">
        <i class="fas fa-envelope"></i>
        <span>wonjun.choi@snu.ac.kr</span>
      </a>
      <a href="https://github.com/wonjuncio" target="_blank" rel="noopener" class="about-link">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
      <a href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID" target="_blank" rel="noopener" class="about-link">
        <i class="fas fa-graduation-cap"></i>
        <span>Google Scholar</span>
      </a>
      <a href="https://www.linkedin.com/in/choi-wonj/" target="_blank" rel="noopener" class="about-link">
        <i class="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
</div>

<style>
.about-page-simple {
  max-width: 700px;
  margin: 0 auto;
}

.about-intro {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.about-intro p {
  margin-bottom: 1rem;
}

.about-intro a {
  color: var(--link-color);
  text-decoration: none;
}

.about-intro a:hover {
  text-decoration: underline;
}

.about-section {
  margin-bottom: 2rem;
}

.about-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.about-section p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted-color);
}

.about-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.about-link i {
  color: var(--link-color);
}

.about-link:hover {
  border-color: var(--link-color);
  text-decoration: none;
}
</style>
