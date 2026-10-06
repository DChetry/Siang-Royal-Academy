/**
 * SIANG ROYAL SCHOOL - MAIN INTERACTION ENGINE
 * Handles counters, FAQ accordions, enquiry modals, form validation, and scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. ANIMATED NUMBER COUNTERS
  const counterElements = document.querySelectorAll('[data-counter-target]');
  
  if (counterElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter-target'));
          const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
          const suffix = el.getAttribute('data-counter-suffix') || '';
          
          let start = 0;
          const duration = 1600;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = start + ease * (target - start);

            el.textContent = (decimals > 0
              ? current.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
              : Math.floor(current).toLocaleString('en-IN')) + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }

  // 2. FAQ ACCORDION ENGINE
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. TOAST NOTIFICATION UTILITY
  window.showSchoolToast = (message) => {
    let toast = document.getElementById('school-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'school-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #0F2C59;
        color: #FFFFFF;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        border-left: 4px solid #D4AF37;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.925rem;
        font-family: 'Inter', sans-serif;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    toast.style.opacity = '1';
    toast.style.display = 'flex';
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 4000);
  };

  // 4. GLOBAL ENQUIRY MODAL HANDLER
  const enquiryTriggers = document.querySelectorAll('[data-trigger-enquiry]');
  const modal = document.getElementById('global-enquiry-modal');
  const modalClose = modal?.querySelector('.modal-close-btn');

  enquiryTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // 5. ENQUIRY / CONTACT FORM SUBMISSION HANDLERS
  const enquiryForm = document.getElementById('admission-enquiry-form');
  enquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const student = enquiryForm.querySelector('[name="studentName"]')?.value.trim();
    const phone = enquiryForm.querySelector('[name="phone"]')?.value.trim();
    
    if (!student || !phone || phone.length < 10) {
      alert('Please fill in required fields (Student Name and 10-digit Phone).');
      return;
    }

    closeModal();
    enquiryForm.reset();
    window.showSchoolToast('Enquiry registered successfully (Frontend Demo). Thank you!');
  });
});
