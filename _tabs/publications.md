---
layout: page
title: Publications
icon: fas fa-file-alt
order: 2
---

<div id="publications" class="tab-content">

  <section class="pub-section">
    <!-- Desktop filter tabs -->
    <ul class="filter-list">
      <li class="filter-item">
        <button class="active" data-filter-btn>All</button>
      </li>
      <li class="filter-item">
        <button data-filter-btn>International conferences</button>
      </li>
      <li class="filter-item">
        <button data-filter-btn>Workshops</button>
      </li>
      <li class="filter-item">
        <button data-filter-btn>Pre-prints</button>
      </li>
    </ul>

    <!-- Mobile select dropdown -->
    <div class="filter-select-box">
      <button class="filter-select" data-select>
        <div class="select-value" data-select-value>Select category</div>
        <div class="select-icon">
          <i class="fas fa-chevron-down"></i>
        </div>
      </button>
      <ul class="select-list">
        <li class="select-item"><button data-select-item>All</button></li>
        <li class="select-item"><button data-select-item>International conferences</button></li>
        <li class="select-item"><button data-select-item>Workshops</button></li>
        <li class="select-item"><button data-select-item>Pre-prints</button></li>
      </ul>
    </div>

    <!-- Publication cards (auto-generated from _data/publications.yml) -->
    <ul class="pub-list">
      {% assign sorted_pubs = site.data.publications | sort: "date" | reverse %}
      {% for pub in sorted_pubs %}
      <li class="pub-card active" data-filter-item data-category="{{ pub.category }}">
        <a href="{{ pub.url }}" target="_blank" rel="noopener">
          <figure class="pub-img">
            <div class="pub-icon-box">
              <i class="fas fa-eye"></i>
            </div>
            <img src="{{ pub.image }}" alt="{{ pub.title }}" loading="lazy">
          </figure>
          <h4 class="pub-title">[{{ pub.id }}] {{ pub.title }}</h4>
          <p class="pub-authors">
            {%- for author in pub.authors -%}
              {%- if forloop.index0 == pub.me -%}<u>{{ author }}</u>{%- else -%}{{ author }}{%- endif -%}
              {%- unless forloop.last -%}, {% endunless -%}
            {%- endfor -%}
          </p>
          <p class="pub-venue">{{ pub.venue }}</p>
        </a>
      </li>
      {% endfor %}
    </ul>

  </section>
</div>

<script src="/assets/js/publications.js"></script>


