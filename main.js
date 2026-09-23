/**
 * Alexia Granato Yoga & Maternità
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Announcement Bar Dismiss
  const announcementBar = document.querySelector('.announcement-bar');
  const barCloseBtn = document.querySelector('.bar-close');
  if (barCloseBtn && announcementBar) {
    barCloseBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      sessionStorage.setItem('announcementDismissed', 'true');
    });
    if (sessionStorage.getItem('announcementDismissed') === 'true') {
      announcementBar.style.display = 'none';
    }
  }

  // 3. Mobile Navigation Toggle
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-menu-nav a');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = burgerBtn.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // 4. Courses Carousel (Opzione 2)
  const coursesTrack = document.getElementById('coursesCarouselTrack');
  const coursesPrevBtn = document.getElementById('coursesPrevBtn');
  const coursesNextBtn = document.getElementById('coursesNextBtn');
  const coursesDots = document.querySelectorAll('#coursesCarouselDots .carousel-dot');
  const carouselSection = document.getElementById('percorsi-secondari');

  function getCarouselCardStep() {
    if (!coursesTrack) return 320;
    const firstCard = coursesTrack.querySelector('.course-box');
    if (!firstCard) return 320;
    const gap = 24; // 1.5rem gap
    return firstCard.offsetWidth + gap;
  }

  function updateCoursesCarouselState() {
    if (!coursesTrack || !coursesPrevBtn || !coursesNextBtn) return;
    const scrollLeft = coursesTrack.scrollLeft;
    const maxScroll = coursesTrack.scrollWidth - coursesTrack.clientWidth;

    coursesPrevBtn.disabled = scrollLeft <= 10;
    coursesNextBtn.disabled = scrollLeft >= maxScroll - 10;

    const step = getCarouselCardStep();
    const activeIndex = Math.min(
      coursesDots.length - 1,
      Math.max(0, Math.round(scrollLeft / step))
    );

    coursesDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  if (coursesTrack && coursesPrevBtn && coursesNextBtn) {
    coursesPrevBtn.addEventListener('click', () => {
      coursesTrack.scrollBy({ left: -getCarouselCardStep(), behavior: 'smooth' });
    });

    coursesNextBtn.addEventListener('click', () => {
      coursesTrack.scrollBy({ left: getCarouselCardStep(), behavior: 'smooth' });
    });

    coursesDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        coursesTrack.scrollTo({ left: idx * getCarouselCardStep(), behavior: 'smooth' });
      });
    });

    coursesTrack.addEventListener('scroll', updateCoursesCarouselState, { passive: true });
    window.addEventListener('resize', updateCoursesCarouselState);
    updateCoursesCarouselState();

    // Scroll carousel card into view when requested
    function scrollToCarouselCard(cardId) {
      const card = coursesTrack.querySelector(cardId);
      if (card) {
        coursesTrack.scrollTo({ left: card.offsetLeft - coursesTrack.offsetLeft, behavior: 'smooth' });
      }
    }

    if (window.location.hash) {
      setTimeout(() => scrollToCarouselCard(window.location.hash), 300);
    }
  }

  // 4b. Course Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      let visibleCarouselCards = 0;

      courseCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        const isMatch = filterValue === 'all' || categories.includes(filterValue);
        if (isMatch) {
          card.style.display = '';
          if (card.closest('#coursesCarouselTrack')) {
            visibleCarouselCards++;
          }
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });

      if (carouselSection) {
        if (filterValue === 'all' || visibleCarouselCards > 0) {
          carouselSection.style.display = '';
        } else {
          setTimeout(() => {
            carouselSection.style.display = 'none';
          }, 300);
        }
      }

      if (coursesTrack) {
        coursesTrack.scrollLeft = 0;
        setTimeout(updateCoursesCarouselState, 350);
      }
    });
  });

  // 5. Quotes Carousel
  const quoteSlides = document.querySelectorAll('.quote-slide');
  const quoteDots = document.querySelectorAll('.quote-dot');
  let currentQuoteIndex = 0;
  let quoteTimer = null;

  function showQuote(index) {
    quoteSlides.forEach(slide => slide.classList.remove('active'));
    quoteDots.forEach(dot => dot.classList.remove('active'));

    currentQuoteIndex = (index + quoteSlides.length) % quoteSlides.length;
    quoteSlides[currentQuoteIndex].classList.add('active');
    quoteDots[currentQuoteIndex].classList.add('active');
  }

  function startQuoteAutoPlay() {
    stopQuoteAutoPlay();
    quoteTimer = setInterval(() => {
      showQuote(currentQuoteIndex + 1);
    }, 6500);
  }

  function stopQuoteAutoPlay() {
    if (quoteTimer) clearInterval(quoteTimer);
  }

  quoteDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showQuote(idx);
      startQuoteAutoPlay();
    });
  });

  if (quoteSlides.length > 0) {
    startQuoteAutoPlay();
  }

  // 5b. Testimonials Carousel
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');
  const testimonialCarousel = document.getElementById('testimonialsCarousel');
  let currentTestimonialIndex = 0;
  let testimonialTimer = null;

  function showTestimonial(index) {
    if (!testimonialSlides.length) return;
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    currentTestimonialIndex = (index + testimonialSlides.length) % testimonialSlides.length;
    testimonialSlides[currentTestimonialIndex].classList.add('active');
    if (testimonialDots[currentTestimonialIndex]) {
      testimonialDots[currentTestimonialIndex].classList.add('active');
    }
  }

  function startTestimonialAutoPlay() {
    stopTestimonialAutoPlay();
    testimonialTimer = setInterval(() => {
      showTestimonial(currentTestimonialIndex + 1);
    }, 7500);
  }

  function stopTestimonialAutoPlay() {
    if (testimonialTimer) clearInterval(testimonialTimer);
  }

  if (testimonialPrev) {
    testimonialPrev.addEventListener('click', () => {
      showTestimonial(currentTestimonialIndex - 1);
      startTestimonialAutoPlay();
    });
  }

  if (testimonialNext) {
    testimonialNext.addEventListener('click', () => {
      showTestimonial(currentTestimonialIndex + 1);
      startTestimonialAutoPlay();
    });
  }

  testimonialDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showTestimonial(idx);
      startTestimonialAutoPlay();
    });
  });

  if (testimonialCarousel) {
    testimonialCarousel.addEventListener('mouseenter', stopTestimonialAutoPlay);
    testimonialCarousel.addEventListener('mouseleave', startTestimonialAutoPlay);

    // Touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialCarousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    testimonialCarousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 45) {
        showTestimonial(currentTestimonialIndex + 1);
        startTestimonialAutoPlay();
      } else if (touchEndX > touchStartX + 45) {
        showTestimonial(currentTestimonialIndex - 1);
        startTestimonialAutoPlay();
      }
    }, { passive: true });
  }

  if (testimonialSlides.length > 0) {
    startTestimonialAutoPlay();
  }

  // 6. Modal Controls
  const modalOverlay = document.getElementById('bookingModal');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalCourseSelect = document.getElementById('modalCourseSelect');
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalTabContents = document.querySelectorAll('.modal-tab-content');

  window.openBookingModal = function(courseName = '') {
    if (modalOverlay) {
      modalOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      if (courseName && modalCourseSelect) {
        for (let i = 0; i < modalCourseSelect.options.length; i++) {
          if (modalCourseSelect.options[i].text.includes(courseName) || modalCourseSelect.options[i].value === courseName) {
            modalCourseSelect.selectedIndex = i;
            break;
          }
        }
        updateWhatsAppLink();
      }
    }
  };

  window.closeBookingModal = function() {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeBookingModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        window.closeBookingModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-active')) {
      window.closeBookingModal();
    }
  });

  // Modal Tabs (WhatsApp vs Email Form)
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalTabBtns.forEach(b => b.classList.remove('active'));
      modalTabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const target = document.getElementById(targetId);
      if (target) target.style.display = 'block';
    });
  });

  // Modal WhatsApp dynamic message builder
  const modalNameInput = document.getElementById('modalName');
  const modalLocationSelect = document.getElementById('modalLocation');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppSendBtn');

  function updateWhatsAppLink() {
    if (!modalWhatsAppBtn) return;
    const name = modalNameInput ? modalNameInput.value.trim() : '';
    const course = modalCourseSelect ? modalCourseSelect.value : 'Generale';
    const loc = modalLocationSelect ? modalLocationSelect.value : 'Lanzo / Ciriè';

    let text = `Ciao Alexia, mi chiamo ${name || 'una futura allieva'} e vorrei informazioni sul corso "${course}" per la sede di ${loc}.`;
    const encoded = encodeURIComponent(text);
    modalWhatsAppBtn.href = `https://wa.me/393792631325?text=${encoded}`;
  }

  if (modalNameInput) modalNameInput.addEventListener('input', updateWhatsAppLink);
  if (modalCourseSelect) modalCourseSelect.addEventListener('change', updateWhatsAppLink);
  if (modalLocationSelect) modalLocationSelect.addEventListener('change', updateWhatsAppLink);
  updateWhatsAppLink();

  // 7. Toast notification helper
  function showToast(message) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Grazie! Il tuo messaggio è stato inviato con successo ad Alexia.');
      contactForm.reset();
    });
  }

  // 9. Newsletter Form Handling
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Iscrizione completata! Ti abbiamo inviato una conferma via email.');
      newsletterForm.reset();
    });
  }

  // Modal Email Form
  const modalEmailForm = document.getElementById('modalEmailForm');
  if (modalEmailForm) {
    modalEmailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Richiesta inviata! Ti risponderemo al più presto.');
      window.closeBookingModal();
      modalEmailForm.reset();
    });
  }
});
