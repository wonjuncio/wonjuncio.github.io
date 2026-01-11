/**
 * About page tab functionality
 */

(function() {
  'use strict';

  const TAB_STORAGE_KEY = 'about-active-tab';

  function initTabs() {
    const tabButtons = document.querySelectorAll('.about-page .tab-btn');
    const tabContents = document.querySelectorAll('.about-page .tab-content');

    if (!tabButtons.length) return;

    // Restore last active tab from sessionStorage
    const savedTab = sessionStorage.getItem(TAB_STORAGE_KEY);
    if (savedTab) {
      showTab(savedTab);
    }

    // Add click handlers
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        showTab(tabId);
        sessionStorage.setItem(TAB_STORAGE_KEY, tabId);
      });
    });
  }

  function showTab(tabId) {
    const tabButtons = document.querySelectorAll('.about-page .tab-btn');
    const tabContents = document.querySelectorAll('.about-page .tab-content');

    // Hide all tabs
    tabContents.forEach(tab => tab.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    const targetTab = document.getElementById(tabId);
    const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);

    if (targetTab) targetTab.classList.add('active');
    if (targetBtn) targetBtn.classList.add('active');
  }

  // ================================
  // Publications Filter
  // ================================

  function initPubFilter() {
    const filterBtns = document.querySelectorAll('[data-filter-btn]');
    const filterItems = document.querySelectorAll('[data-filter-item]');
    const selectBtn = document.querySelector('[data-select]');
    const selectValue = document.querySelector('[data-select-value]');
    const selectItems = document.querySelectorAll('[data-select-item]');

    if (!filterBtns.length) return;

    function normalize(str) {
      return (str || '').trim().toLowerCase();
    }

    function applyFilter(category) {
      const cat = normalize(category);

      filterItems.forEach(item => {
        const itemCat = normalize(item.dataset.category);
        const show = (cat === 'all') || (itemCat === cat);
        item.classList.toggle('active', show);
      });
    }

    // Desktop filter tabs
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(btn.textContent);
      });
    });

    // Mobile select toggle
    if (selectBtn) {
      selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectBtn.classList.toggle('active');
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!selectBtn.parentElement.contains(e.target)) {
          selectBtn.classList.remove('active');
        }
      });
    }

    // Mobile select items
    selectItems.forEach(itemBtn => {
      itemBtn.addEventListener('click', () => {
        const chosen = itemBtn.textContent.trim();
        if (selectValue) selectValue.textContent = chosen;

        // Close dropdown
        if (selectBtn) selectBtn.classList.remove('active');

        // Sync desktop tabs
        filterBtns.forEach(b => {
          b.classList.toggle('active', normalize(b.textContent) === normalize(chosen));
        });

        applyFilter(chosen);
      });
    });

    // Initialize with "All"
    applyFilter('all');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs();
      initPubFilter();
    });
  } else {
    initTabs();
    initPubFilter();
  }
})();

