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

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();

