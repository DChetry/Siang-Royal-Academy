/**
 * SIANG ROYAL SCHOOL - EVENTS ENGINE
 * Handles event filtering and event modal interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.events-filter-btn');
  const eventCards = document.querySelectorAll('.event-card');
  const eventModal = document.getElementById('event-detail-modal');
  const modalImg = document.getElementById('event-modal-img');
  const modalBadge = document.getElementById('event-modal-badge');
  const modalTitle = document.getElementById('event-modal-title');
  const modalDate = document.getElementById('event-modal-date');
  const modalDesc = document.getElementById('event-modal-desc');
  const modalClose = eventModal?.querySelector('.modal-close-btn');

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      eventCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal display logic
  const detailBtns = document.querySelectorAll('[data-event-details]');
  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.event-card');
      if (!card || !eventModal) return;

      const img = card.querySelector('img')?.src;
      const title = card.querySelector('.event-title')?.textContent;
      const date = card.querySelector('.event-date')?.textContent;
      const desc = card.querySelector('.event-desc')?.textContent;
      const cat = card.getAttribute('data-category');

      if (modalImg && img) modalImg.src = img;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDate) modalDate.textContent = date;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalBadge) modalBadge.textContent = cat?.toUpperCase();

      eventModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (eventModal) {
      eventModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  modalClose?.addEventListener('click', closeModal);
  eventModal?.addEventListener('click', (e) => {
    if (e.target === eventModal) closeModal();
  });
});
