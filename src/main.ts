import './style.css';
import { icons } from './icons';
import { initAllScrollAnimations } from './scroll-animations';

// ========================================
// Aesthetic Cloth Boutique — Main App
// ========================================

const INSTAGRAM_URL = 'https://www.instagram.com/aesthetic__cloth__/';
const WHATSAPP_URL = 'https://wa.me/919361608127';

// ---------- App Initialization ----------
function initApp(): void {
  renderPreloader();
  renderNavigation();
  renderHero();
  renderMarquee();
  renderCategories();
  renderAbout();
  renderServices();
  renderTestimonials();
  renderCTA();
  renderFooter();

  // Initialize interactions after render
  requestAnimationFrame(() => {
    initNavScroll();
    initMobileNav();
    initCountUpAnimation();
    initAllScrollAnimations();
    hidePreloader();
  });
}

// ---------- Preloader ----------
function renderPreloader(): void {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.id = 'preloader';
  preloader.innerHTML = `
    <div class="preloader__logo">
      <img src="/logo.png" alt="Aesthetic Cloth Boutique" />
    </div>
    <p class="preloader__text">Aesthetic Cloth</p>
  `;
  document.body.prepend(preloader);
}

function hidePreloader(): void {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 600);
    }
  }, 1800);
}

// ---------- Navigation ----------
function renderNavigation(): void {
  const app = document.getElementById('app')!;
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.id = 'nav';
  nav.innerHTML = `
    <div class="nav__inner">
      <a href="#" class="nav__logo">
        <img src="/logo.png" alt="Logo" class="nav__logo-img" />
        <div>
          <span class="nav__logo-text">Aesthetic Cloth</span>
          <span class="nav__logo-sub">Boutique</span>
        </div>
      </a>
      <div class="nav__links">
        <a href="#home" class="nav__link" id="nav-home">Home</a>
        <a href="#categories" class="nav__link" id="nav-categories">Collections</a>
        <a href="#about" class="nav__link" id="nav-about">About</a>
        <a href="#services" class="nav__link" id="nav-services">Services</a>
        <a href="#testimonials" class="nav__link" id="nav-testimonials">Reviews</a>
        <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="nav__cta" id="nav-cta" data-magnetic>
          ${icons.instagram(16)} Follow Us
        </a>
      </div>
      <button class="nav__hamburger" id="nav-hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;
  app.appendChild(nav);

  // Mobile nav overlay
  const mobileNav = document.createElement('div');
  mobileNav.className = 'nav__mobile';
  mobileNav.id = 'nav-mobile';
  mobileNav.innerHTML = `
    <a href="#home" class="nav__mobile-link">Home</a>
    <a href="#categories" class="nav__mobile-link">Collections</a>
    <a href="#about" class="nav__mobile-link">About</a>
    <a href="#services" class="nav__mobile-link">Services</a>
    <a href="#testimonials" class="nav__mobile-link">Reviews</a>
    <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="nav__mobile-link" style="color: var(--primary)">
      ${icons.instagram(20)} Instagram
    </a>
  `;
  app.appendChild(mobileNav);
}

function initNavScroll(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

function initMobileNav(): void {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ---------- Hero Section ----------
function renderHero(): void {
  const app = document.getElementById('app')!;
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'home';
  section.innerHTML = `
    <div class="hero__bg-pattern"></div>
    <div class="hero__float-element"></div>
    <div class="hero__float-element"></div>
    <div class="hero__float-element"></div>

    <div class="hero__content">
      <div class="hero__text">
        <div class="hero__badge">
          <span class="hero__badge-dot"></span>
          Now Accepting Orders | Avinashi, Tiruppur
        </div>
        <h1 class="hero__title">
          Where <span class="hero__title-accent">Tradition</span> Meets
          Modern <span class="hero__title-accent">Elegance</span>
        </h1>
        <p class="hero__description">
          Handcrafted ethnic fashion with exquisite aari work, premium embroidery,
          and custom designs that celebrate the beauty of Indian craftsmanship.
        </p>
        <div class="hero__actions">
          <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="btn-primary" id="hero-explore" data-magnetic>
            Explore Collection ${icons.arrowRight(18)}
          </a>
          <a href="#categories" class="btn-secondary" id="hero-categories" data-magnetic>
            ${icons.shoppingBag(18)} View Categories
          </a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-number" data-count="2966">0</span>
            <span class="hero__stat-label">Followers Trust Us</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-number" data-count="55">0</span>
            <span class="hero__stat-label">Collections</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-number" data-count="100">0</span>
            <span class="hero__stat-label">Custom Designs</span>
          </div>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__logo-wrapper">
          <div class="hero__logo-ring"></div>
          <div class="hero__logo-ring"></div>
          <img src="/logo.png" alt="Aesthetic Cloth Boutique Logo" class="hero__logo-img" />
        </div>
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- Marquee ----------
function renderMarquee(): void {
  const app = document.getElementById('app')!;
  const marquee = document.createElement('div');
  marquee.className = 'marquee';

  const items = [
    'Kurti', 'Maxi', 'Co-ords', 'Aari Work Blouse', 'Embroidery',
    'Custom Designs', 'Premium Fabric', 'Handcrafted', 'Ethnic Wear',
    'Designer Collection', 'Bridal Wear', 'Party Wear'
  ];

  const trackContent = items.map(item =>
    `<span class="marquee__item"><span class="marquee__dot"></span>${item}</span>`
  ).join('');

  marquee.innerHTML = `
    <div class="marquee__track">
      ${trackContent}${trackContent}
    </div>
  `;
  app.appendChild(marquee);
}

// ---------- Categories ----------
function renderCategories(): void {
  const app = document.getElementById('app')!;

  interface Category {
    title: string;
    count: string;
    icon: string;
    gradient: string;
  }

  const categories: Category[] = [
    { title: 'Kurtis', count: '20+ Designs', icon: icons.dress(48), gradient: 'linear-gradient(135deg, rgba(14,107,94,0.08), rgba(14,107,94,0.15))' },
    { title: 'Maxis', count: '15+ Designs', icon: icons.dancing(48), gradient: 'linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.15))' },
    { title: 'Co-ords', count: '12+ Sets', icon: icons.sparkles(48), gradient: 'linear-gradient(135deg, rgba(212,160,160,0.08), rgba(212,160,160,0.15))' },
    { title: 'Aari Work Blouse', count: 'Custom Made', icon: icons.needle(48), gradient: 'linear-gradient(135deg, rgba(14,107,94,0.1), rgba(201,169,110,0.1))' },
    { title: 'Embroidery', count: 'Handcrafted', icon: icons.thread(48), gradient: 'linear-gradient(135deg, rgba(14,107,94,0.06), rgba(14,107,94,0.12))' },
    { title: 'Fabric Store', count: 'Premium Quality', icon: icons.palette(48), gradient: 'linear-gradient(135deg, rgba(201,169,110,0.06), rgba(212,160,160,0.1))' },
  ];

  const section = document.createElement('section');
  section.className = 'categories';
  section.id = 'categories';
  section.innerHTML = `
    <div class="container">
      <div class="categories__header">
        <span class="section-label" data-scroll="fade-up">Our Collections</span>
        <h2 class="section-title" data-text-reveal>Curated With Love & Crafted With Passion</h2>
        <p class="section-subtitle" data-scroll="fade-up" data-scroll-delay="200">
          From everyday elegance to special occasion grandeur — discover our handpicked collections.
        </p>
      </div>
      <div class="categories__grid" data-stagger="120">
        ${categories.map((cat) => `
          <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="category-card stagger-item" data-tilt>
            <div class="category-card__bg" style="background: ${cat.gradient}"></div>
            <div class="category-card__pattern"></div>
            <div class="category-card__icon">${cat.icon}</div>
            <div class="category-card__content">
              <h3 class="category-card__title">${cat.title}</h3>
              <span class="category-card__count">${cat.count}</span>
            </div>
            <div class="category-card__arrow">${icons.arrowRight(18)}</div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- About Section ----------
function renderAbout(): void {
  const app = document.getElementById('app')!;
  const section = document.createElement('section');
  section.className = 'about';
  section.id = 'about';
  section.innerHTML = `
    <div class="container">
      <div class="about__inner">
        <div class="about__visual" data-scroll="fade-right" data-scale-reveal>
          <div class="about__image-frame">
            <img src="/logo.png" alt="Aesthetic Cloth Boutique" />
          </div>
          <div class="about__accent-box" data-scroll="zoom-in" data-scroll-delay="400">
            <span class="about__accent-number">2966+</span>
            <span class="about__accent-label">Followers Trust Us</span>
          </div>
        </div>
        <div class="about__text">
          <span class="section-label" data-scroll="fade-up">About Us</span>
          <h2 class="section-title" data-text-reveal>The Art of Indian Elegance</h2>
          <p class="about__description" data-scroll="fade-up" data-scroll-delay="200">
            At Aesthetic Cloth Boutique, every stitch tells a story. We specialize in creating
            and curating the finest Indian ethnic wear — from intricate aari work blouses to
            flowing maxis and coordinated sets. Our passion lies in blending traditional
            craftsmanship with contemporary design.
          </p>
          <p class="about__description" data-scroll="fade-up" data-scroll-delay="300">
            Each piece in our collection is thoughtfully selected or custom-made to ensure
            you feel confident and beautiful in every outfit.
          </p>
          <div class="about__features" data-stagger="100">
            <div class="about__feature stagger-item">
              <div class="about__feature-icon">${icons.scissors(22)}</div>
              <div>
                <div class="about__feature-title">Custom Tailoring</div>
                <div class="about__feature-desc">Made to your measurements</div>
              </div>
            </div>
            <div class="about__feature stagger-item">
              <div class="about__feature-icon">${icons.needle(22)}</div>
              <div>
                <div class="about__feature-title">Aari Work</div>
                <div class="about__feature-desc">Intricate hand embroidery</div>
              </div>
            </div>
            <div class="about__feature stagger-item">
              <div class="about__feature-icon">${icons.package(22)}</div>
              <div>
                <div class="about__feature-title">Fast Dispatch</div>
                <div class="about__feature-desc">Quick & secure shipping</div>
              </div>
            </div>
            <div class="about__feature stagger-item">
              <div class="about__feature-icon">${icons.gem(22)}</div>
              <div>
                <div class="about__feature-title">Premium Quality</div>
                <div class="about__feature-desc">Finest fabrics sourced</div>
              </div>
            </div>
          </div>
          <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="btn-primary" id="about-cta" data-scroll="fade-up" data-scroll-delay="500" data-magnetic>
            Visit Our Store ${icons.arrowRight(18)}
          </a>
        </div>
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- Services ----------
function renderServices(): void {
  const app = document.getElementById('app')!;

  interface Service {
    icon: string;
    title: string;
    desc: string;
  }

  const services: Service[] = [
    { icon: icons.thread(32), title: 'Custom Stitching', desc: 'Get your outfits tailored to perfection with our expert stitching services.' },
    { icon: icons.needle(32), title: 'Aari Embroidery', desc: 'Exquisite aari work designs handcrafted by skilled artisans for your blouses.' },
    { icon: icons.palette(32), title: 'Fabric Selection', desc: 'Choose from our premium collection of fabrics in various colors and textures.' },
    { icon: icons.ruler(32), title: 'Design Consultation', desc: 'Get personalized design advice to create your dream ethnic outfit.' },
  ];

  const section = document.createElement('section');
  section.className = 'services';
  section.id = 'services';
  section.innerHTML = `
    <div class="container">
      <div class="services__header">
        <span class="section-label" data-scroll="fade-up">What We Offer</span>
        <h2 class="section-title" data-text-reveal>Craftsmanship at Every Step</h2>
        <p class="section-subtitle" data-scroll="fade-up" data-scroll-delay="200">
          From fabric to finish — we bring your ethnic fashion dreams to life.
        </p>
      </div>
      <div class="services__grid" data-stagger="150">
        ${services.map((s) => `
          <div class="service-card stagger-item" data-tilt>
            <div class="service-card__icon">${s.icon}</div>
            <h3 class="service-card__title">${s.title}</h3>
            <p class="service-card__desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- Testimonials ----------
function renderTestimonials(): void {
  const app = document.getElementById('app')!;

  interface Testimonial {
    stars: number;
    text: string;
    name: string;
    loc: string;
    avatar: string;
  }

  const testimonials: Testimonial[] = [
    {
      stars: 5,
      text: '"The kurti I ordered was absolutely stunning! The fabric quality and the embroidery work exceeded my expectations. Will definitely order again!"',
      name: 'Priya S.',
      loc: 'Chennai',
      avatar: icons.user(20),
    },
    {
      stars: 5,
      text: '"Got a custom aari work blouse for my sister\'s wedding. The design was exactly what I wanted. Amazing craftsmanship and timely delivery!"',
      name: 'Kavitha R.',
      loc: 'Coimbatore',
      avatar: icons.user(20),
    },
    {
      stars: 5,
      text: '"Love the collection! Every piece is unique and the quality is premium. The co-ord set I bought got so many compliments. Thank you Aesthetic Cloth!"',
      name: 'Divya M.',
      loc: 'Madurai',
      avatar: icons.user(20),
    },
  ];

  const starsHTML = (count: number): string =>
    Array.from({ length: count }, () => icons.star(16)).join('');

  const section = document.createElement('section');
  section.className = 'testimonials';
  section.id = 'testimonials';
  section.innerHTML = `
    <div class="testimonials__bg"></div>
    <div class="container">
      <div class="testimonials__header">
        <span class="section-label" data-scroll="fade-up">Customer Love</span>
        <h2 class="section-title" data-text-reveal style="color: var(--white)">What Our Customers Say</h2>
      </div>
      <div class="testimonials__grid" data-stagger="180">
        ${testimonials.map((t) => `
          <div class="testimonial-card stagger-item">
            <div class="testimonial-card__stars">${starsHTML(t.stars)}</div>
            <p class="testimonial-card__text">${t.text}</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">${t.avatar}</div>
              <div>
                <div class="testimonial-card__name">${t.name}</div>
                <div class="testimonial-card__loc">${t.loc}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- CTA Section ----------
function renderCTA(): void {
  const app = document.getElementById('app')!;
  const section = document.createElement('section');
  section.className = 'cta';
  section.id = 'contact';
  section.innerHTML = `
    <div class="container">
      <div class="cta__inner" data-scale-reveal>
        <div class="cta__pattern"></div>
        <div class="cta__content">
          <div class="cta__icon" data-scroll="zoom-in">${icons.sparkles(48)}</div>
          <h2 class="cta__title" data-text-reveal>
            Follow Us for Daily Drops
          </h2>
          <p class="cta__desc" data-scroll="fade-up" data-scroll-delay="200">
            Stay updated with our latest collections, behind-the-scenes craftsmanship,
            and exclusive offers. Join our growing community!
          </p>
          <div class="cta__buttons" data-scroll="fade-up" data-scroll-delay="400">
            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="btn-instagram" id="cta-instagram" data-magnetic>
              ${icons.instagram(18)} Follow on Instagram
            </a>
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-whatsapp" id="cta-whatsapp" data-magnetic>
              ${icons.messageCircle(18)} WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(section);
}

// ---------- Footer ----------
function renderFooter(): void {
  const app = document.getElementById('app')!;
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer__top" data-scroll="fade-up">
        <div>
          <div class="footer__brand-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <h3 class="footer__brand-name">Aesthetic Cloth Boutique</h3>
          <p class="footer__brand-desc">
            Premium Indian ethnic fashion — kurtis, maxis, co-ords, aari work blouses,
            embroidery & custom designs. Handcrafted with love.
          </p>
        </div>
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          <a href="#home" class="footer__link">Home</a>
          <a href="#categories" class="footer__link">Collections</a>
          <a href="#about" class="footer__link">About Us</a>
          <a href="#services" class="footer__link">Services</a>
        </div>
        <div>
          <h4 class="footer__heading">Categories</h4>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link">Kurtis</a>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link">Maxis</a>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link">Co-ords</a>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link">Aari Work</a>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link">Embroidery</a>
        </div>
        <div>
          <h4 class="footer__heading">Connect</h4>
          <a href="${INSTAGRAM_URL}" target="_blank" class="footer__link footer__link--icon">${icons.instagram(14)} Instagram</a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="footer__link footer__link--icon">${icons.messageCircle(14)} WhatsApp</a>
          <a href="#" class="footer__link footer__link--icon">${icons.mail(14)} Email Us</a>
          <a href="https://maps.google.com/?q=Avinashi,Tiruppur" target="_blank" rel="noopener" class="footer__link footer__link--icon">${icons.mapPin(14)} Avinashi, Tiruppur</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; ${new Date().getFullYear()} Aesthetic Cloth Boutique. All rights reserved.</p>
        <div class="footer__social">
          <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">${icons.instagram(18)}</a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="footer__social-link" aria-label="WhatsApp">${icons.messageCircle(18)}</a>
          <a href="#" class="footer__social-link" aria-label="Facebook">${icons.facebook(18)}</a>
        </div>
      </div>
    </div>
  `;
  app.appendChild(footer);
}

// ---------- Count Up Animation ----------
function initCountUpAnimation(): void {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

function animateCount(el: HTMLElement, target: number): void {
  const duration = 2000;
  const start = performance.now();

  function update(currentTime: number): void {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = current >= 1000
      ? `${(current / 1000).toFixed(1)}K`
      : `${current}+`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', initApp);
