// CV Page - Project Accordion
(function() {
  function initAccordion() {
    var summaries = document.querySelectorAll('.project-summary');
    if (summaries.length === 0) {
      return;
    }
    
    summaries.forEach(function(summary) {
      summary.addEventListener('click', function(e) {
        if (e.target.closest('.project-github-link') || e.target.closest('.project-pdf-link')) {
          return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        var item = this.closest('.project-item');
        if (!item) return;
        
        var isActive = item.classList.contains('active');
        
        // Click animation
        item.classList.remove('clicked');
        void item.offsetWidth;
        item.classList.add('clicked');
        setTimeout(function() { item.classList.remove('clicked'); }, 1000);
        
        // Close all other items
        document.querySelectorAll('.project-item').forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            var otherSummary = otherItem.querySelector('.project-summary');
            if (otherSummary) otherSummary.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          this.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
        }
      });
      
      // Keyboard support
      summary.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();

