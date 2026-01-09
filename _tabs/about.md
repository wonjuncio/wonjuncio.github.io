---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<div class="about-page">
  <div class="tab-container">
    {% include about/tabs.html %}
    {% include about/about-content.html %}
    {% include about/cv-content.html %}
    {% include about/pub-content.html %}
  </div>
</div>

<script src="/assets/js/about.js"></script>
