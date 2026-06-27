// ========================================
// Scroll Animations Engine
// Premium scroll-driven animations
// ========================================
import './scroll-animations.css';


// ---------- Types ----------
interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

// ---------- Scroll Progress Bar ----------
export function initScrollProgressBar(): void {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.innerHTML = '<div class="scroll-progress__fill"></div>';
  document.body.appendChild(bar);

  const fill = bar.querySelector('.scroll-progress__fill') as HTMLElement;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    fill.style.width = `${progress}%`;
  }, { passive: true });
}

// ---------- Enhanced Scroll Reveal with Directions ----------
export function initDirectionalReveals(): void {
  const revealElements = document.querySelectorAll('[data-scroll]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.scrollDelay || '0';
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

// ---------- Parallax on Scroll ----------
export function initParallaxScroll(): void {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
          const element = el as HTMLElement;
          const speed = parseFloat(element.dataset.parallax || '0.3');
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const offset = (scrollY - elementTop) * speed;

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.transform = `translateY(${offset}px)`;
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ---------- Hero Parallax (special handling) ----------
export function initHeroParallax(): void {
  const heroText = document.querySelector('.hero__text') as HTMLElement;
  const heroVisual = document.querySelector('.hero__visual') as HTMLElement;
  const heroFloats = document.querySelectorAll('.hero__float-element');
  const heroLogoImg = document.querySelector('.hero__logo-img') as HTMLElement;

  if (!heroText || !heroVisual) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;

        if (scrollY < maxScroll) {
          const progress = scrollY / maxScroll;

          // Text slides up and fades
          heroText.style.transform = `translateY(${scrollY * 0.25}px)`;
          heroText.style.opacity = `${1 - progress * 0.6}`;

          // Logo scales down slightly and moves up
          heroVisual.style.transform = `translateY(${scrollY * 0.15}px) scale(${1 - progress * 0.15})`;

          // Logo rotates on scroll
          if (heroLogoImg) {
            heroLogoImg.style.transform = `rotate(${scrollY * 0.03}deg)`;
          }

          // Float elements move at different parallax speeds
          heroFloats.forEach((float, i) => {
            const el = float as HTMLElement;
            const speeds = [0.4, -0.3, 0.2];
            el.style.transform = `translateY(${scrollY * speeds[i]}px)`;
          });
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ---------- Staggered Card Animations ----------
export function initStaggerCards(): void {
  const grids = document.querySelectorAll('[data-stagger]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLElement;
          const children = container.children;
          const staggerDelay = parseInt(container.dataset.stagger || '100', 10);

          Array.from(children).forEach((child, index) => {
            const el = child as HTMLElement;
            el.style.transitionDelay = `${index * staggerDelay}ms`;
            el.classList.add('stagger-visible');
          });

          observer.unobserve(container);
        }
      });
    },
    { threshold: 0.1 }
  );

  grids.forEach(grid => observer.observe(grid));
}

// ---------- Text Split & Reveal Animation ----------
export function initTextReveal(): void {
  const textElements = document.querySelectorAll('[data-text-reveal]');

  textElements.forEach(el => {
    const element = el as HTMLElement;
    const text = element.textContent || '';
    const words = text.split(' ');

    element.innerHTML = words.map((word, i) =>
      `<span class="word-wrap"><span class="word" style="transition-delay: ${i * 60}ms">${word}</span></span>`
    ).join(' ');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  textElements.forEach(el => observer.observe(el));
}

// ---------- Tilt Effect on Cards ----------
export function initTiltEffect(): void {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    const el = card as HTMLElement;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// ---------- Section Scale Reveal ----------
export function initSectionScale(): void {
  const sections = document.querySelectorAll('[data-scale-reveal]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  sections.forEach(s => observer.observe(s));
}

// ---------- Smooth Scroll Snapping Indicator ----------
export function initSectionIndicator(): void {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('nav__link--active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));
}

// ---------- Magnetic Button Effect ----------
export function initMagneticButtons(): void {
  const buttons = document.querySelectorAll('[data-magnetic]');

  buttons.forEach(btn => {
    const el = btn as HTMLElement;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)';
      setTimeout(() => { el.style.transition = ''; }, 400);
    });
  });
}

// ---------- Horizontal Scroll Section ----------
export function initHorizontalScroll(): void {
  const wrapper = document.querySelector('[data-horizontal-scroll]') as HTMLElement;
  if (!wrapper) return;

  const track = wrapper.querySelector('.horizontal-track') as HTMLElement;
  if (!track) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateHorizontalScroll(wrapper, track);
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(wrapper);
}

function updateHorizontalScroll(wrapper: HTMLElement, track: HTMLElement): void {
  window.addEventListener('scroll', () => {
    const rect = wrapper.getBoundingClientRect();
    const wrapperHeight = wrapper.offsetHeight;
    const progress = Math.max(0, Math.min(1,
      -rect.top / (wrapperHeight - window.innerHeight)
    ));

    const maxTranslate = track.scrollWidth - window.innerWidth;
    track.style.transform = `translateX(${-progress * maxTranslate}px)`;
  }, { passive: true });
}

// ---------- Custom Scissors & Thread Cursor ----------
export function initThreadCursor(): void {
  // Only initialize on desktop/devices with a fine pointer (mouse)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // 1. Create Custom Scissors Element
  const scissorsContainer = document.createElement('div');
  scissorsContainer.className = 'thread-cursor';
  scissorsContainer.innerHTML = `
    <svg class="scissors-svg" width="36" height="36" viewBox="0 0 32 32">
      <!-- Left Blade & Handle Group -->
      <g class="scissors-blade blade-left">
        <circle cx="9" cy="23" r="3.5" stroke="var(--primary)" stroke-width="2" fill="none" />
        <path d="M11 20 L16 16 L25 7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" />
      </g>
      <!-- Right Blade & Handle Group -->
      <g class="scissors-blade blade-right">
        <circle cx="23" cy="23" r="3.5" stroke="var(--primary)" stroke-width="2" fill="none" />
        <path d="M21 20 L16 16 L7 7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" />
      </g>
      <!-- Center Pivot Screw -->
      <circle cx="16" cy="16" r="1.5" fill="var(--gold)" />
    </svg>
  `;
  document.body.appendChild(scissorsContainer);

  // 2. Create Canvas for Thread Trail
  const canvas = document.createElement('canvas');
  canvas.className = 'thread-trail-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;

  // Handle Resize
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Animation Variables
  const points: { x: number; y: number }[] = [];
  const maxPoints = 10; // Length of thread
  const mouse = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0 };
  let angle = -45; // Default tilt of scissors

  let moveTimeout: number;

  // Track Mouse Movement
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Position Custom Scissors
    scissorsContainer.style.left = `${mouse.x}px`;
    scissorsContainer.style.top = `${mouse.y}px`;

    // Trigger movement cutting action
    scissorsContainer.classList.add('moving');
    clearTimeout(moveTimeout);
    moveTimeout = window.setTimeout(() => {
      scissorsContainer.classList.remove('moving');
    }, 150);

    // Calculate moving angle for dynamic direction
    const dx = mouse.x - lastMouse.x;
    const dy = mouse.y - lastMouse.y;
    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
      // Direct angle of movement
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 135; // offset
      angle += (targetAngle - angle) * 0.15; // Smooth rotation
      scissorsContainer.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }

    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;
  });

  // Snip Click Effect
  document.addEventListener('mousedown', () => {
    scissorsContainer.classList.add('stitching');
  });
  document.addEventListener('mouseup', () => {
    scissorsContainer.classList.remove('stitching');
  });

  // Clickable Hover Effects
  const addHoverEffects = () => {
    const clickables = document.querySelectorAll('a, button, [data-tilt], [data-magnetic]');
    clickables.forEach(el => {
      if (el.classList.contains('has-cursor-effect')) return;
      el.classList.add('has-cursor-effect');

      el.addEventListener('mouseenter', () => scissorsContainer.classList.add('hovered'));
      el.addEventListener('mouseleave', () => scissorsContainer.classList.remove('hovered'));
    });
  };
  addHoverEffects();

  // Watch for dynamic elements
  const observer = new MutationObserver(addHoverEffects);
  observer.observe(document.body, { childList: true, subtree: true });

  // Animation Loop
  function drawThread(): void {
    // Thread trails from the center pivot screw of the scissors
    const rad = (angle - 135) * (Math.PI / 180);
    const pivotX = mouse.x + Math.cos(rad) * 4;
    const pivotY = mouse.y + Math.sin(rad) * 4;

    points.push({ x: pivotX, y: pivotY });

    if (points.length > maxPoints) {
      points.shift();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (points.length > 1) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      ctx.quadraticCurveTo(
        points[points.length - 1].x,
        points[points.length - 1].y,
        pivotX,
        pivotY
      );

      ctx.strokeStyle = '#0E6B5E';
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(14, 107, 94, 0.15)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
    }

    requestAnimationFrame(drawThread);
  }

  drawThread();
}

// ---------- Custom Cloth Cut Page Transition ----------
export function initClothCutTransition(): void {
  // 1. Create Transition HTML
  const transitionContainer = document.createElement('div');
  transitionContainer.className = 'cloth-cut-transition';
  transitionContainer.id = 'cloth-cut-transition';
  transitionContainer.innerHTML = `
    <div class="cloth-half cloth-half--left">
      <div class="cloth-texture"></div>
    </div>
    <div class="cloth-half cloth-half--right">
      <div class="cloth-texture"></div>
    </div>
    <div class="cut-seam"></div>
    <div class="cut-scissors">
      <svg width="64" height="64" viewBox="0 0 32 32">
        <g class="scissors-blade blade-left">
          <circle cx="9" cy="23" r="3.5" stroke="var(--gold)" stroke-width="2" fill="none" />
          <path d="M11 20 L16 16 L25 7" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" />
        </g>
        <g class="scissors-blade blade-right">
          <circle cx="23" cy="23" r="3.5" stroke="var(--gold)" stroke-width="2" fill="none" />
          <path d="M21 20 L16 16 L7 7" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" />
        </g>
        <circle cx="16" cy="16" r="1.5" fill="var(--white)" />
      </svg>
    </div>
  `;
  document.body.appendChild(transitionContainer);

  // 2. Intercept Nav Clicks
  const addTransitionToLinks = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      if (link.classList.contains('has-transition-handler')) return;
      link.classList.add('has-transition-handler');

      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        // Trigger transition sequence
        triggerClothCutTransition(() => {
          // Scroll to section instantly behind the cloth cover
          targetSection.scrollIntoView({ behavior: 'auto' });
        });
      });
    });
  };
  addTransitionToLinks();

  // Watch for dynamic links
  const observer = new MutationObserver(addTransitionToLinks);
  observer.observe(document.body, { childList: true, subtree: true });
}

export function triggerClothCutTransition(callback: () => void): void {
  const container = document.getElementById('cloth-cut-transition');
  if (!container) {
    callback();
    return;
  }

  // Phase 1: Show overlay & Close cloth
  container.classList.add('active');

  // Phase 2: Start cutting animation after cloth is closed (450ms)
  setTimeout(() => {
    container.classList.add('cutting');

    // Phase 3: Scroll target section mid-way through cut (850ms)
    setTimeout(() => {
      callback();
    }, 400);

    // Phase 4: Finish cut and split open (1250ms)
    setTimeout(() => {
      container.classList.remove('cutting');
      container.classList.add('split');

      // Phase 5: Complete transition & Reset classes (1750ms)
      setTimeout(() => {
        container.classList.remove('active', 'split');
      }, 500);

    }, 800);

  }, 450);
}

// ---------- Initialize All Scroll Animations ----------
export function initAllScrollAnimations(): void {
  initScrollProgressBar();
  initDirectionalReveals();
  initHeroParallax();
  initStaggerCards();
  initTextReveal();
  initTiltEffect();
  initSectionScale();
  initSectionIndicator();
  initMagneticButtons();
  initThreadCursor();
}
