// NüHome Theme - Global JavaScript

class NuhomeTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeComponents();
    this.initAnnouncementBar();
  }

  setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded', 
          mobileMenu.classList.contains('active').toString());
      });
    }

    // Search toggle
    const searchToggle = document.querySelector('[data-search-toggle]');
    const searchForm = document.querySelector('[data-search-form]');
    
    if (searchToggle && searchForm) {
      searchToggle.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        searchToggle.setAttribute('aria-expanded', 
          searchForm.classList.contains('active').toString());
      });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('[data-newsletter-form]');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
    }

    // Contact form
    const contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) {
      contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
    }

    // Product quantity changes
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-quantity-plus]')) {
        this.updateQuantity(e.target, 1);
      }
      if (e.target.matches('[data-quantity-minus]')) {
        this.updateQuantity(e.target, -1);
      }
    });

    // Add to cart
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-add-to-cart]')) {
        this.handleAddToCart(e);
      }
    });

    // Testimonials slider
    this.initTestimonialsSlider();

    // Lazy loading for images
    this.initLazyLoading();

    // Smooth scroll for anchor links
    this.initSmoothScroll();
  }

  initializeComponents() {
    // Initialize any third-party components here
    console.log('NüHome theme initialized');
  }

  handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('[name="email"]').value;
    
    if (!this.validateEmail(email)) {
      this.showMessage('Please enter a valid email address', 'error');
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    // Simulate API call (replace with actual newsletter signup)
    setTimeout(() => {
      this.showMessage('Thank you for subscribing! Check your email for 10% off.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual contact form handling)
    setTimeout(() => {
      this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  }

  updateQuantity(button, change) {
    const quantityInput = button.parentNode.querySelector('[data-quantity-input]');
    const currentValue = parseInt(quantityInput.value) || 1;
    const newValue = Math.max(1, currentValue + change);
    quantityInput.value = newValue;
    
    // Trigger change event
    quantityInput.dispatchEvent(new Event('change'));
  }

  handleAddToCart(e) {
    e.preventDefault();
    const button = e.target;
    const productId = button.dataset.productId;
    const quantity = document.querySelector('[data-quantity-input]')?.value || 1;

    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Adding...';
    button.disabled = true;

    // Add to cart logic (replace with actual Shopify cart API)
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: productId,
        quantity: parseInt(quantity)
      })
    })
    .then(response => response.json())
    .then(data => {
      this.showMessage('Product added to cart!', 'success');
      this.updateCartCount();
    })
    .catch(error => {
      this.showMessage('Error adding product to cart', 'error');
    })
    .finally(() => {
      button.textContent = originalText;
      button.disabled = false;
    });
  }

  initTestimonialsSlider() {
    const slider = document.querySelector('[data-testimonials-slider]');
    if (!slider) return;

    const slides = slider.querySelectorAll('[data-testimonial]');
    const prevBtn = slider.querySelector('[data-slider-prev]');
    const nextBtn = slider.querySelector('[data-slider-next]');
    let currentSlide = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-advance slides
    setInterval(nextSlide, 5000);

    // Show first slide
    showSlide(0);
  }

  initLazyLoading() {
    const images = document.querySelectorAll('[data-lazy]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.lazy;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initAnnouncementBar() {
    const bar = document.querySelector('[data-announcement-bar]');
    if (!bar) return;

    const closeBtn = bar.querySelector('[data-announcement-close]');
    const key = 'nh_announcement_closed_v1';
    const delayMs = 0; // show immediately
    const durationMs = 0; // 0 = persist until closed

    if (localStorage.getItem(key)) {
      bar.style.display = 'none';
      return;
    }

    // Optional auto-hide after duration
    if (durationMs > 0) {
      setTimeout(() => { bar.style.display = 'none'; }, delayMs + durationMs);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        bar.style.display = 'none';
        localStorage.setItem(key, '1');
      });
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  showMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.className = `message message--${type}`;
    messageEl.textContent = message;
    
    document.body.appendChild(messageEl);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }

  updateCartCount() {
    // Update cart count in header
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCount = document.querySelector('[data-cart-count]');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
      });
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NuhomeTheme();
});

// Export for use in other scripts
window.NuhomeTheme = NuhomeTheme;
