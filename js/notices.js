/**
 * SIANG ROYAL SCHOOL - NOTICES ENGINE
 * Handles real-time search, category filters, and document links.
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('notices-search');
  const filterBtns = document.querySelectorAll('.notices-filter-btn');
  const noticeCards = document.querySelectorAll('.notice-card');
  const noResultsMsg = document.getElementById('notices-empty');

  let activeCategory = 'all';
  let searchTerm = '';

  const filterNotices = () => {
    let visibleCount = 0;

    noticeCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.querySelector('.notice-title')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.notice-desc')?.textContent.toLowerCase() || '';

      const matchesCat = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  searchInput?.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    filterNotices();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      filterNotices();
    });
  });
});
