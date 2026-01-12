---
layout: page
title: About
icon: fas fa-user
order: 4
---

<div class="about-page-simple">
  <div class="about-intro">
    <p>
      Hi! I'm <strong>Wonjun Choi</strong>, a Ph.D. student in the Department of Materials Science and Engineering at 
      <a href="https://www.snu.ac.kr" target="_blank">Seoul National University</a>, 
      advised by <a href="https://mdil.snu.ac.kr/" target="_blank">Prof. Seungwoo Han</a>.
    </p>
    
    <p>
      My research focuses on <strong>AI4Materials</strong> — applying machine learning and deep learning 
      to accelerate materials discovery and computational materials science. I'm particularly interested 
      in Graph Neural Networks for molecular property prediction, high-throughput screening pipelines, 
      and semiconductor materials design.
    </p>
  </div>

  <section class="about-section">
    <h2>Research Philosophy</h2>
    <p>
      I believe in bridging the gap between traditional materials science and modern AI. 
      My goal is to develop methods that not only predict material properties accurately 
      but also provide interpretable insights that can guide experimental work.
    </p>
  </section>

  <section class="about-section">
    <h2>Beyond Research</h2>
    <p>
      When I'm not coding or running simulations, you can find me writing technical blog posts 
      to solidify my understanding of new concepts, or exploring the latest developments in 
      deep learning frameworks and tools.
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
      <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_ID" target="_blank" rel="noopener" class="about-link">
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
