// Publications Page JavaScript
// =============================

document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality for desktop buttons
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.textContent.trim().toLowerCase();
      
      filterItems.forEach(item => {
        if (filterValue === 'all') {
          item.classList.add('active');
        } else {
          const category = item.dataset.category.toLowerCase();
          if (category === filterValue) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    });
  });
  
  // Mobile select dropdown
  const selectBtn = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-select-value]');
  
  if (selectBtn) {
    selectBtn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
  
  selectItems.forEach(item => {
    item.addEventListener('click', function() {
      const value = this.textContent.trim();
      selectValue.textContent = value;
      selectBtn.classList.remove('active');
      
      const filterValue = value.toLowerCase();
      
      filterItems.forEach(item => {
        if (filterValue === 'all') {
          item.classList.add('active');
        } else {
          const category = item.dataset.category.toLowerCase();
          if (category === filterValue) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
      
      // Update desktop buttons to match
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim().toLowerCase() === filterValue) {
          btn.classList.add('active');
        }
      });
    });
  });
  
  // Close select on outside click
  document.addEventListener('click', function(e) {
    if (selectBtn && !e.target.closest('.filter-select-box')) {
      selectBtn.classList.remove('active');
    }
  });
});


