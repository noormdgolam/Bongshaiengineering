/**
 * Bongshai Engineering & Construction - Global Upgrades
 * Floating WhatsApp & Call Bar, Scroll Progress, Back-to-Top Indicator, Breadcrumbs & Search
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initFloatingActionBar();
  initBackToTopButton();
  initBreadcrumbs();
  initGlobalProjectSearch();
  initAnimatedCounters();
});

/* --------------------------------------------------------------------------
   1. Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scrollProgressBar';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #eab308 0%, #ca8a04 100%);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease-out;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* --------------------------------------------------------------------------
   2. Floating Action Bar (WhatsApp & Direct Call)
   -------------------------------------------------------------------------- */
function initFloatingActionBar() {
  const bar = document.createElement('div');
  bar.id = 'floatingActionBar';
  bar.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 1500;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `;

  bar.innerHTML = `
    <a href="https://wa.me/8801714104940" target="_blank" rel="noopener" aria-label="Contact on WhatsApp" style="
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #25d366;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
      transition: transform 0.2s ease;
      font-size: 1.5rem;
      animation: floatElement 3s ease-in-out infinite;
    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
      💬
    </a>

    <a href="tel:+8801714104940" aria-label="Call Direct Hotline" style="
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #eab308;
      border: 2px solid #0f172a;
      color: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.5);
      transition: transform 0.2s ease;
      font-size: 1.35rem;
    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
      📞
    </a>
  `;

  document.body.appendChild(bar);
}

/* --------------------------------------------------------------------------
   3. Back-to-Top Button
   -------------------------------------------------------------------------- */
function initBackToTopButton() {
  const btn = document.createElement('button');
  btn.id = 'backToTopBtn';
  btn.ariaLabel = 'Scroll back to top';
  btn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1500;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #eab308;
    color: #0f172a;
    font-weight: 900;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(234, 179, 8, 0.35);
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  btn.innerHTML = '↑';

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
    } else {
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   4. Breadcrumb Navigation for Inside Pages
   -------------------------------------------------------------------------- */
function initBreadcrumbs() {
  const path = window.location.pathname;
  const pageName = path.split('/').pop();

  if (!pageName || pageName === 'index.html' || pageName === '') return;

  const heroSection = document.querySelector('section');
  if (!heroSection) return;

  const breadcrumbDiv = document.createElement('div');
  breadcrumbDiv.className = 'container';
  breadcrumbDiv.style.cssText = 'padding-top: 1rem; padding-bottom: 0.5rem;';

  const cleanTitle = pageName.replace('.html', '').replace(/-/g, ' ').toUpperCase();

  breadcrumbDiv.innerHTML = `
    <div style="font-size: 0.85rem; color: var(--color-text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
      <a href="index.html" style="color: var(--color-accent-hover); font-weight: 600;">Home</a>
      <span>/</span>
      <span style="color: var(--color-text-main); font-weight: 700;">${cleanTitle}</span>
    </div>
  `;

  heroSection.appendChild(breadcrumbDiv);
}

/* --------------------------------------------------------------------------
   5. Instant Project Search Filter
   -------------------------------------------------------------------------- */
function initGlobalProjectSearch() {
  const filterBar = document.getElementById('portfolioFilters');
  if (!filterBar) return;

  const searchWrap = document.createElement('div');
  searchWrap.style.cssText = 'width: 100%; max-width: 400px; margin: 0 auto 1.5rem auto;';
  searchWrap.innerHTML = `
    <input type="text" id="projectSearchInput" placeholder="🔍 Search projects by name, client, or location..." style="
      width: 100%;
      padding: 0.75rem 1.25rem;
      border-radius: 9999px;
      border: 1px solid var(--color-border);
      background: var(--color-bg-card);
      color: var(--color-text-main);
      font-size: 0.9rem;
      box-shadow: var(--shadow-sm);
    ">
  `;

  filterBar.parentNode.insertBefore(searchWrap, filterBar);

  const searchInput = document.getElementById('projectSearchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Animated Statistics Counter
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter-value[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCount(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out quad
          const current = Math.floor(progress * (2 - progress) * target);
          el.innerText = `${prefix}${current.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.innerText = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        }

        requestAnimationFrame(updateCount);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}
