// Posts Page - Search, Category Filter, Pagination
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('posts-search');
  var postsCards = document.querySelectorAll('.posts-card');
  var paginationContainer = document.getElementById('posts-pagination');
  var categoryMoreBtn = document.getElementById('category-more-btn');
  var hiddenCategories = document.querySelectorAll('.hidden-category');
  
  if (!searchInput || postsCards.length === 0) return;
  
  var PER_PAGE = 10;
  var currentPage = 1;
  var filteredCards = Array.from(postsCards);
  var categoriesExpanded = false;
  
  // Category More toggle
  if (categoryMoreBtn) {
    categoryMoreBtn.addEventListener('click', function() {
      categoriesExpanded = !categoriesExpanded;
      hiddenCategories.forEach(function(cat) {
        cat.classList.toggle('hidden-category', !categoriesExpanded);
      });
      this.innerHTML = categoriesExpanded 
        ? 'Less <i class="fas fa-chevron-up"></i>' 
        : 'More <i class="fas fa-chevron-down"></i>';
    });
  }
  
  // Render pagination
  function renderPagination() {
    var totalPages = Math.ceil(filteredCards.length / PER_PAGE);
    
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }
    
    var html = '<div class="pagination-inner">';
    
    // Prev button
    if (currentPage > 1) {
      html += '<button class="page-nav" data-page="' + (currentPage - 1) + '">← Prev</button>';
    } else {
      html += '<span class="page-nav disabled">← Prev</span>';
    }
    
    // Page numbers
    var maxVisible = 5;
    var startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    var endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    if (startPage > 1) {
      html += '<button class="page-num" data-page="1">1</button>';
      if (startPage > 2) {
        html += '<span class="page-ellipsis">…</span>';
      }
    }
    
    for (var i = startPage; i <= endPage; i++) {
      if (i === currentPage) {
        html += '<span class="page-num current">' + i + '</span>';
      } else {
        html += '<button class="page-num" data-page="' + i + '">' + i + '</button>';
      }
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        html += '<span class="page-ellipsis">…</span>';
      }
      html += '<button class="page-num" data-page="' + totalPages + '">' + totalPages + '</button>';
    }
    
    // Next button
    if (currentPage < totalPages) {
      html += '<button class="page-nav" data-page="' + (currentPage + 1) + '">Next →</button>';
    } else {
      html += '<span class="page-nav disabled">Next →</span>';
    }
    
    html += '</div>';
    paginationContainer.innerHTML = html;
    
    // Add event listeners
    paginationContainer.querySelectorAll('button[data-page]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentPage = parseInt(this.dataset.page);
        updateDisplay();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }
  
  // Update display
  function updateDisplay() {
    var start = (currentPage - 1) * PER_PAGE;
    var end = start + PER_PAGE;
    
    postsCards.forEach(function(card) { card.style.display = 'none'; });
    filteredCards.slice(start, end).forEach(function(card) { card.style.display = 'block'; });
    
    renderPagination();
  }
  
  // Filter posts
  function filterPosts() {
    var query = searchInput.value.toLowerCase().trim();
    var activeCategoryEl = document.querySelector('.category-item.active');
    var activeCategory = activeCategoryEl ? activeCategoryEl.dataset.category : 'all';
    
    filteredCards = Array.from(postsCards).filter(function(card) {
      var title = card.dataset.title || '';
      var primaryCategory = card.dataset.primaryCategory || '';
      var tags = card.dataset.tags || '';
      
      var matchesSearch = !query || 
        title.includes(query) || 
        primaryCategory.includes(query) || 
        tags.includes(query);
      
      var matchesCategory = activeCategory === 'all' || primaryCategory === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    currentPage = 1;
    updateDisplay();
  }
  
  // Search
  searchInput.addEventListener('input', filterPosts);
  
  // Category filter
  var categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      categoryItems.forEach(function(i) { i.classList.remove('active'); });
      this.classList.add('active');
      filterPosts();
    });
  });
  
  // Archive toggle
  var archiveHeaders = document.querySelectorAll('.archive-year-header');
  archiveHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      var year = this.dataset.year;
      var list = document.getElementById('archive-' + year);
      this.classList.toggle('collapsed');
      list.classList.toggle('collapsed');
    });
  });
  
  // Initial display
  updateDisplay();
});

